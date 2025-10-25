#!/bin/bash

# Configuración
ZONE_ID="1ecd80125f54d3983039645079aed5e9"
ACCOUNT_ID="432a54869cfc91d25221ea5c18643700"
API_TOKEN="ARskEq6Q_bdyGbuZNSZzklZcdrA48r7r36t0Vy9Y"

echo "🚀 Configurando DNS en Cloudflare para finvestor.cl"
echo "=================================================="

# Función para crear registros DNS
create_dns_record() {
    local type=$1
    local name=$2
    local content=$3
    local proxied=$4
    local priority=${5:-""}
    
    local data="{\"type\":\"$type\",\"name\":\"$name\",\"content\":\"$content\",\"proxied\":$proxied,\"ttl\":1"
    
    if [ ! -z "$priority" ]; then
        data="{\"type\":\"$type\",\"name\":\"$name\",\"content\":\"$content\",\"proxied\":$proxied,\"ttl\":1,\"priority\":$priority"
    fi
    
    data="$data}"
    
    echo "Creando: $type $name -> $content (Proxied: $proxied)"
    
    curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
         -H "Authorization: Bearer $API_TOKEN" \
         -H "Content-Type: application/json" \
         --data "$data" | jq -r '.success, .errors'
}

echo ""
echo "📧 1. Configurando registros de CORREO (Bluehost) - DNS Only"
echo "--------------------------------------------------------------"

# MX Record
create_dns_record "MX" "finvestor.cl" "mail.finvestor.cl" "false" "0"

# A Records para correo
create_dns_record "A" "mail" "50.87.216.108" "false"
create_dns_record "A" "autodiscover" "50.87.216.108" "false"
create_dns_record "A" "autoconfig" "50.87.216.108" "false"

# CNAME para webmail y servicios
create_dns_record "CNAME" "webmail" "finvestor.cl" "false"
create_dns_record "CNAME" "cpanel" "finvestor.cl" "false"
create_dns_record "CNAME" "ftp" "finvestor.cl" "false"
create_dns_record "CNAME" "whm" "finvestor.cl" "false"
create_dns_record "CNAME" "webdisk" "finvestor.cl" "false"

# TXT Records (SPF y DKIM)
create_dns_record "TXT" "finvestor.cl" "v=spf1 +a +mx +ip4:50.87.216.108 +include:websitewelcome.com ~all" "false"
create_dns_record "TXT" "default._domainkey" "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7MqJin871A01pxwpANmEjYk2+OM7T7ZjzR97tpPZR32D4T7Psgj+U3Yv8tf5kVTtJy3pndFrgxNY1Tfbdo22mpsdCxtId/mMB/Fv+A55ZMFTCKXWZQF5CTxmklzM3DfX93tMmunlsbv8pcRGG/aaT8GTjxc33loHUKEwxSD8UVphNLcFzJiga22LP2v5qm4z07MJDqgdt0tkzO0QIoWluI/YcOEcB3VRzio/UcvDA2gbgciLHQafstlc4CToFyKLlmjtl5NgKvVF4ML8JuSj1bv4/7p+amY1KY3gBJ7/lZQcbhAChn8D7zTZHUy5PHKsdZxo2hkEz7/+rUbgQSgkxQIDAQAB;" "false"

# DMARC
# Crear registro TXT para DMARC con política estricta
echo "📧 Configurando registro DMARC..."
curl -s -X POST "$API_URL" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "TXT",
    "name": "_dmarc",
    "content": "v=DMARC1; p=quarantine; pct=100; rua=mailto:contacto@finvestor.cl; ruf=mailto:contacto@finvestor.cl; fo=1",
    "ttl": 3600,
    "proxied": false
  }' | jq -r 'if .success then "✅ DMARC configurado" else "❌ Error: " + (.errors[0].message // "desconocido") end'

echo ""
echo "🌐 2. Nota: El sitio web se configurará después de crear el proyecto en Cloudflare Pages"
echo "========================================================================================"

echo ""
echo "✅ Configuración DNS completada!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Crear proyecto en Cloudflare Pages manualmente desde el dashboard"
echo "2. Conectar con GitHub: laguileracl/finvestor-website"
echo "3. Configurar build: Framework = Next.js Static, Build command = npm run build, Output = out"
echo "4. Una vez desplegado, el dominio finvestor.cl se configurará automáticamente"

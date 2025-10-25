# 🚀 GUÍA COMPLETA DE DEPLOYMENT - FINVESTOR EN CLOUDFLARE

## ✅ Paso 1: Código ya está en GitHub
- Repositorio: https://github.com/laguileracl/finvestor-website
- Branch: main
- ✅ COMPLETADO

## ✅ Paso 2: DNS para CORREO configurado en Cloudflare
Los siguientes registros ya están configurados en Cloudflare:
- ✅ MX: mail.finvestor.cl (prioridad 0)
- ✅ A: mail → 50.87.216.108
- ✅ A: autodiscover → 50.87.216.108
- ✅ A: autoconfig → 50.87.216.108
- ✅ TXT: SPF configurado
- ✅ TXT: DKIM configurado
- ✅ TXT: DMARC configurado

**⚠️ IMPORTANTE: El correo seguirá funcionando 100% en Bluehost**

## 📋 Paso 3: Crear Proyecto en Cloudflare Pages (MANUAL)

### 3.1 Accede al Dashboard de Cloudflare
1. Ve a: https://dash.cloudflare.com/
2. Click en "Workers & Pages" (menú izquierdo)
3. Click en "Create application"
4. Selecciona la pestaña "Pages"
5. Click en "Connect to Git"

### 3.2 Conectar con GitHub
1. Autoriza Cloudflare a acceder a tu GitHub si aún no lo has hecho
2. Selecciona el repositorio: **laguileracl/finvestor-website**
3. Click en "Begin setup"

### 3.3 Configurar el Build
Usa EXACTAMENTE esta configuración:

```
Project name: finvestor
Production branch: main

Build settings:
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (dejar en blanco)

Environment variables:
NODE_VERSION = 18
```

4. Click en "Save and Deploy"

### 3.4 Esperar el Deployment
- Cloudflare comenzará a construir tu sitio
- Esto tomará 2-5 minutos
- Recibirás una URL temporal como: https://finvestor.pages.dev

## 📋 Paso 4: Configurar Dominio Personalizado

### 4.1 En el proyecto de Cloudflare Pages
1. Una vez desplegado, ve a la pestaña "Custom domains"
2. Click en "Set up a custom domain"
3. Ingresa: **finvestor.cl**
4. Click en "Continue"

### 4.2 Cloudflare configurará automáticamente
- Creará el registro A para @ (root)
- Creará el registro CNAME para www
- Ambos con proxy activado (nube naranja 🟠)

### 4.3 Verificar
Espera 2-5 minutos y verifica:
- https://finvestor.cl → debe cargar tu sitio
- https://www.finvestor.cl → debe redirigir a finvestor.cl

## ✅ Paso 5: Verificar que el CORREO sigue funcionando

### 5.1 Prueba de envío
1. Accede a: https://webmail.finvestor.cl
2. Login con tu cuenta de correo
3. Envía un email de prueba

### 5.2 Prueba de recepción
1. Desde otro correo, envía un mensaje a contacto@finvestor.cl
2. Verifica que llegue correctamente

### 5.3 Herramientas de verificación
- MX Check: https://mxtoolbox.com/domain/finvestor.cl
- DNS Check: https://dnschecker.org/all-dns-records-of-domain.php?query=finvestor.cl

## 🔧 Troubleshooting

### Si el sitio no carga
1. Ve a Cloudflare Dashboard → DNS
2. Verifica que existan registros CNAME para:
   - finvestor.cl → finvestor.pages.dev (Proxied)
   - www → finvestor.pages.dev (Proxied)

### Si el correo no funciona
1. Ve a Cloudflare Dashboard → DNS
2. Verifica que estos registros NO tengan proxy (nube gris):
   - MX: mail.finvestor.cl
   - A mail: 50.87.216.108
   - A autodiscover: 50.87.216.108
   - TXT (SPF y DKIM)

### Si hay conflicto de registros
1. Elimina cualquier registro A para @ que apunte a 50.87.216.108
2. El registro para el sitio web debe apuntar a Cloudflare Pages, no a Bluehost

## 📊 Estado Final Esperado

### DNS Records en Cloudflare

| Tipo | Nombre | Valor | Proxy | Propósito |
|------|--------|-------|-------|-----------|
| CNAME | @ | finvestor.pages.dev | 🟠 Proxied | Sitio web |
| CNAME | www | finvestor.pages.dev | 🟠 Proxied | Sitio web |
| MX | @ | mail.finvestor.cl | ⚪ DNS only | Correo |
| A | mail | 50.87.216.108 | ⚪ DNS only | Correo |
| A | autodiscover | 50.87.216.108 | ⚪ DNS only | Correo |
| A | autoconfig | 50.87.216.108 | ⚪ DNS only | Correo |
| TXT | @ | v=spf1 ... | ⚪ DNS only | Correo SPF |
| TXT | default._domainkey | v=DKIM1 ... | ⚪ DNS only | Correo DKIM |
| TXT | _dmarc | v=DMARC1 ... | ⚪ DNS only | Correo DMARC |

### Servicios Activos
- ✅ Sitio web: https://finvestor.cl (Cloudflare Pages)
- ✅ Correo: contacto@finvestor.cl (Bluehost)
- ✅ Webmail: https://webmail.finvestor.cl (Bluehost)
- ✅ cPanel: https://cpanel.finvestor.cl (Bluehost)

## 🎉 Resultado Final

1. **Sitio web moderno y rápido** servido desde Cloudflare Pages
2. **Correo funcionando** sin interrupciones en Bluehost
3. **Todo el correo histórico** intacto y accesible
4. **SSL/HTTPS** automático en todo
5. **CDN global** de Cloudflare
6. **DDoS protection** incluida

## 📞 Soporte

Si algo no funciona:
1. Verifica los DNS en: https://dash.cloudflare.com
2. Revisa el deployment en: https://dash.cloudflare.com → Workers & Pages
3. Consulta los logs de build si hay errores

---

**¡Todo listo para producción!** 🚀

# Diagnóstico y Corrección de Email - finvestor.cl

**Fecha:** 7 de noviembre, 2025

## Problemas Encontrados

### 🔴 Críticos (Corregidos)

1. **webmail.finvestor.cl - CNAME Incorrecto**
   - ❌ ANTES: CNAME → finvestor.cl (proxied: true)
   - ✅ AHORA: A → 50.87.216.108 (proxied: false)
   - **Impacto:** El webmail redirigía al sitio web en lugar del servidor de correo

2. **cpanel.finvestor.cl - CNAME Incorrecto**
   - ❌ ANTES: CNAME → finvestor.cl (proxied: true)  
   - ✅ AHORA: A → 50.87.216.108 (proxied: false)
   - **Impacto:** No se podía acceder al panel de control de email

3. **ftp.finvestor.cl - CNAME Incorrecto**
   - ❌ ANTES: CNAME → finvestor.cl (proxied: true)
   - ✅ AHORA: A → 50.87.216.108 (proxied: false)
   - **Impacto:** FTP no funcionaba correctamente

## Configuración Correcta Actual

### Registros MX
```
finvestor.cl.  MX  0 mail.finvestor.cl.
```

### Registros A (Email Infrastructure)
```
mail.finvestor.cl       → 50.87.216.108 (proxied: false) ✅
webmail.finvestor.cl    → 50.87.216.108 (proxied: false) ✅
cpanel.finvestor.cl     → 50.87.216.108 (proxied: false) ✅
ftp.finvestor.cl        → 50.87.216.108 (proxied: false) ✅
autodiscover.finvestor.cl → 50.87.216.108 (proxied: false) ✅
autoconfig.finvestor.cl → 50.87.216.108 (proxied: false) ✅
```

### Registros de Seguridad

**SPF:**
```
v=spf1 +a +mx +ip4:50.87.216.108 +include:websitewelcome.com ~all
```

**DMARC:**
```
v=DMARC1; p=quarantine; pct=100; rua=mailto:contacto@finvestor.cl; ruf=mailto:contacto@finvestor.cl; fo=1
```

**DKIM:**
```
default._domainkey.finvestor.cl (RSA 2048 bits) ✅
```

### Registros SRV (Auto-configuración)
```
_autodiscover._tcp.finvestor.cl → cpanelemaildiscovery.cpanel.net:443
_caldavs._tcp.finvestor.cl → box2285.bluehost.com:2080
_caldav._tcp.finvestor.cl → box2285.bluehost.com:2079
_carddavs._tcp.finvestor.cl → box2285.bluehost.com:2080
_carddav._tcp.finvestor.cl → box2285.bluehost.com:2079
```

## Pruebas de Conectividad

✅ Puerto 25 (SMTP): Accesible
✅ Puerto 587 (SMTP Submission): Accesible
✅ Puerto 465 (SMTPS): Accesible
✅ Puerto 993 (IMAPS): Accesible

## URLs de Acceso

- **Webmail:** https://webmail.finvestor.cl
- **cPanel:** https://cpanel.finvestor.cl
- **Autodiscover:** Configurado automáticamente

## Configuración de Cliente de Correo

### Servidor de Entrada (IMAP)
- Servidor: mail.finvestor.cl
- Puerto: 993
- Seguridad: SSL/TLS
- Usuario: tu-email@finvestor.cl
- Contraseña: (tu contraseña de correo)

### Servidor de Salida (SMTP)
- Servidor: mail.finvestor.cl
- Puerto: 587 (recomendado) o 465
- Seguridad: STARTTLS (587) o SSL/TLS (465)
- Autenticación: Requerida
- Usuario: tu-email@finvestor.cl
- Contraseña: (tu contraseña de correo)

## Tiempo de Propagación DNS

Los cambios DNS pueden tardar hasta 48 horas en propagarse completamente, pero generalmente están disponibles en 5-15 minutos.

## Verificación

Para verificar que todo funciona correctamente:

1. **Acceso Webmail:** https://webmail.finvestor.cl
2. **Test MX Records:** https://mxtoolbox.com/domain/finvestor.cl
3. **Test SPF/DKIM/DMARC:** https://mxtoolbox.com/SuperTool.aspx
4. **Test Email Delivery:** Envía un correo de prueba a contacto@finvestor.cl

## Notas Importantes

⚠️ **NUNCA actives el proxy de Cloudflare (nube naranja) en:**
- Registros MX
- Registros A/AAAA de mail, webmail, cpanel, autodiscover, autoconfig
- Registros FTP
- Cualquier subdominio relacionado con email

✅ **Solo activa el proxy en:**
- finvestor.cl (sitio web principal)
- www.finvestor.cl
- Otros subdominios del sitio web (NO de email)

# Deployment Instructions for Bluehost

## Quick Deployment Guide

### Step 1: Build the Static Site

```bash
npm install
npm run build
```

This will create an `out/` folder with all static files.

### Step 2: Upload to Bluehost

1. Login to your Bluehost cPanel
2. Open "File Manager"
3. Navigate to `public_html` (or your domain's directory)
4. Upload ALL files from the `out/` folder
5. Upload the `.htaccess` file (see below)

### Step 3: Configure .htaccess

Create or edit `.htaccess` in `public_html`:

```apache
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule . /index.html [L]
</IfModule>

# Enable Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  
  # Fonts
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType application/font-woff "access plus 1 year"
  
  # HTML
  ExpiresByType text/html "access plus 1 day"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

### Step 4: Verify Deployment

1. Visit https://finvestor.cl
2. Test all pages:
   - Home (/)
   - Servicios (/servicios)
   - Sobre Nosotros (/nosotros)
   - Contacto (/contacto)
3. Check mobile responsiveness
4. Test contact form
5. Verify all links work

## Updating the Site

When you need to update the site:

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Upload the new files from `out/` to Bluehost
5. Clear browser cache to see changes

## Domain Configuration

Make sure your domain finvestor.cl is properly configured:

1. In Bluehost cPanel, go to "Domains"
2. Ensure finvestor.cl points to the correct directory
3. Configure SSL certificate (Let's Encrypt is free on Bluehost)
4. Enable HTTPS redirect

## SSL/HTTPS Setup

1. In cPanel, go to "SSL/TLS Status"
2. Install Let's Encrypt SSL certificate for finvestor.cl
3. Add this to .htaccess for HTTPS redirect:

```apache
# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

## Performance Tips

1. **Enable Cloudflare** (free) through Bluehost for:
   - CDN
   - DDoS protection
   - Additional caching

2. **Optimize images** before uploading:
   - Use WebP format when possible
   - Compress images (TinyPNG, ImageOptim)

3. **Monitor performance**:
   - Google PageSpeed Insights
   - GTmetrix
   - Pingdom

## Troubleshooting

### 404 Errors on Page Refresh
- Check .htaccess configuration
- Ensure RewriteEngine is On

### Images not loading
- Check file paths are correct
- Ensure images are in public folder
- Verify permissions (644 for files, 755 for directories)

### Slow loading
- Enable compression in .htaccess
- Use Cloudflare CDN
- Optimize images

## Contact Form Setup

The contact form needs backend configuration. Options:

1. **Formspree** (Easiest)
   - Sign up at formspree.io
   - Update form action in ContactForm.tsx

2. **SendGrid/Mailgun**
   - Configure API endpoint
   - Update form handler

3. **PHP Script** (if Bluehost supports)
   - Create contact.php
   - Update form to POST to PHP script

## Support

For technical issues:
- Email: contacto@finvestor.cl
- Phone: +56 2 2234 5678

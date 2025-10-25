# Finvestor - Sitio Web Corporativo

Sitio web profesional para Finvestor, empresa dedicada a la prestación de servicios financieros corporativos, gestión de inversiones y patrimonios.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas y profesionales
- **Lucide React** - Iconos modernos y consistentes

## ✨ Características

- ✅ Diseño responsive y mobile-first
- ✅ Optimización SEO completa
- ✅ Performance optimizada (SSG)
- ✅ Animaciones suaves y profesionales
- ✅ Formulario de contacto funcional
- ✅ Navegación intuitiva
- ✅ Sitemap y robots.txt configurados
- ✅ Metadata y Open Graph tags
- ✅ Accesibilidad (WCAG 2.1)
- ✅ PWA ready

## 📁 Estructura del Proyecto

```
finvestor/
├── app/                      # App Router de Next.js
│   ├── contacto/            # Página de contacto
│   ├── nosotros/            # Sobre nosotros
│   ├── privacidad/          # Política de privacidad
│   ├── servicios/           # Página de servicios
│   ├── terminos/            # Términos y condiciones
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # Configuración robots.txt
│   └── sitemap.ts           # Sitemap dinámico
├── components/              # Componentes reutilizables
│   ├── sections/            # Secciones de páginas
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── Header.tsx
├── lib/                     # Utilidades
│   └── utils.ts
├── public/                  # Archivos estáticos
│   └── finvestor_logo opcion1.png
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Deployment en Bluehost

### Opción 1: Deployment Estático (Recomendado para Bluehost)

1. **Genera la build estática:**
```bash
npm run build
```

2. **Los archivos se generarán en la carpeta `out/`**

3. **Sube los archivos a Bluehost:**
   - Accede al cPanel de Bluehost
   - Ve a "Administrador de archivos"
   - Navega a la carpeta `public_html` (o el directorio de tu dominio)
   - Sube todo el contenido de la carpeta `out/`
   - Asegúrate de que el archivo `.htaccess` esté configurado correctamente

4. **Configura el archivo `.htaccess`:**
```apache
# Añade estas reglas al .htaccess en public_html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Caché para recursos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>
```

### Opción 2: Deployment con Node.js (Si Bluehost soporta Node.js)

1. **Sube el proyecto completo a Bluehost**

2. **Conéctate por SSH y ejecuta:**
```bash
cd /home/tu-usuario/public_html
npm install
npm run build
npm start
```

3. **Configura el proceso para que se ejecute en segundo plano usando PM2 o similar**

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },    // Azul principal
  secondary: { ... },  // Gris
  accent: { ... },     // Amarillo/Dorado
}
```

### Contenido

- **Textos:** Edita los archivos en `app/` y `components/`
- **Imágenes:** Coloca las imágenes en la carpeta `public/`
- **Metadata SEO:** Modifica los archivos `layout.tsx` y `page.tsx` de cada ruta

### Formulario de Contacto

El formulario en `components/ContactForm.tsx` está preparado para:
- Envío por email (configura el backend)
- Integración con servicios como SendGrid, Mailgun, etc.
- Google Forms, Formspree, o similar

## 📊 SEO y Performance

- ✅ **Sitemap automático** en `/sitemap.xml`
- ✅ **Robots.txt** configurado
- ✅ **Meta tags** optimizados
- ✅ **Open Graph** para redes sociales
- ✅ **Imágenes optimizadas** (usar Next.js Image)
- ✅ **Lazy loading** automático
- ✅ **PWA manifest** configurado

## 🔧 Mantenimiento

### Actualizar contenido:
- Edita los archivos `.tsx` correspondientes
- Ejecuta `npm run build`
- Sube los nuevos archivos a Bluehost

### Actualizar dependencias:
```bash
npm update
npm audit fix
```

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📞 Soporte

Para soporte técnico:
- Email: contacto@finvestor.cl
- Teléfono: +56 2 2234 5678

## 📄 Licencia

© 2025 Finvestor. Todos los derechos reservados.

---

Desarrollado con ❤️ usando Next.js 14 y Tailwind CSS

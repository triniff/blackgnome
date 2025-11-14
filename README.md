# BlackGnome Band

Sitio web oficial de la banda BlackGnome.

## Stack Tecnológico 2025

- **Framework**: Astro 4.x
- **CSS**: Tailwind CSS 3.x
- **TypeScript**: 5.x
- **Linting**: ESLint 9 + Stylelint 16
- **Formateo**: Prettier 3.x
- **CI/CD**: GitHub Actions

## Inicio Rápido

```bash
# Clonar repositorio
git clone https://github.com/ordenador/blackgnome.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

Navega a http://localhost:4321 en tu navegador.

## Comandos Disponibles

### Desarrollo

- `npm run dev` - Inicia el servidor de desarrollo de Astro
- `npm start` - Alias de `npm run dev`
- `npm run preview` - Preview del build de producción

### Build

- `npm run build` - Crea el build de producción en `dist/`

### Calidad de Código

- `npm test` - Ejecuta format check, lint y type check
- `npm run format` - Formatea código con Prettier
- `npm run format:check` - Verifica formato sin modificar archivos
- `npm run lint` - Ejecuta ESLint y Stylelint
- `npm run lint:js` - Ejecuta solo ESLint
- `npm run lint:css` - Ejecuta solo Stylelint
- `npm run lint:fix` - Auto-fix de issues de linting
- `npm run type-check` - Verifica tipos con TypeScript

## Estructura del Proyecto

```
/
├── .github/
│   └── workflows/       # GitHub Actions (CI/CD)
├── public/              # Assets estáticos
│   ├── images/         # Imágenes
│   ├── fonts/          # Fuentes
│   └── favicon.png     # Favicon
├── src/
│   ├── components/     # Componentes Astro
│   │   ├── Header.astro
│   │   ├── BandSection.astro
│   │   ├── VideosSection.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # Páginas (rutas)
│   │   └── index.astro
│   └── styles/         # Estilos globales
│       └── global.css
├── old-webpack-setup/  # Código antiguo (backup)
└── dist/               # Build output (generado)
```

## GitHub Actions

El proyecto incluye dos workflows:

### CI - Quality Check

Se ejecuta en cada push/PR a `main`, `develop` o ramas `claude/**`:

- ✅ Format check (Prettier)
- ✅ Lint JavaScript/TypeScript (ESLint)
- ✅ Lint CSS (Stylelint)
- ✅ Type check (TypeScript)
- ✅ Build de producción

### Deploy to GitHub Pages

Se ejecuta en push a `main`:

- 🚀 Build automático
- 🚀 Deploy a GitHub Pages

## Migración desde Webpack

Este proyecto fue migrado desde Webpack 4 + Bootstrap 4 + jQuery a:

- Astro (framework moderno para sitios estáticos)
- Tailwind CSS (utility-first CSS)
- TypeScript (tipado estático)

Los archivos antiguos están en `old-webpack-setup/` como referencia.

## Contacto

- Email: banda_blackgnome@gmail.com
- Facebook: [Black Gnome](https://www.facebook.com/Black-Gnome-137521263728335/)
- Instagram: [@blackgnomeband](https://www.instagram.com/blackgnomeband/?hl=es-la)
- YouTube: [BlackGnome Channel](https://www.youtube.com/channel/UCBgsrdBzSi9i29rkm4nG1XQ/featured)
- SoundCloud: [BlackGnome](https://soundcloud.com/user-36408607)

## Licencia

© BlackGnome Band

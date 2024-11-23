# Proyecto Next.js - Estructura de Carpetas

Este documento describe la estructura de carpetas del proyecto, destacando el uso de atomic design para su arquitectura.

## Estructura de Carpetas

```plaintext

src/
├── components/        # Componentes organizados por Atomic Design
│   ├── atoms/         # Componentes básicos e indivisibles
│   ├── molecules/     # Combinación de átomos para crear estructuras básicas
│   │   ├── LoginForm.tsx # Formulario de login usando Formik
│   ├── organisms/     # Agrupaciones de moléculas que forman secciones completas
│   │   ├── Navbar.tsx    # Barra de navegación reutilizable
│   │   ├── Footer.tsx    # Pie de pagina reutilizable
│   ├── templates/     # Estructuras principales de páginas (layouts)
│   │   ├── LoginTemplate.tsx # Plantilla para la página de login
│   │   ├── HomeTemplate.tsx  # Plantilla para la página de inicio
│   ├── contexts/         # Contextos reutilizables
│   ├── data/             # Datos mock.
├── pages/             # Páginas principales de la aplicación
│   ├── _app.tsx       # Configuración global de la aplicación
│   ├── _document.tsx  # Configuración del documento HTML principal
│   ├── index.tsx      # Página de inicio del proyecto
│   ├── login.tsx      # Página de login
├── styles/            # Estilos globales
│   ├── globals.css    # Estilos generales aplicados a toda la aplicación
├── utils/             # Funciones auxiliares
│   ├── api.js         # Configuración del cliente para consumir Strapi
│   ├── i18n.js        # Configuración del i18n para la traduccion

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

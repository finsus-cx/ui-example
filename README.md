# Finsus CX Demo

Demo de la librería de componentes `@finsus-cx/ui`.

## Instalación

```bash
npm install
npm run dev
```

## Configuración

### 1. Instalar la librería

```bash
npm install @finsus-cx/ui
```

### 2. Configurar Tailwind

Crear `tailwind.config.js`:

```js
import finsusPreset from '@finsus-cx/ui/tailwind-preset';

export default {
  presets: [finsusPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@finsus-cx/ui/dist/**/*.js",
  ],
}
```

En `src/index.css`:

```css
@import "tailwindcss";
@config "../tailwind.config.js";
@source "../node_modules/@finsus-cx/ui/dist";
```

## Componentes

### CTAButton

```tsx
import { CTAButton } from '@finsus-cx/ui'

<CTAButton variant="primary" icon={<IconComponent />}>
  Abrir mi cuenta
</CTAButton>
```

**Variantes:** `primary` | `secondary` | `white` | `white-hover-red`

**Props:**
- `variant` - Estilo del botón
- `icon` - Ícono izquierdo (desaparece en hover)
- `hoverIcon` - Ícono que aparece en hover
- `textAlign` - `left` | `center` | `right`

### CardBanner

```tsx
import { CardBanner } from '@finsus-cx/ui'

<CardBanner
  imageUrl="/imagen.jpg"
  alt="Descripción"
  variant="hero"
  onClick={() => {}}
/>
```

**Variantes:** `default` | `hero`

### ProductCard

```tsx
import { ProductCard } from '@finsus-cx/ui'

<ProductCard
  icon="/icono.png"
  title={<>Crédito <span className="text-finsus-red">simple</span></>}
  description="Descripción del producto"
  buttonText="Solicitar"
  onClick={() => {}}
/>
```

### Footer

```tsx
import { Footer } from '@finsus-cx/ui'

<Footer
  logoUrl="/logo.svg"
  navigationColumns={[
    { title: "Productos", items: [{ label: "Crédito", href: "/credito" }] }
  ]}
  storeButtons={[
    { id: 'apple', label: 'App Store', href: '...' },
    { id: 'google', label: 'Google Play', href: '...' }
  ]}
  contactEntries={[
    { id: 'phone', label: '800 123 4567', href: 'tel:...', iconType: 'phone' }
  ]}
  socialIcons={[
    { id: 'facebook', href: '...' },
    { id: 'instagram', href: '...' }
  ]}
/>
```

## Tokens de diseño

El preset incluye:

| Token | Valores |
|-------|---------|
| **Colores** | `finsus-dark`, `finsus-red`, `finsus-light`, `finsus-active`, `finsus-card-active`, `finsus-border`, `finsus-gray`, `finsus-navy`, `finsus-navy-light`, `finsus-blue-light-bg` |
| **Fuentes** | `font-poppins`, `font-inter`, `font-montserrat` |
| **Border Radius** | `rounded-4xl` (35px) |
| **Letter Spacing** | `tracking-tight-custom` (-0.4px) |

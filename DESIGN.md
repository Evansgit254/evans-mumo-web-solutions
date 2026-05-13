---
name: Total Studio Aesthetic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#c4c7ca'
  on-secondary: '#2d3134'
  secondary-container: '#46494d'
  on-secondary-container: '#b6b8bc'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#081a2d'
  on-tertiary-container: '#73839b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#e0e2e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: metropolis
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: metropolis
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: metropolis
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  strategy-md:
    fontFamily: metropolis
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  syntax-mono:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.05em
  syntax-label:
    fontFamily: jetbrainsMono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  grid-unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

This design system embodies the "Total Studio" aesthetic, a synthesis of rigorous engineering precision and high-level strategic consulting. The personality is established and elite, targeting a high-frequency audience that values both technical mastery and architectural elegance. 

The visual direction leans into **Structural Minimalism** with **Glassmorphism** overlays. It avoids superfluous decoration in favor of functional beauty: blueprint schematics serve as background textures, while high-contrast imagery is framed by rigid structural grids. The UI should feel like a premium command center—authoritative, stable, and deeply sophisticated.

## Colors

The palette is anchored in **Deep Institutional Navy**, providing a sense of historical weight and permanence. **Silver Chrome** is used sparingly as a high-frequency accent to denote precision and modern engineering.

- **Primary:** Deep Institutional Navy (#0A192F) used for the foundational canvas and primary brand moments.
- **Secondary/Accent:** Silver Chrome (#E5E7EB) used for interactive elements, hairline borders, and critical technical data.
- **Neutral:** Slate (#64748B) used for secondary text, metadata, and structural grid lines.
- **Surface:** A darker variant of navy (#020617) is used for container backgrounds to create depth against the primary canvas.

## Typography

The typographic system utilizes a "Dual-Track" approach to reflect the two pillars of the studio. 

1. **Strategic Authority (Capital):** Headlines use **Metropolis**, a geometric sans-serif that conveys structural stability and modern finance. Large display sizes should use tight letter-spacing to feel impactful and confident.
2. **Technical Mastery (Syntax):** Data, labels, and engineering details use **JetBrains Mono**. This font brings the "Studio" aesthetic to life, signaling precision and a developer-centric focus.
3. **Utility:** **Inter** handles high-density body copy for maximum legibility within complex technical documentation.

## Layout & Spacing

This design system employs a **Rigid Structural Grid**. The layout philosophy is based on a 12-column fixed grid for desktop, transitioning to a 4-column fluid grid for mobile. 

Spacing is strictly mathematical, built on a **4px base unit**. Elements must align to the grid lines, which should often be visually represented by subtle 1px Slate borders to mimic an architectural blueprint. 

**Breakpoints:**
- **Desktop:** 1280px+ (12 columns, 64px margins)
- **Tablet:** 768px - 1279px (8 columns, 40px margins)
- **Mobile:** <767px (4 columns, 20px margins)

## Elevation & Depth

Depth is achieved through **Glass-Architectural Surfaces** rather than traditional shadows. 

- **Tonal Layering:** Surfaces are stacked using varying opacities of Deep Navy. A primary container might be at 100% opacity, while a raised modal uses a 85% opacity with a heavy backdrop blur (20px-40px).
- **Hairline Outlines:** To define boundaries, use 1px solid borders in Silver Chrome at low opacity (10-20%). 
- **Blueprint Backgrounds:** The lowest layer (the canvas) features a repeating SVG grid or schematic pattern in a faint Slate color, providing a sense of "work-in-progress" engineering.

## Shapes

The shape language is **Sharp (0px)**. 

To maintain the elite, institutional feel, rounded corners are avoided entirely. Every button, card, and input field features 90-degree angles. This reinforces the "Engineering Studio" aesthetic, suggesting a product built on logic, blueprints, and precision rather than soft consumer trends.

## Components

- **Buttons:** Primary buttons are solid Silver Chrome with black text (Metropolis Bold). Secondary buttons are "Ghost" style with a 1px Silver Chrome border and JetBrains Mono text.
- **Cards:** Defined by 1px Slate borders. Backgrounds use a subtle glass-blur effect when hovering over blueprint textures. Card headers should use the `syntax-label` style.
- **Inputs:** Square fields with Slate borders. On focus, the border transitions to a glowing Silver Chrome. All labels use JetBrains Mono.
- **Technical Readouts:** Use "Status Chips" that look like terminal tags—rectangular, monochromatic, and using monospaced type.
- **Data Tables:** High-density, using hairline dividers. Row highlighting should use a subtle Navy tint rather than a shadow.
- **Navigation:** Top-tier navigation uses Metropolis for high-level categories (e.g., SOLUTIONS, CAPITAL) while sub-navigation or technical breadcrumbs use JetBrains Mono.

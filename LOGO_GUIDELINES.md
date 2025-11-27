# Divisy Logo Guidelines

## Logo Concept

The Divisy logo embodies the **Magician Archetype** - representing transformation, vision, and mastery of fundamental forces. The design philosophy reflects our core values:

- **Central Point (Blue)**: Represents **The Source** - the point of transformation, mastery, and authentic power
- **Transformation Rings**: Represent **Expanding Influence** - waves of transformation radiating outward
- **Geometric Elements (Teal)**: Represent **Mastery & Vision** - understanding fundamental principles in all directions
- **Four Directions**: Symbolize **Complete Transformation** - mastery across all dimensions of technology consulting

### Design Rationale

1. **Magician Archetype**: Transformation, vision, and mastery of hidden forces
2. **Professional & Corporate**: Clean, geometric forms suitable for enterprise B2B
3. **International**: Abstract symbol transcends language barriers
4. **Technology-Focused**: Transformation metaphor aligns with tech consultancy
5. **Power vs Force**: Central source with expanding influence (Power), not aggressive (Force)
6. **Modern but Timeless**: Geometric patterns that suggest mastery and vision

---

## Logo Variations

### 1. Full Logo (Horizontal)
**File**: `logo.svg` / `logo-dark.svg`
**Usage**: Primary logo for headers, navigation, marketing materials
**Dimensions**: 140×32px (light), optimized for dark mode

### 2. Logo with Tagline
**File**: `logo-with-tagline.svg` / `logo-with-tagline-dark.svg` / `logo-with-tagline-es.svg` / `logo-with-tagline-dark-es.svg`
**Usage**: Marketing materials, presentations, email signatures, print materials, hero sections
**Dimensions**: 200×60px (light/dark, English/Spanish)
**Tagline**: "Clarity, not dependency" / "Claridad, no dependencia"

### 3. Symbol Only
**File**: `logo-symbol.svg` / `logo-symbol-dark.svg`
**Usage**: Favicon, app icons, social media profile pictures, compact spaces
**Dimensions**: 32×32px (square)

### 4. Horizontal Extended
**File**: `logo-horizontal.svg`
**Usage**: Wide banners, presentations, large format printing
**Dimensions**: 180×40px

---

## Color Specifications

### Light Mode
- **Primary Blue**: `#0F4C75` (central node, text)
- **Primary Blue Light**: `#3282B8` (glow effect)
- **Accent Teal**: `#0D7377` (outer nodes)
- **Text**: `#0A0D14` (wordmark)

### Dark Mode
- **Primary Blue**: `#3282B8` (central node, text)
- **Primary Blue Light**: `#4A9BD4` (glow effect)
- **Accent Teal**: `#14A085` (outer nodes)
- **Text**: `#F1F5F9` (wordmark)

---

## Typography

- **Font**: Inter (system fallback: system-ui, sans-serif)
- **Weight**: 600 (Semibold)
- **Letter Spacing**: -0.02em (slightly tighter for modern feel)
- **Size**: Scales proportionally with logo

---

## Usage Guidelines

### ✅ Do's

- Use the full logo in headers and navigation
- Use symbol-only for favicons and compact spaces
- Maintain minimum clear space (equal to symbol height)
- Use appropriate color variant for light/dark backgrounds
- Scale proportionally (never stretch or distort)

### ❌ Don'ts

- Don't rotate the logo
- Don't change colors (use provided variants)
- Don't add effects (shadows, gradients, outlines)
- Don't place on busy backgrounds without sufficient contrast
- Don't use symbol without wordmark in primary applications

---

## Minimum Clear Space

Maintain clear space around the logo equal to **half the height of the symbol** (or text height for wordmark-only).

**Example**: For 32px logo, maintain 16px clear space on all sides.

---

## Background Usage

### Light Backgrounds
- Use `logo.svg` (dark text, blue/teal symbol)
- Ensure WCAG AA contrast (4.5:1 minimum)

### Dark Backgrounds
- Use `logo-dark.svg` (light text, lighter blue/teal symbol)
- Ensure WCAG AA contrast (4.5:1 minimum)

### Colored Backgrounds
- Ensure sufficient contrast
- Consider using white/black version if needed
- Test accessibility before final use

---

## File Formats

- **SVG**: Primary format (scalable, web-optimized)
- **PNG**: Export at 2x resolution for raster needs
  - Standard: 140×32px → Export 280×64px
  - Symbol: 32×32px → Export 64×64px
- **PDF**: For print materials (vector format)

---

## Favicon Implementation

For favicon, use `logo-symbol.svg` exported as:
- `favicon.ico` (16×16, 32×32, 48×48)
- `favicon.svg` (modern browsers)
- `apple-touch-icon.png` (180×180)

---

## Brand Alignment

The logo embodies Divisy's brand values through the Magician Archetype:

- **Authentic Alignment**: Central point represents the source of authentic transformation
- **Sustainable Influence**: Expanding rings show organic, radiating influence
- **Deep Partnership**: Geometric elements in four directions represent comprehensive mastery
- **Clarity & Truth**: Clean, clear geometric forms that reveal fundamental principles
- **Long-Term Impact**: Timeless design that suggests mastery and vision
- **Purpose-Driven**: Every element represents transformation and mastery

---

## Technical Specifications

### SVG Structure
- Optimized for web (minimal code)
- Uses CSS variables where possible
- Accessible (proper ARIA labels if needed)
- Responsive (scales cleanly at any size)

### Export Settings
- ViewBox: Properly defined for scaling
- Fill: CurrentColor for theme compatibility (where applicable)
- Stroke: Defined widths for clarity
- Opacity: Used for subtle effects

---

## Implementation Notes

The logo is designed to work seamlessly with:
- Divisy Design System (DDS) tokens
- Light/Dark theme switching
- Responsive layouts
- Accessibility requirements (WCAG AA)

For implementation in Next.js:
```tsx
import Image from 'next/image'

// Light mode
<Image src="/logo.svg" alt="Divisy" width={140} height={32} />

// Dark mode
<Image src="/logo-dark.svg" alt="Divisy" width={140} height={32} />
```

---

## Questions?

Refer to `BRAND_IDENTITY.md` for complete brand guidelines, or contact the design team for logo usage questions.


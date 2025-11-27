# Client Logos

Save your client logos in this folder.

## File Naming
Use lowercase, hyphen-separated names:
- `white-hat-gaming.png`
- `exury.png`
- `deloitte.png`
- `veolia.png`

## Recommended Specifications
- **Format**: PNG or SVG (preferred for scalability)
- **Background**: Transparent
- **Size**: 200-400px width
- **Aspect Ratio**: Maintain original proportions
- **Color**: Full color (grayscale filter applied in component)

## Supported Formats
- `.png` (recommended)
- `.svg` (best for scalability)
- `.jpg` / `.jpeg`
- `.webp`

## How to Add Logos

1. Save your logo files in this folder (`/public/clients/`)
2. Update the `defaultLogos` array in `/components/sections/logo-cloud.tsx`
3. Use the path format: `/clients/your-logo-name.png`

Example:
```typescript
{ name: 'Client Name', logo: '/clients/client-logo.png' }
```


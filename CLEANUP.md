# Limpieza del Proyecto

## Archivos/Carpetas a Eliminar Manualmente

Ya que el backend está en un repositorio separado y desplegado en Railway, puedes eliminar:

1. **Carpeta `backend-api/`** - El backend está en GitHub separado
2. **Archivo `lib/email.ts`** - El sistema de email está en el backend separado

## Estructura Final

```
Divisy/
├── app/              # Frontend Next.js
├── components/       # Componentes React
├── lib/             # Utilidades del frontend (sin email.ts)
├── public/          # Archivos estáticos
└── ...              # Configuración de Next.js
```

El backend está completamente separado en:
- **Repositorio**: https://github.com/Divisy/Divisy-backend
- **Despliegue**: Railway

## Configuración del Frontend

Solo necesitas configurar en `.env.production`:
```env
NEXT_PUBLIC_API_URL=https://tu-api.railway.app
```

Los formularios ya están configurados para usar esta variable.


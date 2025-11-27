# Configuración de Variables de Entorno

## Para Desarrollo Local

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app
```

## Para Producción (Build)

Crea un archivo `.env.production` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app
```

## Verificar que Funciona

1. Crea el archivo `.env.local` con la URL de Railway
2. Ejecuta `npm run dev`
3. Abre http://localhost:3000
4. Ve a la página de Contacto
5. Completa y envía el formulario
6. Revisa la consola del navegador (F12) para ver la petición
7. Revisa tu email para confirmar que recibiste la notificación


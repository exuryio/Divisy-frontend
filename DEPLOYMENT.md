# Guía de Despliegue - Divisy

Esta guía explica cómo desplegar el frontend en GoDaddy y el backend API en Railway.

## Arquitectura

- **Frontend**: Next.js exportado como sitio estático → GoDaddy
- **Backend API**: Express.js → Railway

## Paso 1: Desplegar Backend API en Railway

### 1.1 Backend en Repositorio Separado

El backend está en un repositorio separado: [Divisy/Divisy-backend](https://github.com/Divisy/Divisy-backend)

### 1.2 Desplegar en Railway

1. Crea una cuenta en [Railway](https://railway.app)
2. Crea un nuevo proyecto
3. Conecta el repositorio de GitHub: `Divisy/Divisy-backend`
4. Railway detectará automáticamente Node.js y desplegará

### 1.3 Configurar Variables de Entorno en Railway

En el dashboard de Railway, ve a Variables y agrega:

```env
RESEND_API_KEY=re_tu_api_key_aqui
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=rts@divisy.co
FRONTEND_URL=https://tudominio.com
```

**Importante**: Reemplaza `https://tudominio.com` con la URL real de tu sitio en GoDaddy.

### 1.4 Obtener URL de la API

Una vez desplegado, Railway te dará una URL como:
```
https://divisy-api-production.up.railway.app
```

**Copia esta URL** - la necesitarás para el frontend.

## Paso 2: Configurar Frontend para Producción

### 2.1 Configurar Variable de Entorno

El archivo `.env.production` ya está configurado con:
```env
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app
```

Si necesitas cambiarla, edita este archivo antes de hacer el build.

### 2.2 Construir el Frontend

```bash
npm run build
```

Esto generará una carpeta `out/` con todos los archivos estáticos.

## Paso 3: Subir Frontend a GoDaddy

### 3.1 Preparar Archivos

1. La carpeta `out/` contiene todos los archivos estáticos
2. Comprime la carpeta `out/` (opcional, para facilitar la subida)

### 3.2 Subir vía cPanel File Manager

1. Accede a tu cPanel de GoDaddy
2. Ve a **File Manager**
3. Navega a la carpeta `public_html` (o la carpeta de tu dominio)
4. Sube todos los archivos de la carpeta `out/`
   - Puedes subir archivos individuales o usar un ZIP y extraerlo

### 3.3 Subir vía FTP (Alternativa)

1. Usa un cliente FTP (FileZilla, Cyberduck, etc.)
2. Conecta a tu servidor GoDaddy
3. Sube todos los archivos de `out/` a `public_html`

### 3.4 Verificar

1. Visita tu dominio
2. Verifica que el sitio carga correctamente
3. Prueba enviar un formulario para verificar que conecta con Railway

## Paso 4: Configurar CORS en Railway

Si tienes problemas de CORS, verifica que `FRONTEND_URL` en Railway esté configurado correctamente con tu dominio de GoDaddy.

## Estructura de Archivos en GoDaddy

```
public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── en/
├── es/
└── ...
```

## Troubleshooting

### Los formularios no funcionan

1. Verifica que `NEXT_PUBLIC_API_URL` esté configurado correctamente
2. Verifica que la API de Railway esté funcionando: `https://tu-api.railway.app/health`
3. Revisa la consola del navegador para errores

### Error de CORS

1. Verifica que `FRONTEND_URL` en Railway sea exactamente tu dominio (con https://)
2. Reinicia el servicio en Railway después de cambiar variables

### Imágenes no cargan

- Las imágenes de Unsplash deberían funcionar
- Si usas imágenes locales, asegúrate de que estén en la carpeta `public/` antes del build

## Actualizaciones Futuras

### Actualizar Frontend

1. Haz cambios en el código
2. Ejecuta `npm run build`
3. Sube la nueva carpeta `out/` a GoDaddy

### Actualizar Backend

1. Haz cambios en `backend-api/`
2. Haz commit y push a GitHub
3. Railway desplegará automáticamente

## Notas Importantes

- El frontend es completamente estático (no necesita Node.js en GoDaddy)
- El backend corre en Railway (gratis hasta cierto límite)
- Los formularios envían datos a Railway, que luego envía emails vía Resend
- Mantén las variables de entorno seguras (no las subas a GitHub)


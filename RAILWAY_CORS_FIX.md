# Solución para CORS en Railway

## Problema
El backend en Railway está bloqueando requests desde `localhost:3005` porque solo acepta `https://www.divisy.co`.

## Solución: Actualizar CORS en el Backend

### Paso 1: Actualizar `server.js` en el repositorio del backend

El archivo `backend-api/server.js` ya está actualizado con la siguiente configuración de CORS:

```javascript
// Middleware - CORS configuration
// Allow multiple origins for development and production
const allowedOrigins = [
  process.env.FRONTEND_URL, // Production URL (e.g., https://www.divisy.co)
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3005',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:3005',
].filter(Boolean) // Remove undefined values

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true)
    } else {
      // In production, only allow configured frontend URL
      if (process.env.FRONTEND_URL && origin === process.env.FRONTEND_URL) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))
```

### Paso 2: Copiar el código actualizado al repositorio del backend

1. Ve al repositorio: `https://github.com/Divisy/Divisy-backend`
2. Abre `server.js`
3. Reemplaza la sección de CORS con el código de arriba
4. Haz commit y push
5. Railway desplegará automáticamente

### Paso 3: Verificar

Después del despliegue, prueba el formulario de nuevo desde `localhost:3005`.

## Alternativa Temporal: Configurar Variable de Entorno en Railway

Si no puedes actualizar el código ahora, puedes configurar temporalmente:

1. Ve a Railway Dashboard
2. Selecciona tu proyecto
3. Ve a Variables
4. Agrega o modifica:
   ```
   FRONTEND_URL=http://localhost:3005
   ```
5. Reinicia el servicio

**Nota**: Esto permitirá solo localhost. Después de probar, cambia de vuelta a `https://www.divisy.co` para producción.


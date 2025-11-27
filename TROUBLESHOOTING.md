# Solución de Problemas - Desarrollo Local

## Error: ERR_EMPTY_RESPONSE en localhost:3000

### Solución 1: Generar contenido de Contentlayer primero

```bash
# Generar contenido de Contentlayer
npx contentlayer build

# Luego iniciar el servidor
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app npm run dev
```

### Solución 2: Limpiar y reinstalar

```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules .next .contentlayer
npm install
npx contentlayer build
npm run dev
```

### Solución 3: Verificar que el puerto 3000 esté libre

```bash
# Ver qué está usando el puerto 3000
lsof -ti:3000

# Matar el proceso si es necesario
kill -9 $(lsof -ti:3000)
```

### Solución 4: Usar otro puerto

```bash
PORT=3001 NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app npm run dev
```

Luego abre: http://localhost:3001

## Verificar que el Backend Funciona

Antes de probar los formularios, verifica que el backend esté funcionando:

```bash
curl https://divisy-backend-production.up.railway.app/health
```

Deberías ver: `{"status":"ok","service":"divisy-api"}`

## Configurar Variable de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app
```


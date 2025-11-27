# 🚀 Guía Rápida de Despliegue

## Resumen

- **Frontend**: Next.js estático → GoDaddy (cPanel)
- **Backend API**: Express.js → Railway
- **Email**: Resend (gratis)

## Pasos Rápidos

### 1. Backend en Railway (5 minutos)

1. Ve a [railway.app](https://railway.app) y crea cuenta
2. Nuevo proyecto → GitHub → Selecciona `backend-api/`
3. Variables de entorno:
   ```
   RESEND_API_KEY=re_xxx
   FROM_EMAIL=onboarding@resend.dev
   TO_EMAIL=rts@divisy.co
   FRONTEND_URL=https://tudominio.com
   ```
4. Copia la URL de Railway (ej: `https://xxx.railway.app`)

### 2. Frontend para GoDaddy (10 minutos)

1. Crea `.env.production`:
   ```env
   NEXT_PUBLIC_API_URL=https://xxx.railway.app
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Sube la carpeta `out/` a GoDaddy vía cPanel File Manager o FTP

### 3. Verificar

- Visita tu dominio
- Prueba un formulario
- Revisa tu email

## Documentación Completa

Ver `DEPLOYMENT.md` para detalles completos.


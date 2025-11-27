# Configuración de Email con Resend

## Pasos para Configurar

### 1. Crear cuenta en Resend
1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Obtener tu API Key
1. Ve a [API Keys](https://resend.com/api-keys) en tu dashboard
2. Crea una nueva API Key
3. Copia la clave (empieza con `re_`)

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Resend Email Configuration
RESEND_API_KEY=re_tu_api_key_aqui

# Email Configuration
# El email que enviará las notificaciones (debe estar verificado en Resend)
FROM_EMAIL=onboarding@resend.dev

# El email donde quieres recibir los formularios
TO_EMAIL=rts@divisy.co
```

### 4. Verificar Dominio (Opcional)

Para usar tu propio dominio (ej: `noreply@divisy.co`):

1. Ve a [Domains](https://resend.com/domains) en Resend
2. Agrega tu dominio
3. Configura los registros DNS según las instrucciones
4. Una vez verificado, cambia `FROM_EMAIL` en `.env.local`

### 5. Probar la Configuración

1. Reinicia el servidor de desarrollo (`npm run dev`)
2. Envía un formulario de prueba desde el sitio
3. Revisa tu email en `TO_EMAIL`

## Plan Gratuito de Resend

- ✅ 3,000 emails/mes
- ✅ 100 emails/día
- ✅ API completa
- ✅ Sin tarjeta de crédito

## Tipos de Formularios que Envían Emails

1. **Contact Form** (`/contact`)
   - Consultas de negocio
   - Información del cliente y proyecto

2. **Job Application** (`/careers`)
   - Solicitudes de empleo
   - Perfil de LinkedIn y carta de presentación

3. **Recruiter Request** (`/talent-pool`)
   - Solicitudes de acceso al talent pool
   - Información de la empresa y necesidades

## Solución de Problemas

### No recibo emails
- Verifica que `RESEND_API_KEY` esté correctamente configurado
- Revisa la consola del servidor para errores
- Asegúrate de que `FROM_EMAIL` esté verificado en Resend
- Revisa la carpeta de spam

### Error "Invalid API Key"
- Verifica que copiaste la API key completa
- Asegúrate de que no haya espacios extra
- Regenera la API key si es necesario

### Error "Domain not verified"
- Si usas un dominio personalizado, verifica que esté configurado en Resend
- O usa `onboarding@resend.dev` para pruebas


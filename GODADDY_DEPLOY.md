# Guía de Despliegue en GoDaddy - Divisy

## Paso 1: Configurar Variable de Entorno para Producción

Crea un archivo `.env.production` en la raíz del proyecto con:

```env
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app
```

**Nota**: Este archivo no se sube a GitHub (está en `.gitignore`).

## Paso 2: Construir el Frontend

Ejecuta el siguiente comando para generar los archivos estáticos:

```bash
npm run build
```

Esto generará una carpeta `out/` con todos los archivos estáticos listos para subir a GoDaddy.

## Paso 3: Verificar el Build

Después del build, deberías ver:
- Una carpeta `out/` en la raíz del proyecto
- Archivos HTML, CSS, JS y assets dentro de `out/`

## Paso 4: Subir Archivos a GoDaddy

### Opción A: vía cPanel File Manager (Recomendado)

1. **Accede a cPanel de GoDaddy**
   - Ve a tu cuenta de GoDaddy
   - Accede a cPanel

2. **Abre File Manager**
   - Busca "File Manager" en cPanel
   - Navega a la carpeta `public_html` (o la carpeta de tu dominio)

3. **Limpia el contenido anterior (si existe)**
   - Selecciona todos los archivos y carpetas existentes
   - Elimínalos (o haz backup primero)

4. **Sube los archivos**
   - Opción 1: Subir carpeta completa
     - Comprime la carpeta `out/` en un archivo ZIP
     - Sube el ZIP a `public_html`
     - Extrae el ZIP en `public_html`
     - Mueve todos los archivos de `out/` a la raíz de `public_html`
     - Elimina la carpeta `out` vacía
   
   - Opción 2: Subir archivos individuales
     - Abre la carpeta `out/` en tu computadora
     - Selecciona todos los archivos y carpetas
     - Arrástralos a `public_html` en File Manager

### Opción B: vía FTP

1. **Obtén credenciales FTP de GoDaddy**
   - Ve a cPanel → FTP Accounts
   - Crea o usa una cuenta FTP existente

2. **Conecta con un cliente FTP**
   - Usa FileZilla, Cyberduck, o similar
   - Host: `ftp.tudominio.com` (o el que te dé GoDaddy)
   - Usuario y contraseña: los de tu cuenta FTP
   - Puerto: 21 (o el que te indique GoDaddy)

3. **Sube los archivos**
   - Navega a `public_html` en el servidor
   - Sube todos los archivos de la carpeta `out/`

## Paso 5: Estructura Final en GoDaddy

Después de subir, la estructura debería ser:

```
public_html/
├── index.html
├── _next/
│   ├── static/
│   │   ├── chunks/
│   │   └── ...
│   └── ...
├── en/
│   ├── index.html
│   ├── about/
│   ├── services/
│   ├── cases/
│   ├── careers/
│   ├── contact/
│   └── ...
├── es/
│   ├── index.html
│   ├── about/
│   ├── services/
│   ├── cases/
│   ├── careers/
│   ├── contact/
│   └── ...
├── logo.svg
├── favicon.ico
└── ... (otros archivos estáticos)
```

## Paso 6: Configurar Railway para Producción

**IMPORTANTE**: Antes de probar en producción, actualiza Railway:

1. Ve a Railway Dashboard → tu proyecto → Variables
2. Cambia `FRONTEND_URL` a:
   ```
   FRONTEND_URL=https://www.divisy.co
   ```
   (Reemplaza con tu dominio real de GoDaddy)
3. Reinicia el servicio

## Paso 7: Verificar el Despliegue

1. **Visita tu dominio**
   - Abre `https://www.tudominio.com` (o el dominio que configuraste)
   - Verifica que el sitio carga correctamente

2. **Prueba la navegación**
   - Navega entre páginas (Home, Services, Cases, About, Careers, Contact)
   - Verifica que los enlaces funcionen

3. **Prueba un formulario**
   - Ve a la página de Contacto
   - Completa y envía el formulario
   - Verifica que recibes el email en `rts@divisy.co`

4. **Verifica en diferentes dispositivos**
   - Prueba en móvil, tablet y desktop
   - Verifica que el diseño sea responsive

## Troubleshooting

### El sitio no carga
- Verifica que subiste todos los archivos de `out/` a `public_html`
- Verifica que `index.html` está en la raíz de `public_html`
- Revisa los permisos de archivos en cPanel (deben ser 644 para archivos, 755 para carpetas)

### Los formularios no funcionan
- Verifica que `NEXT_PUBLIC_API_URL` esté configurado correctamente en `.env.production`
- Verifica que `FRONTEND_URL` en Railway sea tu dominio de GoDaddy
- Revisa la consola del navegador (F12) para errores

### Error 404 en páginas
- Verifica que todas las carpetas (`en/`, `es/`, etc.) se subieron correctamente
- Verifica que los archivos HTML están en las carpetas correctas

### Las imágenes no cargan
- Las imágenes de Unsplash deberían funcionar automáticamente
- Si usas imágenes locales, verifica que estén en `public/` antes del build

## Actualizaciones Futuras

Para actualizar el sitio:

1. Haz cambios en el código
2. Ejecuta `npm run build`
3. Sube la nueva carpeta `out/` a GoDaddy (reemplaza los archivos anteriores)

## Notas Importantes

- El frontend es completamente estático (no necesita Node.js en GoDaddy)
- Todos los archivos deben estar en `public_html` (no en una subcarpeta)
- Mantén `.env.production` local (no lo subas a GitHub)
- El backend corre en Railway y se conecta automáticamente


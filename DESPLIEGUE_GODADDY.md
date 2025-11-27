# 🚀 Despliegue en GoDaddy - Guía Paso a Paso

## ⚠️ IMPORTANTE: NO subas toda la carpeta del proyecto

Solo necesitas subir la carpeta `out/` que se genera después del build.

---

## Paso 1: Crear archivo de configuración

Crea un archivo `.env.production` en la raíz del proyecto con este contenido:

```env
NEXT_PUBLIC_API_URL=https://divisy-backend-production.up.railway.app
```

**Cómo crearlo:**
- Abre un editor de texto
- Crea un archivo nuevo llamado `.env.production`
- Pega el contenido de arriba
- Guárdalo en la carpeta `/Users/exury/Desktop/Divisy/`

---

## Paso 2: Hacer el Build

Ejecuta este comando en la terminal:

```bash
cd /Users/exury/Desktop/Divisy
npm run build
```

Esto generará una carpeta `out/` con todos los archivos estáticos.

**Tiempo estimado:** 2-5 minutos

---

## Paso 3: Verificar que se generó la carpeta `out/`

Después del build, deberías ver:
- Una carpeta `out/` en `/Users/exury/Desktop/Divisy/`
- Dentro de `out/` deberías ver: `index.html`, `_next/`, `en/`, `es/`, etc.

---

## Paso 4: Subir SOLO la carpeta `out/` a GoDaddy

### Opción A: vía cPanel File Manager (Más fácil)

1. **Accede a cPanel de GoDaddy**
   - Ve a tu cuenta de GoDaddy
   - Busca "cPanel" o "Administrar Hosting"
   - Inicia sesión

2. **Abre File Manager**
   - En cPanel, busca "File Manager"
   - Haz clic para abrirlo

3. **Navega a `public_html`**
   - En el panel izquierdo, busca la carpeta `public_html`
   - Haz clic para abrirla
   - **Esta es la carpeta donde va tu sitio web**

4. **Limpia contenido anterior (si existe)**
   - Si hay archivos viejos, selecciónalos todos
   - Elimínalos (o haz backup primero)

5. **Comprime la carpeta `out/` en tu computadora**
   - Ve a `/Users/exury/Desktop/Divisy/`
   - Haz clic derecho en la carpeta `out/`
   - Selecciona "Comprimir" o "Crear archivo ZIP"
   - Esto creará `out.zip`

6. **Sube el ZIP a GoDaddy**
   - En File Manager, dentro de `public_html`
   - Haz clic en "Subir" (Upload)
   - Selecciona el archivo `out.zip`
   - Espera a que termine de subir

7. **Extrae el ZIP**
   - Haz clic derecho en `out.zip`
   - Selecciona "Extraer" (Extract)
   - Esto creará una carpeta `out/` dentro de `public_html`

8. **Mueve los archivos a la raíz**
   - Abre la carpeta `out/` dentro de `public_html`
   - Selecciona TODOS los archivos y carpetas (index.html, _next/, en/, es/, etc.)
   - Córtalos (Cut)
   - Vuelve a `public_html` (carpeta padre)
   - Pégalos (Paste)
   - Elimina la carpeta `out/` vacía
   - Elimina el archivo `out.zip`

9. **Estructura final en `public_html`:**
   ```
   public_html/
   ├── index.html          ← Debe estar aquí
   ├── _next/
   ├── en/
   ├── es/
   ├── logo.svg
   └── ... (otros archivos)
   ```

### Opción B: vía FTP (Alternativa)

1. **Obtén credenciales FTP**
   - En cPanel, ve a "FTP Accounts"
   - Crea una cuenta o usa una existente
   - Anota: Host, Usuario, Contraseña

2. **Usa un cliente FTP** (FileZilla, Cyberduck, etc.)
   - Conecta con las credenciales
   - Navega a `public_html` en el servidor
   - Sube todos los archivos de la carpeta `out/` de tu computadora

---

## Paso 5: Configurar Railway para Producción

**IMPORTANTE**: Antes de probar, actualiza Railway:

1. Ve a [Railway Dashboard](https://railway.app)
2. Selecciona tu proyecto
3. Ve a "Variables"
4. Cambia `FRONTEND_URL` a:
   ```
   FRONTEND_URL=https://www.divisy.co
   ```
   (Reemplaza con tu dominio real de GoDaddy, ej: `https://tudominio.com`)
5. Reinicia el servicio (si es necesario)

---

## Paso 6: Verificar el Despliegue

1. **Visita tu dominio**
   - Abre `https://www.tudominio.com` en el navegador
   - Deberías ver el sitio de Divisy

2. **Prueba la navegación**
   - Navega entre páginas
   - Verifica que todo carga correctamente

3. **Prueba un formulario**
   - Ve a Contacto
   - Completa y envía el formulario
   - Verifica que recibes el email

---

## 📋 Resumen de Archivos

### ✅ LO QUE SÍ SUBES:
- Carpeta `out/` completa (después de hacer build)
- Contiene: HTML, CSS, JS, imágenes, etc.

### ❌ LO QUE NO SUBES:
- Carpeta `node_modules/`
- Carpeta `.next/`
- Carpeta `components/`
- Carpeta `app/`
- Archivos `.ts`, `.tsx`, `.js` del código fuente
- Archivo `package.json`
- Cualquier archivo de configuración de desarrollo

---

## 🔄 Para Actualizar el Sitio en el Futuro

1. Haz cambios en el código
2. Ejecuta `npm run build`
3. Sube la nueva carpeta `out/` a GoDaddy (reemplaza los archivos anteriores)

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué solo la carpeta `out/`?**
R: Porque GoDaddy solo necesita los archivos estáticos (HTML, CSS, JS) que ya están compilados. No necesita el código fuente ni Node.js.

**P: ¿Qué pasa si subo toda la carpeta del proyecto?**
R: No funcionará porque GoDaddy no ejecuta Node.js. Solo puede servir archivos estáticos.

**P: ¿Necesito instalar algo en GoDaddy?**
R: No, solo sube los archivos estáticos. GoDaddy ya está configurado para servir HTML.

---

¿Listo para empezar? Sigue los pasos en orden. 🚀


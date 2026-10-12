# Dental ISA - Sitio Web Oficial

Página web elegante, moderna y de alta conversión para la clínica **Dental ISA** ubicada en Terrazas del Valle, Tijuana, B.C.

---

## 📁 Estructura del Proyecto

```text
Prueba_gemini/
├── index.html              # Página principal con todas las secciones
├── 404.html                # Página de error 404 de marca
├── package.json            # Scripts de ejecución local
├── README.md               # Documentación y guía de personalización
└── assets/
    ├── css/
    │   └── style.css       # Hoja de estilos (Tipografía Manrope, tokens B1-B11)
    ├── js/
    │   ├── data.js         # Configuración editable de servicios, reseñas y clínica
    │   └── main.js         # Lógica interactiva, animaciones y reservas
    └── images/
        ├── logo.jpg        # Logotipo oficial de Dental ISA
        ├── favicon.svg     # Favicon vectorial con colores de marca
        └── placeholder.jpg # Imagen genérica de prueba para fácil sustitución
```

---

## 🖼️ Cómo sustituir las imágenes de prueba

Todas las secciones de servicios y visuales utilizan actualmente la imagen genérica `assets/images/placeholder.jpg`:

1. **Si quieres cambiar la imagen general:**
   - Puedes reemplazar el archivo `assets/images/placeholder.jpg` por la foto que desees y se actualizará automáticamente en todas partes.

2. **Si quieres poner fotos específicas a cada servicio:**
   - Guarda tus imágenes en `assets/images/` (ejemplo: `brackets.jpg`, `limpieza.jpg`, `implantes.jpg`).
   - Abre `index.html` y en la sección `#servicios` actualiza el atributo `src` de cada tarjeta:
     ```html
     <!-- Ejemplo para Brackets -->
     <img src="assets/images/brackets.jpg" alt="Brackets" class="service-card-img">
     ```
   - También puedes actualizar la ruta en `assets/js/data.js`.

---

## ✍️ Cómo editar las Reseñas (Reviews)

La sección de reseñas sustituye a "Meet The Dentists" como solicitaste y es 100% editable. Incluye las reseñas reales de Google de la clínica:

- Abre el archivo `assets/js/data.js`.
- En el arreglo `reviews`, puedes cambiar el nombre, la calificación (1-5 estrellas), la fecha y el comentario:
  ```javascript
  {
    id: 1,
    author: "Karen Martínez Pardo",
    rating: 5,
    date: "Hace 2 meses",
    comment: "Tu comentario personalizado aquí..."
  }
  ```

## 📱 Cómo funciona la reserva de cita

El sitio es estático (no guarda datos en un servidor). Al enviar el formulario de "Agenda en línea":

1. Se validan los campos (el teléfono acepta únicamente 10 dígitos).
2. Se abre automáticamente **WhatsApp** con un mensaje ya redactado que incluye nombre, servicio, fecha, horario y teléfono.
3. La confirmación final de la cita la realiza la clínica por WhatsApp.

---

## 📍 Información de la Clínica Configurada

- **Nombre:** Dental ISA
- **Dirección:** Terrazas del Valle, #25603, 22246 Tijuana, B.C.
- **Teléfono / WhatsApp:** +52 664 809 8071
- **Horarios:**
  - Lunes a Viernes: 10:00 am a 6:00 pm
  - Sábado: 10:00 am a 5:00 pm
  - Domingo: Bajo cita previa

---

## 🚀 Cómo ejecutar y previsualizar

Puedes abrir directamente el archivo `index.html` con cualquier navegador web (doble clic) o ejecutar un servidor local:

```bash
# Opción 1: Servidor Node
npm run dev

# Opción 2: Python (si prefieres sin Node)
python3 -m http.server 3000
```
Luego visita `http://localhost:3000` en tu navegador.

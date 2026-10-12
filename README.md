# Dental ISA - Sitio Web Oficial

Página web elegante, moderna y de alta conversión para la clínica **Dental ISA** ubicada en Terrazas del Valle, Tijuana, B.C.

---

## 📋 Tabla de Contenidos

1. [Estructura del Proyecto y Explicación de Archivos](#-estructura-del-proyecto-y-explicación-de-archivos)
2. [Ajustes Recientes Implementados](#-ajustes-recientes-implementados)
   - [Header y Menú para Celulares](#1-header-y-menú-para-celulares)
   - [Ocultado Inteligente al Deslizar (Hide on Scroll Down)](#2-ocultado-inteligente-al-deslizar-hide-on-scroll-down)
   - [Carrusel de Reseñas Automático e Interactivo](#3-carrusel-de-reseñas-automático-e-interactivo)
   - [Página de Error 404 Funcional](#4-página-de-error-404-funcional)
3. [Catálogo de Imágenes y Videos Integrados](#-catálogo-de-imágenes-y-videos-integrados)
4. [Cómo Editar Contenido (Reseñas, Servicios, Horarios)](#-cómo-editar-contenido)
5. [Cómo Ejecutar el Proyecto Localmente](#-cómo-ejecutar-el-proyecto-localmente)

---

## 📁 Estructura del Proyecto y Explicación de Archivos

```text
Prueba_gemini/
├── index.html              # Página web principal con todas las secciones de la clínica
├── 404.html                # Página de error 404 con diseño de marca Dental ISA
├── server.js               # Servidor local en Node.js que maneja rutas y errores 404
├── serve.json              # Configuración de rutas y 404 para despliegues con serve/Vercel
├── package.json            # Configuración del proyecto y scripts de inicio (npm run dev)
├── README.md               # Esta documentación detallada del proyecto
└── assets/
    ├── css/
    │   └── style.css       # Hoja de estilos con variables de color, tipografía y animaciones
    ├── js/
    │   ├── data.js         # Base de datos editable (reseñas reales, servicios, clínica)
    │   └── main.js         # Lógica interactiva (scroll del header, carrusel, WhatsApp, FAQ)
    ├── images/             # Fotografías reales de la clínica, servicios y logotipos
    └── videos/             # Animaciones y videos ilustrativos dentales
```

### Detalle de cada archivo principal

- **`index.html`**: Estructura semántica completa del sitio web. Contiene:
  - Header tipo isla flotante con esquinas redondeadas al 15-20% y logotipo.
  - Menú móvil en tarjeta moderna con iconos específicos por sección, subtítulos y acceso a WhatsApp.
  - Hero section con propuesta de valor, llamadas a la acción (*Agendar* y *WhatsApp*), y métricas reales.
  - Tagline reveal con iluminación de texto al hacer scroll.
  - Sección Nosotros con misión y pilares de confianza.
  - Catálogo de 8 servicios con fotos reales de la clínica (*Brackets, Coronas, Implantes, Placas, Endodoncias, Resinas, Limpieza, Extracciones*).
  - Sección de Reseñas de pacientes con calificación de 5 estrellas.
  - Agenda en línea con validación a 10 dígitos y conexión automática a WhatsApp.
  - Tarjeta de ubicación física en Terrazas del Valle #25603, horarios de atención y mapa de Google.
  - Preguntas frecuentes en acordeón expandible.
  - Botón flotante inferior (FAB) para contacto rápido por WhatsApp.
  - Pie de página (Footer) con redes sociales (Instagram, Facebook), horarios y modales legales.

- **`404.html`**: Página de destino cuando se intenta acceder a una ruta inexistente. Muestra el logotipo de Dental ISA, código 404, mensaje amigable, botón para regresar al inicio y botón directo a WhatsApp.

- **`server.js`**: Servidor nativo desarrollado en Node.js (cero dependencias externas requeridas). Sirve todos los archivos estáticos con sus tipos MIME correspondientes (HTML, CSS, JS, imágenes y videos). **Si una persona accede a cualquier ruta inexistente (ejemplo: `/pruebaerror404`), el servidor responde automáticamente con código 404 y muestra la página `404.html`**, solucionando el mensaje genérico `Cannot GET /...`.

- **`serve.json`**: Configuración complementaria para herramientas estáticas como `npx serve` o Vercel, que garantiza el enrutamiento correcto hacia `404.html`.

- **`package.json`**: Define los comandos de ejecución:
  - `npm start` o `npm run dev`: Inicia el servidor nativo con `node server.js` en el puerto 3000.
  - `npm run serve`: Opción alternativa usando `npx serve`.

- **`assets/css/style.css`**: Contiene todo el sistema de diseño:
  - Variables de color de marca: Azul pizarra (`#1E293B`), Verde azulado/Teal (`#4e8e8b` y `#03b5d1`), Grises y Blancos.
  - Curvatura squircle de 15-20% (16px en header, 10px en iconos y botones pequeños, 12px en botones principales).
  - Transición fluida con bezier cúbico para ocultar y mostrar la barra superior al deslizar.
  - Diseño responsivo para pantallas móviles, tablets y computadoras de escritorio.

- **`assets/js/data.js`**: Objeto JavaScript editable donde se gestiona toda la información de la clínica:
  - Teléfono directo y enlace preconfigurado para WhatsApp.
  - Dirección completa y horarios de atención.
  - Lista de los 8 servicios con descripciones y rutas de imágenes.
  - Lista de reseñas reales de Google (autor, estrellas, fecha y comentario).

- **`assets/js/main.js`**: Controlador de interactividad:
  - Detección de dirección de scroll para ocultar la barra hacia arriba al bajar y mostrarla de inmediato al subir.
  - Apertura y cierre del menú móvil en tarjeta con soporte para tecla Escape y clic en el fondo.
  - Carrusel automático de reseñas que avanza cada 4.5 segundos y se pausa tanto al pasar el ratón (`mouseenter`) como al tocar con el dedo en celular (`touchstart`), además de admitir deslizamiento horizontal táctil (*swipe*).
  - Validación del formulario de citas asegurando que el teléfono tenga exactamente 10 dígitos numéricos antes de redirigir a WhatsApp.
  - Apertura de modales legales (Aviso de Privacidad y Términos del Servicio).

---

## 🎨 Ajustes Recientes Implementados

### 1. Header y Menú para Celulares
- **Curvatura menos circular (15-20%)**: El header superior ahora utiliza esquinas suavizadas de 16px (en lugar del óvalo circular de 9999px), al igual que el logotipo, los enlaces y los botones pequeños (10px).
- **Menú móvil rediseñado**: Se reemplazó la pantalla completa de texto gigante por una elegante **tarjeta flotante con efecto cristal (*backdrop blur*)**. Cada enlace incluye su icono distintivo de la rama dental, un título legible y un subtítulo descriptivo, más accesos directos para agendar y contactar por WhatsApp.

### 2. Ocultado Inteligente al Deslizar (Hide on Scroll Down)
- Al deslizar la página hacia abajo en celular o computadora, la barra superior se oculta suavemente hacia arriba (`translateY(-130%)`), despejando toda la pantalla para leer con comodidad.
- En cuanto se desliza un poco hacia arriba o se regresa a la parte superior, la barra reaparece inmediatamente.
- Si el menú móvil está abierto, la barra se mantiene fija para no interrumpir la navegación.

### 3. Carrusel de Reseñas Automático e Interactivo
- Las reseñas avanzan de forma automática cada **4.5 segundos**.
- **Pausa con el mouse**: Al colocar el cursor sobre las tarjetas de reseñas, el carrusel se detiene para permitir una lectura tranquila. Al retirar el cursor, se reanuda automáticamente.
- **Pausa con el dedo en celular**: Al tocar la pantalla en el área de reseñas (`touchstart`), el carrusel se pausa inmediatamente. Al soltar (`touchend`), se reanuda tras 2.5 segundos de inactividad.
- **Soporte táctil (*Swipe*)**: Puedes deslizar las tarjetas hacia la izquierda o derecha en tu celular para ver la reseña siguiente o anterior.
- **Flechas manuales**: Los botones `<` y `>` se mantienen funcionales en la parte superior derecha.

### 4. Página de Error 404 Funcional
- Se eliminó el enlace de "Página de Estado 404" del pie de página para mantener un footer limpio y profesional.
- Se implementó `server.js` y `serve.json` para que cualquier dirección no existente (por ejemplo: `http://localhost:3000/pruebaerror404`) sirva directamente la página oficial `404.html` con código HTTP 404, en lugar del mensaje de texto `Cannot GET /...`.

---

## 📸 Catálogo de Imágenes y Videos Integrados

### Carpeta `assets/images/`
| Archivo | Descripción | Uso en el sitio |
| :--- | :--- | :--- |
| `logo.jpg` | Logotipo oficial de Dental ISA | Header, footer, favicon y modales |
| `favicon.svg` | Icono vectorial para la pestaña del navegador | Icono de pestaña (Favicon) |
| `FachadaFrontal.jpeg` | Fotografía de la fachada exterior de la clínica | Sección Nosotros / Instalaciones |
| `Brackets.jpeg` | Fotografía de tratamiento de brackets | Tarjeta de Ortodoncia en Servicios |
| `Coronas.jpeg` | Fotografía de coronas dentales | Tarjeta de Coronas en Servicios |
| `Implantes.jpeg` | Fotografía de implantes dentales de titanio | Tarjeta de Implantes en Servicios |
| `PlacasDentales.jpeg` | Fotografía de placas y prótesis removibles | Tarjeta de Placas en Servicios |
| `Endodoncias.jpeg` | Fotografía de tratamiento de endodoncia | Tarjeta de Endodoncias en Servicios |
| `Resinas.jpeg` | Fotografía de resinas estéticas | Tarjeta de Resinas en Servicios |
| `LimpiezaDental.jpeg` | Fotografía de limpieza profiláctica con ultrasonido | Tarjeta de Limpieza en Servicios |
| `Extracciones.jpeg` | Fotografía de extracciones dentales | Tarjeta de Extracciones en Servicios |
| `RehabilitacionDisenoSonrisa.jpeg` | Fotografía de rehabilitación y diseño de sonrisa | Tarjeta destacada de estética dental |
| `placeholder.jpg` | Imagen de respaldo auxiliar | Elementos secundarios |

### Carpeta `assets/videos/`
| Archivo | Formato | Descripción |
| :--- | :--- | :--- |
| `DienteAnimado_01.webm` | WebM | Animación 3D del cuidado dental y salud bucal |
| `Diente_Caries.mp4` | MP4 | Video explicativo de prevención de caries |
| `Diente_Caries_01.webm` | WebM | Video WebM optimizado para carga rápida en web |

---

## ✍️ Cómo Editar Contenido

### Modificar o agregar Reseñas
Abre el archivo [`assets/js/data.js`](file:///home/juanromero/Documents/Proyectos/Prueba_gemini/assets/js/data.js) y busca la sección `reviews`:
```javascript
{
  id: 1,
  author: "Nombre del Paciente",
  rating: 5,                  // Número de estrellas (1 a 5)
  date: "Hace 2 semanas",     // Fecha aproximada o etiqueta
  comment: "Texto de la reseña del paciente..."
}
```

### Modificar datos de la clínica (Teléfono, Horarios, Dirección)
En el mismo archivo [`assets/js/data.js`](file:///home/juanromero/Documents/Proyectos/Prueba_gemini/assets/js/data.js), dentro del objeto `clinic`:
```javascript
clinic: {
  name: "Dental ISA",
  phone: "+52 664 809 8071",
  phoneRaw: "+526648098071",
  address: {
    full: "Terrazas del Valle, #25603, 22246 Tijuana, B.C."
  },
  schedules: [
    { days: "Lunes a Viernes", hours: "10:00 am a 6:00 pm" },
    { days: "Sábado", hours: "10:00 am a 5:00 pm" },
    { days: "Domingo", hours: "Bajo cita previa" }
  ]
}
```

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Para iniciar el servidor con soporte completo de rutas 404, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
# 1. Iniciar con Node.js (Recomendado)
npm run dev
# o directamente:
node server.js
```

Abre tu navegador en:
```text
http://localhost:3000
```

Para probar que la página 404 funcione correctamente, visita:
```text
http://localhost:3000/pruebaerror404
```
Verás de inmediato la página oficial de error `404.html` sin ningún mensaje de error `Cannot GET`.
# Dental_ISA
# Dental_ISA

# PRESDODUM

Sitio comercial y prototipo navegable, completamente en español, de un paquete integral de salud para empleados y su portal de empresa.

## Directorios y rutas

| Directorio | URL prevista | Contenido |
| --- | --- | --- |
| `webapp-demo/` (publicado en la raíz) | <https://presdodum.com/> | Web App navegable de demostración. |
| `home/` | <https://presdodum.com/home/> | Propuesta comercial para empleados, conectada con la demo. |
| `webapp-demo/` (ruta conservada) | <https://presdodum.com/webapp-demo/> | La misma demostración para conservar enlaces existentes. |

`home/index.html`, `home/styles.css` y `home/site.js` componen el sitio comercial. `home/assets/` contiene una imagen editorial generada para la propuesta y capturas reales de la demo con datos ficticios. Los documentos de trabajo y scripts permanecen en `docs/` y `scripts/`.

El despliegue de GitHub Pages copia el contenido de `webapp-demo/` a la raíz de `_site/` para que la aplicación abra directamente en el dominio. También conserva las carpetas públicas `home` y `webapp-demo` y excluye `.gitkeep`. Antes de publicar, comprueba que existan `index.html`, `app.js` y `styles.css` en la raíz. Los enlaces internos de la aplicación son relativos y sus pantallas usan rutas con hash. El dominio y la opción Enforce HTTPS se configuran en GitHub Pages.

## Ejecutar en tu equipo

Clona el repositorio e inicia un servidor estático desde la carpeta del proyecto:

```bash
git clone https://github.com/SergiorCode/presdodum.git
cd presdodum
python3 -m http.server 8080
```

Abre <http://localhost:8080/home/> para el sitio comercial y <http://localhost:8080/webapp-demo/> para el portal. No hace falta instalar paquetes ni compilar la aplicación. Sirve la raíz del repositorio por HTTP para conservar ambas rutas; los módulos JavaScript del portal requieren un servidor para funcionar correctamente.

## Sitio comercial

La propuesta de comunicación «Tu salud merece menos vueltas» presenta atención, prevención y protección mediante pestañas. Incluye vistas del portal, un recorrido de tres pasos, un apartado de empresa, preguntas frecuentes y un resumen del paquete. Los CTA abren las rutas correspondientes de la demo; no hay formularios de captación ni servicios de atención reales. La dirección visual y el origen de los recursos se describen en `docs/Sitio_comercial.md`.

El acceso es de demostración y no necesita contraseña. Desde el selector superior puedes recorrer los portales de empleado y empresa. El mapa del producto permite abrir los 55 estados.

## Recorridos

- Inicio del empleado por defecto. El selector superior permite cambiar al portal empresa o al acceso de demostración.
- El Mapa del producto reúne 25 vistas maestras y 55 pantallas/estados, cada uno con enlace directo.
- Agenda, solicitudes y comentarios, directorio, autorizaciones, bienestar y configuración conservan datos ficticios en localStorage.
- El asistente ofrece soporte contextual mediante respuestas de demostración; no utiliza una API de IA externa.
- Documentos incluye vista previa y siete PDF de ejemplo. Los reportes y el inventario se exportan como CSV.

## Arquitectura

Sitio estático sin dependencias externas ni proceso de compilación. `webapp-demo/data.js` es la fuente del inventario. `webapp-demo/model.js` concentra los selectores de acceso de demostración. `webapp-demo/ui.js` contiene los componentes base; `webapp-demo/app.js` reutiliza 25 renderizadores y gestiona los estados del producto. Las rutas usan hash para admitir enlaces directos en un servidor estático.

`docs/PRESDODUM_Inventario.md`, `webapp-demo/inventario.csv`, `webapp-demo/inventario.json` y el mapa dentro de la app derivan de la misma definición. Ejecuta `node scripts/inventory.mjs` si cambia el inventario.

## Verificación

Ejecuta `npm run check` para comprobar el inventario, los destinos, las reglas de acceso de demostración, los archivos PDF, los recursos del sitio comercial, sus enlaces a la demo y la sintaxis JavaScript. Los PDF se regeneran con `python3 scripts/documents.py` (requiere ReportLab y pypdf).

El sitio comercial se revisó en escritorio y en marcos de 390 y 320 píxeles: pestañas, navegación con teclado, menú móvil, resumen del paquete, preguntas frecuentes y enlaces al portal. No se observó desbordamiento horizontal del documento.

Se revisaron los 55 estados en navegador, los flujos de agenda, solicitud entre portales, autorización y retiro de consentimiento, bienestar, asistente y búsquedas. Se revisaron las vistas principales en un viewport interno de 390 píxeles sin desbordamiento horizontal del documento.

## Datos y alcance

Todos los perfiles, proveedores, registros, documentos, porcentajes y condiciones son ficticios. El periodo ilustrativo es octubre de 2026. El guardado ocurre únicamente en este navegador y se sincroniza entre pestañas del mismo origen.

No hay autenticación de usuarios ni controles de acceso del lado servidor. Las restricciones de rol son parte de la demostración visual y no protegen información real. No se envían correos, se reservan citas ni se despachan ambulancias. El ejercicio de bienestar no es una evaluación oficial de NOM-035.

La correspondencia de las 14 capturas se documenta en docs/Servicios_14_puntos.md. Los montos, cuotas y vacunas reflejan la lista compartida por el usuario. Los Anexos 1 y 2 originales están pendientes de integrar; el ejercicio de bienestar no acredita cumplimiento normativo.

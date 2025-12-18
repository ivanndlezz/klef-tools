# Esquema de Diseño UI - Klef Tool Set

Este documento define el esquema de diseño para mantener consistencia visual en todas las páginas y componentes del proyecto Klef Tool Set. Incluye colores, tamaños, tipografía, botones, layouts y principios de diseño.

## Colores

### Paleta Principal (Tema Oscuro)

```css
:root {
  --bg: #0b0b0d; /* Fondo principal */
  --panel: #151518; /* Paneles secundarios */
  --card: #1e1e22; /* Tarjetas y contenedores */
  --text: #f5f5f7; /* Texto principal */
  --muted: #9b9ba1; /* Texto secundario/muted */
  --accent: #4da3ff; /* Color de acento (azul) */
  --klef-green: #268642; /* Verde Klef */
  --klef-soft-green: rgba(52, 199, 89, 0.12); /* Verde suave */
}
```

### Colores Adicionales

- **Footer**: #6e6e73 (texto), #c7c7cc (divisor), #ff3b30 (corazón rojo), rgb(2, 108, 230) (enlace agencia)
- **Mega Menu**: #fff (fondo), #e5e5ea (borde), #6e6e73 (títulos), #1d1d1f (texto), rgba(0, 0, 0, 0.08) (sombra)
- **Estados**: rgba(0, 0, 0, 0.3) (hover sombra), #3a8cff (hover botón)

## Tamaños

### Espaciado

- **Padding base**: 16px (contenedores)
- **Padding grande**: 20px (headers)
- **Padding pequeño**: 12px (tarjetas)
- **Gaps**: 16px (grids), 24px (menus), 32px (mega panels)
- **Márgenes**: 2rem (hero), 1rem (textos)

### Bordes y Radios

- **Border radius base**: 16px (tarjetas, botones)
- **Border radius pequeño**: 12px (inputs, previews)
- **Border radius grande**: 20px (sheets)
- **Border radius mega**: 18px (mega panels)

### Dimensiones Específicas

- **Header height**: 2.5rem (títulos)
- **Card min-width**: 120px (grid items)
- **Sheet width**: 420px (desktop), 100% (mobile)
- **Icon size**: 32px (svg symbols), 3rem (app icons)

## Texto

### Tipografía

- **Familia principal**: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif
- **Familia alternativa**: -apple-system, BlinkMacSystemFont, Inter, system-ui
- **Familia monospace**: monospace (para código)

### Tamaños de Fuente

- **Título principal**: 2.5rem (h1)
- **Título secundario**: 2rem (h2)
- **Título tarjeta**: 1.5rem (h3)
- **Texto normal**: 1.1rem (p), 1rem (botones)
- **Texto pequeño**: 0.9rem (features), 0.8rem (badges)
- **Texto muy pequeño**: 13px (footer), 12px (labels)

### Propiedades de Texto

- **Line-height**: 1.6 (general), 1 (badges)
- **Letter-spacing**: 0.2px (footer)
- **Font-weight**: 600 (strong), 500 (medium), 400 (normal)

## Botones

### Estilos Base

```css
button {
  background: var(--accent);
  border: none;
  color: #000; /* Para botones de acento */
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
```

### Variantes

- **CTA principal**: background: var(--accent), color: white, padding: 0.75rem 1.5rem, width: 100%
- **Hover**: background: #3a8cff (azul más oscuro)
- **Estados**: transform: translateY(-4px), box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3)

### Botones Especiales

- **Tag**: padding: 2px 8px, border-radius: 4px, font-size: 14px, background: var(--klef-green), color: #fcfffd

## Layouts

### Grid Systems

- **Apps grid**: grid-template-columns: 1fr (mobile), repeat(2, 1fr) (768px+), repeat(3, 1fr) (1024px+)
- **Symbol grid**: repeat(auto-fill, minmax(120px, 1fr)) (desktop), minmax(100px, 1fr) (mobile)
- **Controls**: grid-template-columns: 1fr 1fr

### Flex Layouts

- **Header**: flex, justify-content: space-between, align-items: center
- **Card**: flex-direction: column, align-items: center
- **Badges**: flex, justify-content: center, gap: 0.5rem

### Responsive Breakpoints

- **Mobile**: max-width: 768px
  - Grid: 1 columna
  - Sheet: bottom sheet (height: 80%, border-radius: 20px 20px 0 0)
  - Header: column layout
- **Tablet**: min-width: 768px
  - Grid: 2 columnas
- **Desktop**: min-width: 1024px
  - Grid: 3 columnas

### Componentes de Layout

- **Sheet**: position: fixed, right: 0, width: 420px (desktop), transform: translateX(100%)
- **Backdrop**: position: fixed, inset: 0, backdrop-filter: blur(6px)
- **Hero**: text-align: center, max-width: 800px, margin: 0 auto

## Principios

### Lenguaje Visual Unificado

- El color se utiliza como jerarquía, no como ornamento
- Componentes repetidos generan familiaridad
- Tema oscuro prioriza ergonomía y concentración

### Ergonomía Visual Consciente

- Contrastes pensados para uso prolongado
- Ritmo visual evita saturación
- Elementos guían atención sin imponerla

### Diseño Mobile-First

- Funcionalidad completa en pantallas pequeñas
- Crecimiento progresivo hacia pantallas grandes
- Contenido esencial antes que adornos

### Interfaces Sensibles al Contexto

- Tarjetas adaptativas (bottom sheets en móvil, side sheets en desktop)
- Navegación responde al espacio disponible
- Interacciones alineadas con gestos nativos

### Micro-interacciones con Sentido

- Estados visibles comunican posibilidad y límite
- Transiciones suaves explican cambios
- Respuestas inmediatas generan confianza

### Arquitectura Modular

- Cada pieza tiene propósito claro
- Separación estricta: datos, lógica, presentación
- Composición visual automática con datos listos

### Persistencia Transparente

- Sistema recuerda para que usuario no lo haga
- Guardado automático
- Continuidad entre sesiones

### Optimización desde el Diseño

- Recursos reutilizables
- Activación bajo demanda
- Estructuras ligeras y comprensibles

### Mejora Progresiva

- Funcionalidad base universal
- Capacidades avanzadas añadidas gradualmente
- Resiliencia ante fallos tecnológicos

### Inclusión y Accesibilidad

- Navegación accesible
- Contenido legible en múltiples condiciones
- Independencia de dispositivos específicos

Este esquema debe aplicarse consistentemente en nuevas páginas para mantener la identidad visual y usabilidad del proyecto. Utiliza las variables CSS definidas y sigue los principios de diseño para extensiones futuras.

---

La interfaz de usuario (UI) es minimalista pero detallada: botones simples que declaran su intención claramente (como "Abrir Herramienta" en lugar de íconos confusos), hechos con CSS y HTML básico pero con bordes redondeados, sombras suaves y transiciones que los hacen sentir premium sin ser complicados. Las tarjetas de apps se ven como apps en un iPhone – cuadradas, con íconos emoji expresivos, títulos en negrita y descripciones breves, organizadas en grids que se adaptan del móvil (1 columna) al desktop (3 columnas).

La experiencia de usuario (UX) es fluida y predecible: al hacer clic en una app, se abre instantáneamente sin cargas pesadas; los formularios tienen placeholders útiles y validación en tiempo real; las sheets se deslizan desde el lado derecho en desktop o desde abajo en móvil, como drawers en apps nativas. Todo se guarda automáticamente en el navegador, así no pierdes trabajo. Es accesible – funciona en cualquier pantalla, con navegación por teclado y contenido legible en condiciones variadas.

Es como usar herramientas de Apple: simples en apariencia, poderosas en función, diseñadas para que el usuario se enfoque en el trabajo, no en aprender la interfaz.

---

# Esquema de Diseño UI - Klef Tool Set (Detallado)

Este documento expande el esquema de diseño con detalles específicos sobre consistencia en redondez, contraste de textos, colores e interactividad, para implementar consistentemente en nuevas páginas.

## Redondez (Border Radius)

La redondez crea una sensación moderna y amigable, similar a iOS, evitando bordes duros.

- **Elementos principales**: 16px (tarjetas, botones principales, contenedores)
- **Elementos secundarios**: 12px (inputs, previews, botones pequeños)
- **Elementos grandes**: 20px (sheets, modales)
- **Elementos especiales**: 18px (mega menus), 4px (badges, tags)
- **Consistencia**: Todos los elementos interactivos usan redondez para suavizar la UI; evita radios mixtos en el mismo componente.

## Contraste y Jerarquía de Textos

El contraste asegura legibilidad en tema oscuro; jerarquía clara guía la atención.

### Colores de Texto

- **Texto principal**: #f5f5f7 (alto contraste en #0b0b0d)
- **Texto secundario/muted**: #9b9ba1 (medio contraste para subtítulos)
- **Texto acento**: var(--accent) #4da3ff (para enlaces, highlights)
- **Texto especial**: #6e6e73 (footer), #1d1d1f (mega menu en blanco)

### Tamaños y Jerarquía

- **Título H1**: 2.5rem (40px), font-weight: bold, color: --text
- **Título H2**: 2rem (32px), font-weight: bold, color: --text
- **Título H3**: 1.5rem (24px), font-weight: bold, color: --text
- **Texto cuerpo**: 1.1rem (18px), color: --text
- **Subtítulos/descripciones**: 1rem (16px), color: --muted
- **Texto pequeño**: 0.9rem (14px), color: --muted
- **Etiquetas/badges**: 0.8rem (13px), font-weight: 500, color: white (en fondo verde/azul)
- **Texto mínimo**: 13px (footer), 12px (labels), color: --muted

### Propiedades Consistentes

- **Line-height**: 1.6 para cuerpo, 1.2 para títulos, 1 para badges
- **Letter-spacing**: 0.2px en textos pequeños para mejor legibilidad
- **Font-weight**: 600 para strong/acento, 500 para medium, 400 normal

## Consistencia en Colores

Paleta limitada para coherencia; colores semánticos para estados.

### Paleta Base

- **Fondo**: #0b0b0d (oscuro profundo)
- **Paneles**: #151518 (gris oscuro)
- **Tarjetas**: #1e1e22 (gris medio)
- **Texto**: #f5f5f7 (blanco suave)
- **Muted**: #9b9ba1 (gris claro)
- **Acento**: #4da3ff (azul)
- **Éxito/verde**: #268642
- **Error/rojo**: #ff3b30 (solo en acentos como corazón)

### Uso Semántico

- **Acento**: Botones primarios, links, highlights
- **Verde**: Estados activos, confirmaciones, tags "Dev"
- **Rojo**: Elementos de amor/éxito (corazón), no para errores
- **Grises**: Fondos, bordes, textos secundarios

### Variaciones

- **Hover**: Oscurecer acento a #3a8cff
- **Soft green**: rgba(52, 199, 89, 0.12) para fondos sutiles
- **Sombras**: rgba(0, 0, 0, 0.08) en blanco, rgba(0, 0, 0, 0.3) en oscuro

## Interactividad y Eventos

Transiciones suaves hacen la UI sentir viva y responsiva, como apps nativas.

### Estados de Interacción

- **Hover**: Transform: translateY(-4px), box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), border-color: --accent (en tarjetas)
- **Active/Click**: Escala ligera o cambio de color inmediato
- **Focus**: Outline sutil en inputs (para accesibilidad)
- **Disabled**: Opacity: 0.5, cursor: not-allowed

### Transiciones

- **Duración**: 0.2s para colores/botones, 0.35s para sheets/transforms
- **Propiedades**: background, transform, box-shadow, opacity
- **Easing**: Default (ease), o cubic-bezier para más naturalidad

### Eventos Específicos

- **Botones**: Hover cambia background; click instantáneo
- **Tarjetas**: Hover eleva y resalta borde
- **Sheets**: Slide in/out con transform translateX/Y
- **Inputs**: Focus resalta borde a --accent
- **Mega Menu**: Hover muestra panel con delay 0.1s

### Micro-interacciones

- **Skeleton loading**: Animación pulse en barras grises durante carga
- **Feedback visual**: Estados hover/focus en todos los interactivos
- **Animaciones**: Limitadas a esenciales; evitan distracción

## Otros Aspectos de Consistencia

### Espaciado Sistemático

- **Base**: 4px (múltiplos: 8px, 12px, 16px, 20px, 24px, 32px)
- **Gaps**: 16px grids, 24px menus, 0.5rem badges
- **Padding interno**: 12px tarjetas, 16px headers, 20px sheets

### Iconografía

- **Estilo**: SVG puros, fill/stroke configurables
- **Tamaños**: 32px grid, 40px preview, 3rem app icons
- **Colores**: currentColor para adaptabilidad

### Responsive

- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Adaptaciones**: Grids cambian columnas, sheets cambian posición/dirección

Esta consistencia asegura que nuevas páginas se sientan como parte natural del sistema, manteniendo la calidad Apple-like sin complejidad innecesaria.

````
```css
/* ===========================================
   ESQUEMA DE DISEÑO UI - KLEF TOOL SET
   ===========================================

   Este archivo CSS define el esquema completo de diseño para mantener consistencia
   en colores, tamaños, textos, botones, layouts e interactividad.
   Inspirado en diseño Apple-like: minimalista, funcional y premium.

   USO: Importa este archivo en nuevas páginas para aplicar el esquema base.
   Personaliza variables en :root para temas específicos si es necesario.
*/

/* ===========================================
   VARIABLES CSS - PALETA Y TOKENS BASE
   =========================================== */

/* Paleta de colores principal (tema oscuro) */
:root {
  /* Fondos */
  --bg: #0b0b0d;           /* Fondo principal - oscuro profundo */
  --panel: #151518;        /* Paneles secundarios - gris oscuro */
  --card: #1e1e22;         /* Tarjetas/contenedores - gris medio */

  /* Textos */
  --text: #f5f5f7;         /* Texto principal - blanco suave */
  --muted: #9b9ba1;        /* Texto secundario - gris claro */

  /* Acenos y estados */
  --accent: #4da3ff;       /* Azul acento para botones/links */
  --klef-green: #268642;   /* Verde Klef para éxito/tags */
  --klef-soft-green: rgba(52, 199, 89, 0.12); /* Verde suave para fondos */

  /* Redondez consistente */
  --radius: 16px;          /* Radio base para elementos principales */
  --radius-sm: 12px;       /* Radio pequeño para inputs/botones */
  --radius-lg: 20px;       /* Radio grande para sheets/modales */
  --radius-xs: 4px;        /* Radio mínimo para badges */

  /* Sombras */
  --shadow-sm: 0 8px 24px rgba(0, 0, 0, 0.3); /* Hover tarjetas */
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.08); /* Mega menus */
}

/* ===========================================
   RESET Y BASE GLOBAL
   =========================================== */

* {
  box-sizing: border-box; /* Consistencia en cálculos de tamaño */
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif; /* Tipografía Apple-like */
  background: var(--bg);
  color: var(--text);
  line-height: 1.6; /* Legibilidad */
}

/* ===========================================
   TIPOGRAFÍA Y JERARQUÍA DE TEXTOS
   =========================================== */

/* Títulos - Jerarquía clara con pesos y tamaños consistentes */
h1 { font-size: 2.5rem; font-weight: bold; margin: 0; color: var(--text); }
h2 { font-size: 2rem; font-weight: bold; margin: 0; color: var(--text); }
h3 { font-size: 1.5rem; font-weight: bold; margin: 0; color: var(--text); }

/* Texto cuerpo */
p { font-size: 1.1rem; color: var(--text); margin: 0.5rem 0; }

/* Texto secundario */
.text-muted { color: var(--muted); }
.text-small { font-size: 0.9rem; color: var(--muted); }
.text-xs { font-size: 0.8rem; font-weight: 500; color: var(--muted); }

/* Enlaces */
a { color: var(--accent); text-decoration: none; transition: color 0.2s; }
a:hover { color: #3a8cff; } /* Hover consistente */

/* ===========================================
   BOTONES - VARIACIONES CONSISTENTES
   =========================================== */

/* Botón base - Simple pero detallado */
button {
  background: var(--accent);
  border: none;
  color: #000; /* Texto oscuro en fondo azul */
  padding: 10px 14px;
  border-radius: var(--radius-sm); /* Redondez consistente */
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s; /* Transición suave */
  font-family: inherit;
}

/* Hover y active - Interactividad sutil */
button:hover { background: #3a8cff; transform: translateY(-1px); }
button:active { transform: translateY(0); }

/* Botón CTA principal - Para acciones principales */
.btn-cta {
  background: var(--accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 500;
  width: 100%; /* Full width en móviles */
  transition: background 0.2s;
}

.btn-cta:hover { background: #3a8cff; }

/* Botón tag - Para etiquetas/status */
.btn-tag {
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  background: var(--klef-green);
  color: #fcfffd;
}

/* ===========================================
   TARJETAS Y CONTENEDORES
   =========================================== */

/* Tarjeta base */
.card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 2rem; /* Espaciado consistente */
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  border: 1px solid transparent;
}

/* Hover en tarjetas - Elevación sutil */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-sm);
  border-color: var(--accent);
}

/* Paneles */
.panel {
  background: var(--panel);
  border-radius: var(--radius);
  padding: 16px;
}

/* ===========================================
   LAYOUTS Y GRIDS
   =========================================== */

/* Grid de apps - Responsive */
.apps-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 columna móvil */
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .apps-grid { grid-template-columns: repeat(2, 1fr); } /* 2 columnas tablet */
}

@media (min-width: 1024px) {
  .apps-grid { grid-template-columns: repeat(3, 1fr); } /* 3 columnas desktop */
}

/* Grid de símbolos */
.symbol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  padding: 16px;
}

@media (max-width: 768px) {
  .symbol-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
}

/* Flex layouts comunes */
.flex-center { display: flex; justify-content: center; align-items: center; }
.flex-between { display: flex; justify-content: space-between; align-items: center; }
.flex-column { display: flex; flex-direction: column; align-items: center; }

/* ===========================================
   SHEETS Y MODALES - INTERACTIVIDAD AVANZADA
   =========================================== */

/* Backdrop */
.sheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.sheet-backdrop.active {
  opacity: 1;
  pointer-events: auto;
}

/* Sheet base */
.sheet {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 420px;
  background: var(--panel);
  transform: translateX(100%);
  transition: transform 0.35s;
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
  padding: 20px;
  overflow: auto;
}

.sheet.active { transform: translateX(0); }

/* Mobile adaptation */
@media (max-width: 768px) {
  .sheet {
    width: 100%;
    height: 80%;
    bottom: 0;
    top: auto;
    right: auto;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    transform: translateY(100%);
  }
  .sheet.active { transform: translateY(0); }
}

/* ===========================================
   FORMULARIOS E INPUTS
   =========================================== */

input:not([type="color"]),
textarea,
select {
  width: 100%;
  background: #0f0f12; /* Fondo oscuro sutil */
  border: 1px solid #2a2a2e;
  color: var(--text);
  padding: 10px;
  border-radius: var(--radius-sm);
  font-family: inherit;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--accent); /* Resaltado en focus */
  box-shadow: 0 0 0 2px rgba(77, 163, 255, 0.2);
}

/* Color picker personalizado */
input[type="color"] {
  border: none;
  width: 100%;
  border-radius: var(--radius-sm);
  height: 50px;
  background: transparent;
}

/* ===========================================
   ANIMACIONES Y MICRO-INTERACCIONES
   =========================================== */

/* Skeleton loading */
.skeleton-bar {
  height: 40px;
  background: #e5e5ea;
  border-radius: var(--radius-sm);
  animation: pulse 1.4s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Transiciones globales */
* {
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

/* ===========================================
   COMPONENTES ESPECÍFICOS
   =========================================== */

/* Footer */
.klef-footer {
  padding: 16px 20px;
  text-align: center;
  font-size: 13px;
  color: #6e6e73;
  font-family: inherit;
}

.footer-text strong { font-weight: 600; }
.heart { color: #ff3b30; font-size: 12px; }

/* Mega menu (ejemplo de componente) */
.mega-menu {
  background: #fff;
  border-bottom: 1px solid #e5e5ea;
  font-family: inherit;
}

.mega-panel {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 24px;
  background: #fff;
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  gap: 32px;
}

.menu-item:hover .mega-panel { display: flex; }

/* ===========================================
   UTILIDADES PARA DESARROLLO RÁPIDO
   =========================================== */

/* Espaciado utilitario */
.p-16 { padding: 16px; }
.m-0 { margin: 0; }
.gap-16 { gap: 16px; }

/* Colores utilitarios */
.bg-accent { background: var(--accent); }
.text-accent { color: var(--accent); }
.border-accent { border-color: var(--accent); }

/* ===========================================
   NOTAS FINALES
   ===========================================

   - Mantén consistencia: Usa variables CSS para cambios globales.
   - Accesibilidad: Asegura contraste mínimo 4.5:1.
   - Rendimiento: Limita animaciones a esenciales.
   - Extensibilidad: Agrega nuevos componentes siguiendo estos patrones.

   Para nuevas páginas: Copia este archivo y extiende según necesidad.
*/
````

# Algoritmia · Página del equipo

Página informativa del equipo Algoritmia: quiénes somos, el rol de cada integrante y lo que construimos para **Gloriana US** ([app.algorit.website](https://app.algorit.website)).

Tiene tres pantallas:

| Ruta | Pantalla | Contenido |
|---|---|---|
| `/` | Inicio | Titular y carrusel giratorio con los 4 integrantes del equipo |
| `/equipo` | Equipo | Tarjeta de cada integrante con rol y descripción |
| `/proyecto` | Proyecto | Funciones del sistema y herramientas que usamos |

## Stack

Es el mismo del frontend principal (`Algoritmia-Development-Frontend`):

- [Vite 8](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (con `@tailwindcss/vite`)
- [TanStack Router](https://tanstack.com/router) (rutas con `__virtual.ts`, igual que en el front principal)
- `lucide-react` para íconos
- `oxlint` para el lint
- Fuentes Inter y JetBrains Mono, instaladas con `@fontsource-variable`. No dependen de Google Fonts.

## Requisitos

- **Node.js 20.19+ o 22.12+** (lo pide Vite 8). Para ver la versión: `node -v`.

## Cómo correrla

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

### Otros comandos

| Comando | Qué hace |
|---|---|
| `npm run build` | Revisa tipos (`tsc -b`) y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar la versión de producción |
| `npm run lint` | Corre oxlint |

## Estructura

```
├─ index.html
├─ vercel.json                 → hace que /equipo y /proyecto funcionen al recargar
├─ public/favicon.svg
└─ src/
   ├─ main.tsx · App.tsx       → arranque de React y del router
   ├─ index.css                → colores de la marca, fuentes y animaciones
   ├─ routes/                  → rutas: __virtual.ts, __root.tsx, index.tsx, team.tsx y project.tsx
   ├─ routeTree.gen.ts         → lo genera el router solo; no se edita a mano
   ├─ pages/                   → una página por pantalla: Home.tsx, Team.tsx y Project.tsx
   ├─ components/
   │  ├─ Nav.tsx               → navegación y menú del celular
   │  ├─ Decorations.tsx       → franjas azules de fondo
   │  ├─ PageHeader.tsx        → encabezado de Equipo y Proyecto
   │  ├─ carousel/             → carrusel del Inicio
   │  ├─ team/                 → tarjeta de integrante
   │  └─ project/              → tarjeta de función y chip de herramienta
   ├─ hooks/carousel/          → lógica del carrusel (persona activa, avance automático)
   ├─ data/                    → TODOS los textos de la página
   ├─ types/                   → tipos de TypeScript
   └─ assets/                  → logo, franjas y fotos del equipo
```

## Cambiar textos o datos

Los textos no están en los componentes. Están en `src/data/`:

- **`team.ts`**: integrantes (nombre, rol, descripción y foto). El orden de la lista es el orden del carrusel y de la pantalla Equipo. `photoFrame` es el encuadre de la foto dentro de la tarjeta del carrusel, en %.
- **`project.ts`**: título y descripción del proyecto, las 6 funciones y los chips de herramientas.
- **`site.ts`**: links del menú y la dirección del botón "Ver el sistema".

Las fotos están en `src/assets/team/` (webp con fondo transparente).

## Subirla a Vercel

1. Subir el proyecto a un repositorio de GitHub. `node_modules` y `dist` ya están en `.gitignore`.
2. En Vercel: **Add New → Project**, elegir el repositorio.
3. Vercel detecta **Vite** solo. Revisar que quede así:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. No hace falta configurar variables de entorno.
5. **Deploy**.

`vercel.json` redirige todas las rutas a `index.html`, así `/equipo` y `/proyecto` cargan bien al recargar la página o al abrirlas desde un link.

## Detalles de diseño

- Diseño final en el Figma "Algoritmia-team-page" (frames "Inicio · 1–4", "Equipo" y "Proyecto").
- Colores de la marca (están en `src/index.css`, como `brand-*`): fondo `#000105`, cian `#01BEF9`, azul `#004785`, navy `#02264A` y hielo `#EAF4FC`.
- El estilo usa esquinas rectas, sin redondeos, para combinar con las franjas diagonales.
- El carrusel avanza cada 3,5 s y se pausa con el mouse encima o con el foco del teclado. En el celular se cambia con swipe.
- Si el sistema tiene activado "reducir movimiento", se apagan el avance automático y las animaciones.
# algoritmia-team

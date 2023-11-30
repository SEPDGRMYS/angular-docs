---
sidebar_position: 5
---

# Clarity Design (UI)

[Clarity Design](https://clarity.design/) es un proyecto de código abierto respaldado por VMware que proporciona un conjunto de pautas de diseño y componentes UI para construir aplicaciones web modernas. Este marco de diseño está diseñado para ofrecer una experiencia de usuario consistente y estéticamente agradable.

## Características Principales

- **Diseño Consistente:** Clarity ofrece una guía visual coherente para que tus aplicaciones tengan un aspecto profesional y pulido.

- **Componentes Reutilizables:** Incluye una amplia variedad de componentes reutilizables que abarcan desde barras de navegación hasta tablas y gráficos.

- **Integración con Angular:** Clarity se integra perfectamente con Angular, facilitando la construcción de aplicaciones Angular con un diseño atractivo y funcionalidad sólida.

## Integración de Componentes de Clarity Design

Para incorporar los componentes de [Clarity Design](https://clarity.design/) en tu aplicación, es necesario agregarlos al módulo Clarity `clarity.module.ts`. Esto se realiza dentro del arreglo `clrModules`.

```typescript
// clarity.module.ts

const clrModules = [
  ClrAlertModule,
  ClrButtonModule,
  // Agrega otros módulos Clarity según sea necesario
];
```

De manera similar, si deseas utilizar iconos de [Clarity Design](https://core.clarity.design/foundation/icons/shapes/), puedes agregarlos al arreglo `clrIcons`.

```typescript
// clarity.module.ts

const clrIcons = [
  accessibility2Icon,
  addTextIcon,
  // Agrega otros iconos Clarity según sea necesario
];
```

El módulo Clarity `clarity.module.ts` se encuentra en la siguiente ruta dentro del proyecto: `src/app/modules/shared/clarity/clarity.module.ts`.

```bash
/web-app
|-- .angular
|--  node_modules/
|--  src/
|   |-- app/
|   |   |-- modules/
|   |   |   |-- shared/
|   |   |   |   |-- clarity/
# highlight-start
|   |   |   |   |   |-- clarity.module.ts
# highlight-end
|   |   |   |   |-- shared.module.ts
|   |   |-- shared/
...
```

Esta estructura permite organizar de manera clara y eficiente los módulos y componentes de Clarity Design en tu aplicación Angular.
---
sidebar_position: 2
---

# Módulos
<!-- 
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

::: 
-->

# Módulos en Angular

## Introducción a los Módulos en Angular

En Angular, los módulos son una parte fundamental de la arquitectura de la aplicación. Proporcionan un mecanismo para organizar y estructurar el código de manera modular. En este documento, exploraremos las reglas y el funcionamiento de los módulos en Angular.

## Creando un Módulo

Para crear un módulo en Angular, utilizamos el decorador `@NgModule`. Aquí hay un ejemplo básico de cómo se ve un módulo:

```typescript
// mi-modulo.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiComponente } from './mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    MiComponente
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiComponente
  ]
})
export class MiModulo { }
```

En este ejemplo:

- `declarations`: Lista de componentes, directivas y tuberías que pertenecen a este módulo. **Nota:** Un componente solo puede ser declarado en un solo módulo.
- `imports`: Otros módulos cuyas clases exportadas son necesarias para las plantillas de componentes en este módulo.
- `exports`: Subconjunto de `declarations` que deben ser accesibles para los componentes de otros módulos.

## Importando y Utilizando Módulos

Para utilizar un módulo en otro módulo o componente, simplemente importa el módulo en cuestión. Por ejemplo:

```typescript
// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiModulo } from './mi-modulo/mi-modulo.module';

@NgModule({
  imports: [
    BrowserModule,
    MiModulo
  ],
  declarations: [
    // Componentes del módulo principal
  ],
  bootstrap: [
    // Componente principal
  ]
})
export class AppModule { }
```

En este ejemplo, `MiModulo` se importa y se agrega a la lista de módulos importados en `AppModule`.

## Reglas y Buenas Prácticas

- **Un Módulo por Característica:** Organiza tu aplicación en módulos que representan características o partes lógicas de la aplicación.
- **Evitar el Módulo Raíz Sobrecargado:** El módulo raíz (`AppModule`) debe contener solo lo esencial, delegando responsabilidades a otros módulos.
- **División Responsabilidades:** Separa lógicamente las responsabilidades, como los módulos de rutas, módulos de servicios, etc.
- **Lazy Loading:** Utiliza la carga perezosa para cargar módulos solo cuando son necesarios, mejorando el rendimiento inicial de la aplicación.

## Conclusión

Los módulos en Angular son herramientas poderosas para organizar y estructurar tu aplicación. Al seguir las reglas y buenas prácticas, puedes crear una arquitectura modular y mantenible.

Este documento proporciona solo una visión general; para obtener información más detallada, consulta la [documentación oficial de Angular sobre módulos](https://angular.io/guide/ngmodules).
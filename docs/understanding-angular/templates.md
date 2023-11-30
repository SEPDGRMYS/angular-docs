---
sidebar_position: 3
---

# Templates
# Sintaxis de Plantillas en Angular

En Angular, las plantillas son fundamentales para la creación de interfaces de usuario dinámicas. La sintaxis de las plantillas proporciona un conjunto de reglas y expresiones que permiten interactuar con los componentes y mostrar datos en la interfaz de usuario.

## Expresiones en Plantillas

Las expresiones en las plantillas de Angular se encierran entre dobles llaves `{{ }}`. Estas expresiones son evaluadas y el resultado se muestra en el DOM. Por ejemplo:

```html
<p>{{ mensaje }}</p>
```

Aquí, la expresión `{{ mensaje }}` será reemplazada por el valor de la propiedad `mensaje` en el componente asociado.


## Eventos en Plantillas

Los eventos se manejan en las plantillas mediante paréntesis `( )`. Puedes llamar a métodos del componente cuando ocurren eventos.

```html
<!-- Llamando al método handleClick cuando se hace clic en el botón -->
<button (click)="handleClick()">Haz clic</button>
```

## Enlace de Propiedades

El enlace de propiedades permite la actualización bidireccional entre la vista y el modelo. Utiliza corchetes `[]` para enlazar propiedades del componente con propiedades de elementos del DOM.

```html
<!-- Enlazando la propiedad 'valor' del componente con el valor del input -->
<input [value]="valor" />
```

## Pipes

Los pipes permiten transformar visualmente los datos antes de mostrarlos en la interfaz de usuario. Angular proporciona pipes integrados y la capacidad de crear pipes personalizados.

```html
<!-- Utilizando el pipe 'uppercase' para mostrar el texto en mayúsculas -->
<p>{{ texto | uppercase }}</p>
```

## Two-Way Binding

El two-way binding combina la vinculación de propiedades y eventos en un solo enlace. Utiliza la directiva `[(ngModel)]` para lograr la actualización bidireccional.

```html
<!-- Two-way binding con [(ngModel)] -->
<input [(ngModel)]="nombre" />
```

Estas son solo algunas de las características básicas de la sintaxis de plantillas en Angular. Para obtener información más detallada y avanzada, consulta la [documentación oficial de Angular sobre sintaxis de plantillas](https://angular.io/guide/template-syntax).

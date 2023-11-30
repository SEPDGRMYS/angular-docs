---
sidebar_position: 4
---

# Directivas

Angular proporciona una serie de directivas integradas que facilitan la manipulación del DOM y la gestión de la interfaz de usuario. Estas directivas están diseñadas para abordar tareas comunes en el desarrollo de aplicaciones web. A continuación, se describen algunas de las directivas más utilizadas.

## ngIf

La directiva `ngIf` se utiliza para mostrar o ocultar elementos en función de una expresión condicional.

```html
<!-- Se mostrará el elemento si la condición es verdadera -->
<div *ngIf="condicion">Contenido</div>
```

## ngFor

La directiva `ngFor` se utiliza para iterar sobre una lista y renderizar elementos repetidos.

```html
<!-- Se repetirá el elemento por cada item en la lista -->
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

## ngSwitch

La directiva `ngSwitch` permite realizar un enrutamiento condicional basado en el valor de una expresión.

```html
<!-- Se seleccionará un bloque basado en el valor de 'opcion' -->
<div [ngSwitch]="opcion">
  <p *ngSwitchCase="'A'">Opción A</p>
  <p *ngSwitchCase="'B'">Opción B</p>
  <p *ngSwitchDefault>Opción por defecto</p>
</div>
```

## ngClass

La directiva `ngClass` permite aplicar clases condicionalmente a un elemento.

```html
<!-- Aplicará la clase 'resaltado' si la condición es verdadera -->
<div [ngClass]="{'resaltado': condicion}">Elemento</div>
```

## ngStyle

La directiva `ngStyle` permite aplicar estilos condicionalmente a un elemento.

```html
<!-- Aplicará el estilo de fondo si la condición es verdadera -->
<div [ngStyle]="{'background-color': condicion ? 'amarillo' : 'verde'}">Elemento</div>
```

## ngModel

La directiva `ngModel` se utiliza para lograr el enlace bidireccional entre los datos del modelo y un elemento de formulario.

```html
<!-- Enlazará el valor del input con la propiedad 'nombre' del componente -->
<input [(ngModel)]="nombre" />
```
Para obtener información más detallada sobre estas directivas y su uso, consulta la [documentación oficial de Angular sobre Directivas Integradas](https://angular.io/guide/built-in-directives).

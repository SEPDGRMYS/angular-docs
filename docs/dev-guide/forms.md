---
sidebar_position: 2
---

# Formularios

Los formularios son una parte esencial de las aplicaciones web, y Angular ofrece un sistema robusto para trabajar con ellos. Esta guía proporciona una visión general de los formularios en Angular, abordando conceptos clave y estrategias para gestionar la entrada de datos de los usuarios.

## Tipos de Formularios en Angular

Angular admite dos tipos de formularios:

1. **Formularios Reactivos:** Estos formularios se construyen programáticamente utilizando clases de TypeScript. Proporcionan una forma más flexible y dinámica de gestionar la entrada de datos.

2. **Formularios Basados en Plantillas:** Estos formularios se construyen utilizando directivas de Angular en el HTML. Son más adecuados para formularios simples y siguen un enfoque más declarativo.

## Formularios Reactivos

Los formularios reactivos están basados en el modelo de programación reactivo y son construidos con clases TypeScript. Algunos conceptos clave incluyen:

- **FormGroup:** Representa un grupo de controles, como un formulario.
  
  ```typescript
  import { FormGroup, FormControl } from '@angular/forms';

  const formulario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
  });
  ```

- **FormControl:** Representa un control individual dentro de un formulario.
  
  ```typescript
  import { FormControl } from '@angular/forms';

  const nombreControl = new FormControl('John Doe');
  ```

## Validación de Formularios Reactivos

La validación de formularios reactivos en Angular se realiza utilizando clases TypeScript y Validators.

### Creación de un Formulario Reactivo con Validación

```typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';

const formulario = new FormGroup({
  nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
});
```

En este ejemplo, el campo `nombre` es requerido y debe tener una longitud mínima de 3 caracteres, mientras que el campo `email` debe ser un correo electrónico válido.

### Mostrar Mensajes de Error en la Plantilla

```html
<form [formGroup]="formulario">
  <input formControlName="nombre">
  <div *ngIf="formulario.get('nombre').hasError('required')">
    El nombre es obligatorio.
  </div>
  <div *ngIf="formulario.get('nombre').hasError('minlength')">
    El nombre debe tener al menos 3 caracteres.
  </div>
  
  <input formControlName="email">
  <div *ngIf="formulario.get('email').hasError('required')">
    El correo electrónico es obligatorio.
  </div>
  <div *ngIf="formulario.get('email').hasError('email')">
    El correo electrónico debe ser válido.
  </div>
</form>
```

### Validación Dinámica en la Plantilla

```html
<input formControlName="nombre">
<div *ngIf="formulario.get('nombre').invalid && (formulario.get('nombre').dirty || formulario.get('nombre').touched)">
  <div *ngIf="formulario.get('nombre').hasError('required')">
    El nombre es obligatorio.
  </div>
  <div *ngIf="formulario.get('nombre').hasError('minlength')">
    El nombre debe tener al menos 3 caracteres.
  </div>
</div>
```

En este ejemplo, los mensajes de error se muestran solo si el campo ha sido tocado o modificado.

## Formularios Basados en Plantillas

Los formularios basados en plantillas utilizan directivas de Angular dentro del HTML para manejar la entrada del usuario. Algunos conceptos clave incluyen:

- **ngForm y ngModel:** Directivas que ayudan a establecer enlaces bidireccionales entre los campos del formulario y el modelo.

  ```html
  <form #miFormulario="ngForm">
    <input name="nombre" ngModel>
    <input name="email" ngModel>
  </form>
  ```

- **Directivas de Validación:** Directivas como `ngRequired` o `ngMinlength` para validar campos.

  ```html
  <input name="nombre" ngModel required minlength="3">
  ```

## Validación de Formularios Basados en Plantillas

La validación de formularios basados en plantillas en Angular se realiza utilizando directivas especiales y clases CSS.

### Directivas de Validación

```html
<input name="nombre" ngModel required minlength="3">
<div *ngIf="nombre.invalid && (nombre.dirty || nombre.touched)">
  <div *ngIf="nombre.hasError('required')">
    El nombre es obligatorio.
  </div>
  <div *ngIf="nombre.hasError('minlength')">
    El nombre debe tener al menos 3 caracteres.
  </div>
</div>

<input name="email" ngModel required email>
<div *ngIf="email.invalid && (email.dirty || email.touched)">
  <div *ngIf="email.hasError('required')">
    El correo electrónico es obligatorio.
  </div>
  <div *ngIf="email.hasError('email')">
    El correo electrónico debe ser válido.
  </div>
</div>
```

En este ejemplo, las directivas `required` y `minlength` se utilizan para especificar los requisitos de validación.

### Clases CSS de Validación

```html
<input name="nombre" ngModel required minlength="3" [class.is-invalid]="nombre.invalid && (nombre.dirty || nombre.touched)">
<div *ngIf="nombre.invalid && (nombre.dirty || nombre.touched)">
  <div *ngIf="nombre.hasError('required')">
    El nombre es obligatorio.
  </div>
  <div *ngIf="nombre.hasError('minlength')">
    El nombre debe tener al menos 3 caracteres.
  </div>
</div>
```

### Validación Dinámica en la Plantilla

```html
<input name="nombre" ngModel required minlength="3" [ngClass]="{'is-invalid': nombre.invalid && (nombre.dirty || nombre.touched)}">
<div *ngIf="nombre.invalid && (nombre.dirty || nombre.touched)">
  <div *ngIf="nombre.hasError('required')">
    El nombre es obligatorio.
  </div>
  <div *ngIf="nombre.hasError('minlength')">
    El nombre debe tener al menos 3 caracteres.
  </div>
</div>
```


## Combinando Formularios Reactivos y Basados en Plantillas

Angular permite combinar formularios reactivos y basados en plantillas para aprovechar lo mejor de ambos enfoques.

- **Directiva ngForm para Formularios Reactivos:**
  
  ```html
  <form [formGroup]="formularioReactivo" (ngSubmit)="submitForm()">
    <input formControlName="nombre">
    <input formControlName="email">
  </form>
  ```

- **Utilizando ngModel con Formularios Reactivos:**
  
  ```html
  <form [formGroup]="formularioReactivo" (ngSubmit)="submitForm()">
    <input formControlName="nombre" [(ngModel)]="modelo.nombre">
    <input formControlName="email" [(ngModel)]="modelo.email">
  </form>
  ```

Para obtener información más detallada y avanzada, consulta la [documentación oficial de Angular sobre formularios](https://angular.io/guide/forms-overview). ¡Optimiza la gestión de formularios en tus aplicaciones Angular!
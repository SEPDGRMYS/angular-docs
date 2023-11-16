---
sidebar_position: 2
---

# Componentes

## ¿Qué es un Componente en Angular?

En Angular, un componente es un bloque de construcción fundamental para construir aplicaciones. Los componentes encapsulan la lógica y la presentación de la interfaz de usuario, y se componen para formar la aplicación.


## Crear un Componente

Para crear un componente, utiliza el Angular CLI:

```bash
ng generate component mi-componente
```

Esto generará los archivos necesarios para tu nuevo componente.

## Estructura de un Componente

Un componente Angular consta de tres partes principales:

1. **Clase del Componente:**
   - Define la lógica y el comportamiento del componente.

    ```typescript
    import { Component } from '@angular/core';

    @Component({
      selector: 'mi-componente',
      templateUrl: 'mi-componente.html',
      styleUrls: ['mi-componente.css']
    })
    export class MiComponente {
      // Propiedades y métodos del componente
      nombre: string = 'John Doe';
    }
    ```

2. **Plantilla (Template):**
   - Define la estructura y la presentación del componente.

    ```html
    <!-- mi-componente.html -->
    <div>
      <h1>Hola, {{ nombre }}</h1>
    </div>
    ```

3. **Metadatos (Metadata):**
   - Proporciona información adicional sobre el componente, como su selector, la plantilla y las hojas de estilo asociadas.


## Usar un Componente

Puedes utilizar tu componente en otras partes de la aplicación mediante su **selector**:

```html
<mi-componente></mi-componente>
```
---
## Comunicación entre Componentes

Los componentes pueden comunicarse entre sí mediante la entrada (`@Input`) y la salida (`@Output`). Esto permite la construcción de aplicaciones modulares y reutilizables.


# Inputs y Outputs en Angular

En Angular, los componentes pueden comunicarse entre sí a través de la entrada (`@Input`) y la salida (`@Output`). Esto permite la construcción de aplicaciones más dinámicas y reutilizables.

### @Input: Comunicación de Padre a Hijo

![Locale Dropdown](./img/input.svg)

Para pasar datos desde un componente padre a un componente hijo, utiliza la decoración `@Input`. Aquí hay un ejemplo básico:

```typescript
// En el componente hijo
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: '{{ mensajeDelPadre }}'
})
export class HijoComponent {
  @Input() mensajeDelPadre: string;
}
```

```html
<!-- En el componente padre -->
<app-hijo [mensajeDelPadre]="mensajeDesdeElPadre"></app-hijo>
```

### @Output: Comunicación de Hijo a Padre
![Locale Dropdown](./img/output.svg)
Para enviar datos desde un componente hijo a un componente padre, utiliza la decoración `@Output` junto con `EventEmitter`. Aquí hay un ejemplo básico:

```typescript
// En el componente hijo
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: '<button (click)="enviarMensajeAlPadre()">Enviar Mensaje</button>'
})
export class HijoComponent {
  @Output() mensajeAlPadre = new EventEmitter<string>();

  enviarMensajeAlPadre() {
    this.mensajeAlPadre.emit('¡Hola, padre!');
  }
}
```

![Locale Dropdown](./img/input-diagram-target-source.svg)

```html
<!-- En el componente padre -->
<app-hijo (mensajeAlPadre)="recibirMensajeDelHijo($event)"></app-hijo>
```

Este es solo un ejemplo simplificado. Te recomiendo visitar directamente la [página oficial de Angular sobre Inputs y Outputs](https://angular.io/guide/inputs-outputs) para obtener información más detallada y actualizada.

---

## Ciclo de Vida del Componente

Los componentes Angular pasan por varias etapas en su ciclo de vida, desde la creación hasta la destrucción. Los Lifecycle Hooks te permiten ejecutar código en momentos específicos de este ciclo.

### Uso de Lifecycle Hooks

Para utilizar un Lifecycle Hook, simplemente implementa el método correspondiente en tu componente.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  template: '...'
})
export class MiComponente implements OnInit {
  ngOnInit(): void {
    // Lógica de inicialización
  }
}
```

### Principales Lifecycle Hooks

1. **ngOnInit:**
   - Este método se llama después de que Angular ha inicializado todas las propiedades del componente. Es un buen lugar para realizar inicializaciones adicionales.

   ```typescript
   ngOnInit(): void {
     // Lógica de inicialización
   }
   ```

2. **ngOnChanges:**
   - Se llama cuando se detectan cambios en las propiedades de entrada (`@Input`). Recibe un objeto que contiene los cambios anteriores y actuales.

   ```typescript
   ngOnChanges(changes: SimpleChanges): void {
     // Lógica para manejar cambios
   }
   ```

3. **ngDoCheck:**
   - Se llama durante cada detección de cambios, ofreciendo la oportunidad de ejecutar lógica personalizada.

   ```typescript
   ngDoCheck(): void {
     // Lógica personalizada
   }
   ```

4. **ngAfterViewInit y ngAfterViewChecked:**
   - Se llaman después de que la vista del componente y sus vistas secundarias se hayan inicializado y verificado, respectivamente.

   ```typescript
   ngAfterViewInit(): void {
     // Lógica después de la inicialización de la vista
   }

   ngAfterViewChecked(): void {
     // Lógica después de la verificación de la vista
   }
   ```

5. **ngOnDestroy:**
   - Se llama justo antes de que Angular destruya el componente. Es un buen lugar para realizar limpiezas y liberar recursos.

   ```typescript
   ngOnDestroy(): void {
     // Lógica de limpieza
   }
   ```

Te recomiendo visitar la [página oficial de Angular sobre Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks) para obtener información más detallada y actualizada.
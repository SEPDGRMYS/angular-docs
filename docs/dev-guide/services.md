---
sidebar_position: 2
---

# Servicios

Los servicios en Angular son una parte fundamental de la arquitectura, utilizados para compartir lógica de negocio, datos y funcionalidades entre componentes. Esta guía proporciona una introducción a la creación y uso de servicios en Angular.

## Creación de Servicios

### Paso 1: Creación del Servicio

Para crear un servicio en Angular, ejecuta el siguiente comando en tu terminal:

```bash
ng generate service nombre-del-servicio
```

Este comando generará automáticamente un archivo `nombre-del-servicio.service.ts` con una plantilla básica de servicio.

### Paso 2: Implementación del Servicio

En el archivo `nombre-del-servicio.service.ts`, puedes implementar la lógica del servicio. Por ejemplo:

```typescript
// nombre-del-servicio.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Indica que el servicio estará disponible en toda la aplicación
})
export class NombreDelServicioService {
  private datosCompartidos: any[] = [];

  agregarDato(dato: any) {
    this.datosCompartidos.push(dato);
  }

  obtenerDatos(): any[] {
    return this.datosCompartidos;
  }
}
```

## Uso de Servicios en Componentes

### Paso 1: Inyección del Servicio

Para utilizar un servicio en un componente, primero debes inyectarlo. Puedes hacer esto en el constructor del componente:

```typescript
// mi-componente.component.ts
import { Component } from '@angular/core';
import { NombreDelServicioService } from './nombre-del-servicio.service';

@Component({
  selector: 'app-mi-componente',
  template: '<p>{{ datos | json }}</p>',
})
export class MiComponenteComponent {
  datos: any[];

  constructor(private servicio: NombreDelServicioService) {
    this.datos = this.servicio.obtenerDatos();
  }
}
```

### Paso 2: Utilización del Servicio

Con el servicio inyectado, puedes acceder a sus métodos y propiedades en el componente:

```typescript
// mi-otro-componente.component.ts
import { Component } from '@angular/core';
import { NombreDelServicioService } from './nombre-del-servicio.service';

@Component({
  selector: 'app-mi-otro-componente',
  template: '<button (click)="agregarDato()">Agregar Dato</button>',
})
export class MiOtroComponenteComponent {
  constructor(private servicio: NombreDelServicioService) {}

  agregarDato() {
    this.servicio.agregarDato({ mensaje: 'Nuevo dato' });
  }
}
```

## Configuración del Servicio en Módulo

Para que Angular sea consciente de tu servicio, debes agregarlo al array `providers` del módulo correspondiente:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NombreDelServicioService } from './nombre-del-servicio.service';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MiOtroComponenteComponent } from './mi-otro-componente/mi-otro-componente.component';

@NgModule({
  declarations: [MiComponenteComponent, MiOtroComponenteComponent],
  imports: [BrowserModule],
  providers: [NombreDelServicioService], // Agrega el servicio al array de providers
  bootstrap: [MiComponenteComponent],
})
export class AppModule {}
```

Con estos pasos, has creado y utilizado un servicio básico en Angular. Los servicios son una herramienta poderosa para compartir lógica y datos entre componentes, mejorando la modularidad y el mantenimiento de tu aplicación.
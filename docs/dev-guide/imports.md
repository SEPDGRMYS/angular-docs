---
sidebar_position: 4
---

# Instalación de Paquetes/Librerías de terceros

Una de las fortalezas de Angular es su ecosistema rico en bibliotecas de terceros que ofrecen funcionalidades adicionales y componentes reutilizables. A continuación, se describe cómo agregar estas bibliotecas a un proyecto Angular.

## Instalación de una Biblioteca de Terceros

Para agregar una biblioteca de terceros a tu proyecto Angular, puedes utilizar el sistema de gestión de paquetes npm. Abre una terminal en la raíz de tu proyecto y ejecuta el siguiente comando:

```bash
npm install nombre-de-la-biblioteca --save
```

Reemplaza "nombre-de-la-biblioteca" con el nombre real de la biblioteca que deseas instalar. La opción `--save` agrega la biblioteca como una dependencia en tu archivo `package.json`.

## Integración con Angular

Una vez que la biblioteca se ha instalado, puedes comenzar a utilizarla en tu aplicación Angular. Aquí hay algunos pasos generales:

### 1. Importar Módulos o Componentes

Importa los módulos o componentes necesarios desde la biblioteca en tu código. Puedes hacerlo en el módulo donde planeas utilizar la funcionalidad.

```typescript
// Ejemplo de importación de un módulo desde una biblioteca
import { NombreDelModulo } from 'nombre-de-la-biblioteca';
```

### 2. Utilizar Componentes o Funcionalidades

Utiliza los componentes o funcionalidades proporcionados por la biblioteca en tus archivos de plantillas o lógica de componentes.

```typescript
// Ejemplo de uso de un componente de la biblioteca en un componente Angular
@Component({
  selector: 'app-mi-componente',
  template: '<nombre-del-componente></nombre-del-componente>',
})
export class MiComponente {}
```

### 3. Configurar y Personalizar

Algunas bibliotecas de terceros pueden requerir configuraciones adicionales. Asegúrate de seguir la documentación de la biblioteca para obtener detalles sobre cómo personalizar la integración según tus necesidades.

## Ejemplo Práctico

Vamos a agregar la biblioteca `ng-bootstrap`, que proporciona componentes Bootstrap para Angular, como ejemplo práctico:

### 1. Instalación de `ng-bootstrap`

```bash
npm install @ng-bootstrap/ng-bootstrap --save
```

### 2. Importación en un Módulo Angular

```typescript
// En tu módulo (por ejemplo, app.module.ts)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    // ... tus componentes
  ],
  imports: [
    NgbModule, // Agrega NgbModule a la lista de importaciones
    // ... otros módulos
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### 3. Uso en un Componente

```typescript
// En tu componente (por ejemplo, mi-componente.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: '<ngb-alert>¡Hola desde ng-bootstrap!</ngb-alert>',
})
export class MiComponente {}
```
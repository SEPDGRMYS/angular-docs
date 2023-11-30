
# Inyección de Dependencias

La inyección de dependencias (DI) es un patrón fundamental en Angular que permite organizar y gestionar la creación y el uso de objetos en una aplicación. Angular tiene su propio sistema de inyección de dependencias que facilita la creación, la gestión y la reutilización de componentes y servicios. A continuación, se presenta una visión general de la inyección de dependencias en Angular.

## ¿Qué es la Inyección de Dependencias?

La inyección de dependencias es un patrón en el que un objeto se suministra a otro objeto que depende de él. En el contexto de Angular, los componentes y servicios dependen de otros servicios o recursos, y Angular se encarga de proporcionar estas dependencias.

## Beneficios de la Inyección de Dependencias en Angular

- **Reutilización de Código:** Los servicios pueden ser compartidos y reutilizados en toda la aplicación.
- **Mantenimiento Simplificado:** Cambiar la implementación de un servicio no afecta a los componentes que lo utilizan.
- **Testing Facilitado:** Facilita la prueba unitaria al permitir la sustitución fácil de dependencias durante las pruebas.

## Sistema de Inyección de Dependencias en Angular

En Angular, el sistema de inyección de dependencias se basa en los siguientes conceptos:

- **Proveedor (Provider):** Un proveedor es un objeto que le dice a Angular cómo obtener o crear una instancia de un servicio.

  ```typescript
  @Injectable({ providedIn: 'root' })
  export class MiServicio {
    // Lógica del servicio
  }
  ```

- **Ámbito (Scope):** Angular proporciona varias formas de definir el ámbito de un servicio, como `root`, `platform`, y `any`.

- **Inyección Parametrizada:** Puedes inyectar servicios concretos o abstracciones a través de los constructores de componentes y servicios.

  ```typescript
  constructor(private miServicio: MiServicio) {}
  ```

## Inyección de Dependencias en Componentes

Los componentes en Angular reciben sus dependencias a través del constructor. El ámbito por defecto para los servicios es el ámbito del módulo.

```typescript
@Component({
  selector: 'mi-componente',
  template: '...',
})
export class MiComponente {
  constructor(private miServicio: MiServicio) {}
}
```

## Inyección de Dependencias en Servicios

Los servicios también pueden depender de otros servicios. Angular maneja automáticamente la resolución de dependencias.

```typescript
@Injectable({
  providedIn: 'root',
})
export class OtroServicio {
  constructor(private miServicio: MiServicio) {}
}
```

Para obtener información más detallada sobre la inyección de dependencias en Angular, consulta la [documentación oficial de Angular sobre Inyección de Dependencias](https://angular.io/guide/dependency-injection-overview).

---
sidebar_position: 1
---

# Routing en Angular

# Enrutamiento y Navegación en Angular

El enrutamiento y la navegación son aspectos esenciales en el desarrollo de aplicaciones web. Angular proporciona un potente sistema de enrutamiento que facilita la creación de aplicaciones de una sola página (SPA) con múltiples vistas. A continuación, se presenta una visión general del enrutamiento y la navegación en Angular.

## Conceptos Básicos de Enrutamiento

El enrutamiento en Angular se basa en dos conceptos principales: los componentes y las rutas.

- **Componentes:** En Angular, una vista es controlada por un componente. El enrutador carga y descarga componentes según las rutas.

- **Rutas:** Las rutas definen cómo los segmentos de URL se corresponden con los componentes que deben ser presentados.

## Configuración del Enrutador

Para habilitar el enrutamiento en Angular, necesitas importar el módulo `RouterModule` y configurar las rutas en tu aplicación.

```typescript
// Importa el módulo RouterModule y Routes
import { RouterModule, Routes } from '@angular/router';

// Define las rutas de tu aplicación
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  // ... Otras rutas
];

// Configura el RouterModule con las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Enlaces y Navegación

Los enlaces en Angular se crean con el selector `<a>` y el enlace se realiza mediante la directiva `routerLink`.

```html
<!-- Enlace a la ruta '/inicio' -->
<a routerLink="/inicio">Ir a Inicio</a>
```

La navegación programática se realiza mediante el servicio `Router`.

```typescript
// Importa el servicio Router
import { Router } from '@angular/router';

// Navega a la ruta '/perfil'
constructor(private router: Router) {}
navegarPerfil() {
  this.router.navigate(['/perfil']);
}
```

## Parámetros de Ruta

Puedes pasar parámetros a una ruta para personalizar la vista. Define los parámetros en la configuración de la ruta y accede a ellos en el componente.

```typescript
const routes: Routes = [
  { path: 'usuario/:id', component: UsuarioComponent },
];
```

```typescript
// Accede al parámetro 'id' en el componente UsuarioComponent
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    const userId = params['id'];
    // ...
  });
}
```

## Enrutamiento Anidado

El enrutamiento anidado permite tener vistas jerárquicas. Los componentes se anidan dentro de otros y tienen sus propias rutas.

```typescript
const routes: Routes = [
  {
    path: 'cuenta',
    component: CuentaComponent,
    children: [
      { path: 'detalle', component: DetalleCuentaComponent },
      { path: 'historial', component: HistorialCuentaComponent },
    ],
  },
];
```

```html
<!-- Outlet donde se cargarán los componentes anidados -->
<router-outlet></router-outlet>
```
---

## Lazy Loading en Angular

Lazy Loading es una técnica en Angular que consiste en cargar módulos o componentes solo cuando son necesarios, mejorando así el rendimiento inicial de la aplicación. En lugar de cargar todos los recursos al principio, los módulos se descargan de manera diferida, reduciendo el tiempo de carga inicial y permitiendo una experiencia de usuario más eficiente.

### Configuración de Lazy Loading

Para implementar Lazy Loading en Angular, sigue estos pasos:

1. **Divide la Aplicación en Módulos:**
   - Identifica los módulos de tu aplicación que se pueden cargar de forma independiente.

2. **Configura las Rutas:**
   - En la configuración de las rutas, utiliza la propiedad `loadChildren` en lugar de `component` para indicar el módulo que se cargará de forma diferida.

   ```typescript
   const routes: Routes = [
     { path: 'dashboard', component: DashboardComponent },
     { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
     // Otras rutas
   ];
   ```

   - En este ejemplo, `loadChildren` carga dinámicamente el módulo `AdminModule` cuando se accede a la ruta 'admin'.

3. **Configura el Módulo a Cargar de Forma Diferida:**
   - Asegúrate de que el módulo que estás cargando de forma diferida tiene su propia configuración de rutas internas.

   ```typescript
   // admin.module.ts
   const routes: Routes = [
     { path: '', component: AdminComponent },
     { path: 'usuarios', component: UsuariosComponent },
     // Otras rutas internas del módulo
   ];
   ```

4. **Asegúrate de que se Utilice un Outlet:**
   - En el componente principal, asegúrate de tener un `<router-outlet></router-outlet>` para cargar dinámicamente los componentes.

   ```html
   <!-- app.component.html -->
   <router-outlet></router-outlet>
   ```

### Ventajas de Lazy Loading

1. **Mejora el Rendimiento Inicial:** Reduce el tiempo de carga inicial al cargar solo los recursos necesarios para la vista inicial.

2. **División Lógica:** Permite una estructura modular y una división lógica de la aplicación, facilitando el mantenimiento.

3. **Carga Eficiente:** Cada módulo se carga solo cuando es necesario, lo que mejora la eficiencia y la velocidad de navegación.

### Consideraciones Importantes

- **Tamaño de los Módulos:** Aunque Lazy Loading mejora el rendimiento inicial, ten en cuenta el tamaño de los módulos. Módulos excesivamente grandes pueden afectar negativamente el rendimiento.

- **Consistencia en la Experiencia de Usuario:** Asegúrate de que la experiencia del usuario sea coherente, incluso cuando se cargan módulos de forma diferida.

Para obtener información más detallada y avanzada sobre Lazy Loading en Angular, consulta la [documentación oficial](https://angular.io/guide/lazy-loading-ngmodules). ¡Optimiza tu aplicación Angular y proporciona una experiencia de usuario óptima!

Este es solo un vistazo rápido al enrutamiento y la navegación en Angular. Para obtener información más detallada y avanzada, consulta la [documentación oficial de Angular sobre Enrutamiento y Navegación](https://angular.io/guide/routing-overview).

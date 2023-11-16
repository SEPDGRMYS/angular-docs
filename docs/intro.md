---
sidebar_position: 1
---

# Guía de Instalación de Angular

## Requisitos Previos

Antes de comenzar con la instalación de Angular, asegúrate de tener los siguientes requisitos previos instalados en tu sistema:

1. **Node.js y npm:** Angular requiere Node.js y npm (administrador de paquetes de Node.js). Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

2. **Angular CLI:** Instala Angular CLI globalmente utilizando el siguiente comando:

    ```bash
    npm install -g @angular/cli
    ```

## Instalación de Angular

Una vez instalado angular, sigue estos pasos para crear un nuevo proyecto Angular:

1. **Crea un Nuevo Proyecto:**

    ```bash
    ng new nombre-del-proyecto
    ```

    Sustituye `nombre-del-proyecto` con el nombre que desees para tu aplicación.

2. **Navega al Proyecto:**

    ```bash
    cd nombre-del-proyecto
    ```

3. **Inicia la Aplicación:**

    ```bash
    ng serve
    ```

    Esto iniciará el servidor de desarrollo. Abre tu navegador y ve a `http://localhost:4200/`. Verás la aplicación Angular por defecto.

4. **¡Listo!**

    Has completado la instalación básica de Angular. Ahora puedes comenzar a desarrollar tu aplicación.

## Comandos Útiles de Angular CLI

Aquí hay algunos comandos útiles proporcionados por [Angular CLI](https://angular.io/cli):

-   **Generar Componente:**

    ```bash
    ng generate component ruta/nombre-del-componente
    ```

-   **Generar Módulo:**

    ```bash
    ng generate module ruta/nombre-del-modulo
    ```

-   **Generar Servicio:**

    ```bash
    ng generate service ruta/nombre-del-servicio
    ```

Estos comandos te ayudarán a generar diferentes partes de tu aplicación de manera eficiente.

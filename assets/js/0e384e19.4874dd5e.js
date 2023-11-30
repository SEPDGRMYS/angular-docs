"use strict";(self.webpackChunkng_docs=self.webpackChunkng_docs||[]).push([[671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(g,l(l({ref:a},c),{},{components:t})):n.createElement(g,l({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},l="Gu\xeda de Instalaci\xf3n de Angular",i={unversionedId:"intro",id:"intro",title:"Gu\xeda de Instalaci\xf3n de Angular",description:"Requisitos Previos",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/angular-docs/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Angular",permalink:"/angular-docs/docs/category/angular"}},p={},s=[{value:"Requisitos Previos",id:"requisitos-previos",level:2},{value:"Instalaci\xf3n de Angular",id:"instalaci\xf3n-de-angular",level:2},{value:"Comandos \xdatiles de Angular CLI",id:"comandos-\xfatiles-de-angular-cli",level:2}],c={toc:s},u="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gu\xeda-de-instalaci\xf3n-de-angular"},"Gu\xeda de Instalaci\xf3n de Angular"),(0,r.kt)("h2",{id:"requisitos-previos"},"Requisitos Previos"),(0,r.kt)("p",null,"Antes de comenzar con la instalaci\xf3n de Angular, aseg\xfarate de tener los siguientes requisitos previos instalados en tu sistema:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Node.js y npm:")," Angular requiere Node.js y npm (administrador de paquetes de Node.js). Puedes descargarlos e instalarlos desde ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"nodejs.org"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Angular CLI:")," Instala Angular CLI globalmente utilizando el siguiente comando:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @angular/cli\n")))),(0,r.kt)("h2",{id:"instalaci\xf3n-de-angular"},"Instalaci\xf3n de Angular"),(0,r.kt)("p",null,"Una vez instalado angular, sigue estos pasos para crear un nuevo proyecto Angular:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crea un Nuevo Proyecto:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng new nombre-del-proyecto\n")),(0,r.kt)("p",{parentName:"li"},"Sustituye ",(0,r.kt)("inlineCode",{parentName:"p"},"nombre-del-proyecto")," con el nombre que desees para tu aplicaci\xf3n.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Navega al Proyecto:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd nombre-del-proyecto\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Inicia la Aplicaci\xf3n:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng serve\n")),(0,r.kt)("p",{parentName:"li"},"Esto iniciar\xe1 el servidor de desarrollo. Abre tu navegador y ve a ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4200/"),". Ver\xe1s la aplicaci\xf3n Angular por defecto.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\xa1Listo!")),(0,r.kt)("p",{parentName:"li"},"Has completado la instalaci\xf3n b\xe1sica de Angular. Ahora puedes comenzar a desarrollar tu aplicaci\xf3n."))),(0,r.kt)("h2",{id:"comandos-\xfatiles-de-angular-cli"},"Comandos \xdatiles de Angular CLI"),(0,r.kt)("p",null,"Aqu\xed hay algunos comandos \xfatiles proporcionados por ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/cli"},"Angular CLI"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Generar Componente:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate component ruta/nombre-del-componente\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Generar M\xf3dulo:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate module ruta/nombre-del-modulo\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Generar Servicio:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate service ruta/nombre-del-servicio\n")))),(0,r.kt)("p",null,"Estos comandos te ayudar\xe1n a generar diferentes partes de tu aplicaci\xf3n de manera eficiente."))}d.isMDXComponent=!0}}]);
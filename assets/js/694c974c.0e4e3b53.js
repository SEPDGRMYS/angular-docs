"use strict";(self.webpackChunkangular_docs=self.webpackChunkangular_docs||[]).push([[808],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>g});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4147:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},i="Templates",o={unversionedId:"understanding-angular/templates",id:"understanding-angular/templates",title:"Templates",description:"En Angular, las plantillas son fundamentales para la creaci\xf3n de interfaces de usuario din\xe1micas. La sintaxis de las plantillas proporciona un conjunto de reglas y expresiones que permiten interactuar con los componentes y mostrar datos en la interfaz de usuario.",source:"@site/docs/understanding-angular/templates.md",sourceDirName:"understanding-angular",slug:"/understanding-angular/templates",permalink:"/angular-docs/docs/understanding-angular/templates",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"M\xf3dulos",permalink:"/angular-docs/docs/understanding-angular/modules"},next:{title:"Directivas",permalink:"/angular-docs/docs/understanding-angular/directives"}},s={},p=[{value:"Expresiones en Plantillas",id:"expresiones-en-plantillas",level:2},{value:"Eventos en Plantillas",id:"eventos-en-plantillas",level:2},{value:"Enlace de Propiedades",id:"enlace-de-propiedades",level:2},{value:"Pipes",id:"pipes",level:2},{value:"Two-Way Binding",id:"two-way-binding",level:2}],d={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,l.kt)(c,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"templates"},"Templates"),(0,l.kt)("h1",{id:"sintaxis-de-plantillas-en-angular"},"Sintaxis de Plantillas en Angular"),(0,l.kt)("p",null,"En Angular, las plantillas son fundamentales para la creaci\xf3n de interfaces de usuario din\xe1micas. La sintaxis de las plantillas proporciona un conjunto de reglas y expresiones que permiten interactuar con los componentes y mostrar datos en la interfaz de usuario."),(0,l.kt)("h2",{id:"expresiones-en-plantillas"},"Expresiones en Plantillas"),(0,l.kt)("p",null,"Las expresiones en las plantillas de Angular se encierran entre dobles llaves ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ }}"),". Estas expresiones son evaluadas y el resultado se muestra en el DOM. Por ejemplo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>{{ mensaje }}</p>\n")),(0,l.kt)("p",null,"Aqu\xed, la expresi\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ mensaje }}")," ser\xe1 reemplazada por el valor de la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"mensaje")," en el componente asociado."),(0,l.kt)("h2",{id:"eventos-en-plantillas"},"Eventos en Plantillas"),(0,l.kt)("p",null,"Los eventos se manejan en las plantillas mediante par\xe9ntesis ",(0,l.kt)("inlineCode",{parentName:"p"},"( )"),". Puedes llamar a m\xe9todos del componente cuando ocurren eventos."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Llamando al m\xe9todo handleClick cuando se hace clic en el bot\xf3n --\x3e\n<button (click)="handleClick()">Haz clic</button>\n')),(0,l.kt)("h2",{id:"enlace-de-propiedades"},"Enlace de Propiedades"),(0,l.kt)("p",null,"El enlace de propiedades permite la actualizaci\xf3n bidireccional entre la vista y el modelo. Utiliza corchetes ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," para enlazar propiedades del componente con propiedades de elementos del DOM."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Enlazando la propiedad 'valor' del componente con el valor del input --\x3e\n<input [value]=\"valor\" />\n")),(0,l.kt)("h2",{id:"pipes"},"Pipes"),(0,l.kt)("p",null,"Los pipes permiten transformar visualmente los datos antes de mostrarlos en la interfaz de usuario. Angular proporciona pipes integrados y la capacidad de crear pipes personalizados."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Utilizando el pipe 'uppercase' para mostrar el texto en may\xfasculas --\x3e\n<p>{{ texto | uppercase }}</p>\n")),(0,l.kt)("h2",{id:"two-way-binding"},"Two-Way Binding"),(0,l.kt)("p",null,"El two-way binding combina la vinculaci\xf3n de propiedades y eventos en un solo enlace. Utiliza la directiva ",(0,l.kt)("inlineCode",{parentName:"p"},"[(ngModel)]")," para lograr la actualizaci\xf3n bidireccional."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Two-way binding con [(ngModel)] --\x3e\n<input [(ngModel)]="nombre" />\n')),(0,l.kt)("p",null,"Estas son solo algunas de las caracter\xedsticas b\xe1sicas de la sintaxis de plantillas en Angular. Para obtener informaci\xf3n m\xe1s detallada y avanzada, consulta la ",(0,l.kt)("a",{parentName:"p",href:"https://angular.io/guide/template-syntax"},"documentaci\xf3n oficial de Angular sobre sintaxis de plantillas"),"."))}u.isMDXComponent=!0}}]);
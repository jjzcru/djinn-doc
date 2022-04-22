"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[2199],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,v=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3233:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={id:"overview",title:"Overview",sidebar_position:1},u="Overview",l={unversionedId:"architecture/djinn-client/overview",id:"architecture/djinn-client/overview",title:"Overview",description:"This is an application that is going to talk directly with the Djinn Gateway",source:"@site/docs/architecture/djinn-client/overview.md",sourceDirName:"architecture/djinn-client",slug:"/architecture/djinn-client/overview",permalink:"/docs/architecture/djinn-client/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/djinn-client/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Security Model",permalink:"/docs/architecture/djinn-cloud/security-model"},next:{title:"Web",permalink:"/docs/architecture/djinn-client/web"}},p={},s=[],d={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This is an application that is going to talk directly with the Djinn Gateway\nthere are two types of connection that can happened:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web"),(0,o.kt)("li",{parentName:"ul"},"Gateway")))}f.isMDXComponent=!0}}]);
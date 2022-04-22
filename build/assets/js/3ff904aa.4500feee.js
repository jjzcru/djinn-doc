"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[8726],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,h=p["".concat(l,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"web",title:"Web",sidebar_position:2},l="Web",u={unversionedId:"architecture/djinn-client/web",id:"architecture/djinn-client/web",title:"Web",description:"This is an application that is embbed in the environment that is running, this",source:"@site/docs/architecture/djinn-client/web.md",sourceDirName:"architecture/djinn-client",slug:"/architecture/djinn-client/web",permalink:"/docs/architecture/djinn-client/web",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/djinn-client/web.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"web",title:"Web",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/djinn-client/overview"},next:{title:"Gateway",permalink:"/docs/architecture/djinn-client/gateway"}},s={},d=[{value:"Board",id:"board",level:2},{value:"Cloud",id:"cloud",level:2}],p={toc:d};function b(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web"},"Web"),(0,o.kt)("p",null,"This is an application that is embbed in the environment that is running, this\ncan be either in the board or the cloud."),(0,o.kt)("h2",{id:"board"},"Board"),(0,o.kt)("p",null,"This is a web client that comes with the board, and can only control the devices that exist locally in that board."),(0,o.kt)("h2",{id:"cloud"},"Cloud"),(0,o.kt)("p",null,"This is a web client that comes with the installation of a Djinn cloud service, this has access to all the ",(0,o.kt)("inlineCode",{parentName:"p"},"Homes")," that are linked to the account, the web clients that come from the cloud access the different boards by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Agent")," service that is running in each board."))}b.isMDXComponent=!0}}]);
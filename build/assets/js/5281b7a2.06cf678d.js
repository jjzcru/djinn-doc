"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[5927],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"architecture",title:"Architecture",sidebar_position:3,custom_edit_url:null},l="Overview",u={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Djinn Architecture",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"architecture",title:"Architecture",sidebar_position:3,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"10,000 foot view",permalink:"/docs/high-level-view"},next:{title:"Overview",permalink:"/docs/djinn-board/overview"}},s={},d=[{value:"Djinn Board",id:"djinn-board",level:2},{value:"Djinn Cloud",id:"djinn-cloud",level:2},{value:"Djin Client",id:"djin-client",level:2}],h={toc:d};function p(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Djinn Architecture",src:n(2017).Z,width:"2957",height:"1771"})),(0,o.kt)("h2",{id:"djinn-board"},(0,o.kt)("a",{parentName:"h2",href:"/docs/djinn-board/overview"},"Djinn Board")),(0,o.kt)("p",null,"This is the most important component of the architecture, this is a physical device that has all the components required to add IoT devices to the platform, this board can work as a standalone device and doesn't need an internet connection."),(0,o.kt)("p",null,"The integration with the cloud is optional, if the user doesn't want or need that integration they can just disable the functionality."),(0,o.kt)("h2",{id:"djinn-cloud"},(0,o.kt)("a",{parentName:"h2",href:"/docs/djinn-cloud/overview"},"Djinn Cloud")),(0,o.kt)("p",null,"This is a component that enables the user to connect to the devices, since the connection between the board and the cloud is initiated by the board, the cloud doesn't need to know what is the address or IP of the board, it just needs to keep the TCP connection alive."),(0,o.kt)("p",null,"The cloud not only enables users to access the board remotely but it also enables them to have multiple boards and control them from a centralized place, imagine having a home and a beach house, with Djinn cloud you would be able to control these two separate houses."),(0,o.kt)("p",null,"This cloud comes in two flavors one is an open-source version that only supports single tenancy, and the user would need to host them themself, and the enterprise version which is a proprietary SaaS offering that is built to support multitenancy and is hosted in the cloud."),(0,o.kt)("h2",{id:"djin-client"},(0,o.kt)("a",{parentName:"h2",href:"/docs/djinn-client/overview"},"Djin Client")),(0,o.kt)("p",null,"These are the interaction between the users and the platforms, these clients can be any program that complies with the application endpoint."))}p.isMDXComponent=!0},2017:function(e,t,n){t.Z=n.p+"assets/images/djinn_diagram-efb37596b9f26a9d3518962407648e91.png"}}]);
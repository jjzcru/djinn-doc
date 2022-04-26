"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[2021],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3930:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"overview",title:"Overview",sidebar_position:1},u="Overview",s={unversionedId:"architecture/djinn-cloud/overview",id:"architecture/djinn-cloud/overview",title:"Overview",description:"Djinn is going to use the Open-core business model, which is the same that is used by:",source:"@site/docs/architecture/djinn-cloud/overview.md",sourceDirName:"architecture/djinn-cloud",slug:"/architecture/djinn-cloud/overview",permalink:"/docs/architecture/djinn-cloud/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/djinn-cloud/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Security Model",permalink:"/docs/architecture/djinn-board/security-model"},next:{title:"Community Edition",permalink:"/docs/architecture/djinn-cloud/community-edition"}},l={},p=[],d={toc:p};function m(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Djinn is going to use the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-core_model"},"Open-core")," business model, which is the same that is used by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://about.gitlab.com/"},"GitLab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redis.io/"},"Redis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://neo4j.com/"},"Neo4j"))),(0,o.kt)("p",null,"The Comunity Edition is the open source version that users can download and install in their own infraestructure, while the Enterprise Edition is a SaaS offering that is propietary, it support multitenancy creating a namespace per each tenant."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Djinn Cloud Architecture",src:r(7414).Z,width:"1137",height:"827"})))}m.isMDXComponent=!0},7414:function(e,t,r){t.Z=r.p+"assets/images/djinn_cloud_diagram-12a2b0356a7e1ada16bab89c962046ed.png"}}]);
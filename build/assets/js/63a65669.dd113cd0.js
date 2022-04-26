"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[7741],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(r),p=i,f=h["".concat(u,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2198:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"authentication-server",title:"Authentication Server",sidebar_position:6,custom_edit_url:null},u="Authentication Server",s={unversionedId:"architecture/djinn-board/architecture/authentication-server",id:"architecture/djinn-board/architecture/authentication-server",title:"Authentication Server",description:"This is a OAuth 2.0 server, build in go, that handles the authentication of the users that wan't to control the board.",source:"@site/docs/architecture/djinn-board/architecture/authentication-server.md",sourceDirName:"architecture/djinn-board/architecture",slug:"/architecture/djinn-board/architecture/authentication-server",permalink:"/docs/architecture/djinn-board/architecture/authentication-server",editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"authentication-server",title:"Authentication Server",sidebar_position:6,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Gateway",permalink:"/docs/architecture/djinn-board/architecture/gateway"},next:{title:"Web Client",permalink:"/docs/architecture/djinn-board/architecture/web-client"}},l={},d=[],h={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication-server"},"Authentication Server"),(0,o.kt)("p",null,"This is a OAuth 2.0 server, ",(0,o.kt)("a",{parentName:"p",href:"https://hackernoon.com/build-your-own-oauth2-server-in-go-7d0f660732c3"},"build in go"),", that handles the authentication of the users that wan't to control the board."),(0,o.kt)("p",null,"It uses the credentials that are store in the Db to validate the credential and also assign access."),(0,o.kt)("p",null,"The reason we are creating a custom OAuth Server is because it provides access to the IoT devices without the need of a internet connection, also if we only want to control the board from our LAN there is no need to have our credentials stored in the internet."))}p.isMDXComponent=!0}}]);
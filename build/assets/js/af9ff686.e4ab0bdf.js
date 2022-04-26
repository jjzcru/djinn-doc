"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[7858],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"high-level-view",title:"10,000 foot view",sidebar_position:2,custom_edit_url:null},l="10,000 foot view",s={unversionedId:"high-level-view",id:"high-level-view",title:"10,000 foot view",description:"Djinn Board Architecture",source:"@site/docs/c4.md",sourceDirName:".",slug:"/high-level-view",permalink:"/docs/high-level-view",editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"high-level-view",title:"10,000 foot view",sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Architecture",permalink:"/docs/architecture"}},u={},d=[{value:"User",id:"user",level:2},{value:"Board",id:"board",level:2},{value:"Cloud",id:"cloud",level:2},{value:"IoT Devices",id:"iot-devices",level:2}],p={toc:d};function h(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"10000-foot-view"},"10,000 foot view"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Djinn Board Architecture",src:r(5574).Z,width:"869",height:"556"})),(0,i.kt)("p",null,"The architecture is composed of three components that talk to each other, and the IoT devices that are already registered in the network get attached to the board."),(0,i.kt)("h2",{id:"user"},"User"),(0,i.kt)("p",null,"The user is the human being that talks to the platform using ",(0,i.kt)("a",{parentName:"p",href:"/docs/djinn-client/overview"},"Clients"),", these clients can talk to either the board directly, if they are in the same network (Locally), or remotely by talking to the cloud. The communication between the clients and the server (Board or Cloud) is encrypted and it uses OAuth, ",(0,i.kt)("em",{parentName:"p"},"and support for OpenID is considered in future development")),(0,i.kt)("h2",{id:"board"},"Board"),(0,i.kt)("p",null,"This is the main component of the architecture, it's distributed as a custom ",(0,i.kt)("a",{parentName:"p",href:"https://www.pcmag.com/encyclopedia/term/system-image"},"System Image")," that is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi OS"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For this implementation we are using a raspberry pi 4 as the board, but there isn't anything that would discourage the use of other boards or operating systems, as long as those systems enable the installation of the software stack that is described.")),(0,i.kt)("h2",{id:"cloud"},"Cloud"),(0,i.kt)("p",null,"This is a server that is running in a publicly accessible network and enables users to access one or multiple homes from anywhere in the world with an internet connection."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This component is not required unless the user wants to expose access to the devices from the internet.")),(0,i.kt)("h2",{id:"iot-devices"},"IoT Devices"),(0,i.kt)("p",null,"These are devices that are already installed in the network or the house."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since the installation of each device depends on each vendor, this architecture does not handle the installation of any of the devices, only the control and notification of their states.")))}h.isMDXComponent=!0},5574:function(e,t,r){t.Z=r.p+"assets/images/c4_diagram-b466b2e7e422c47c0a163e3bcb388e9c.png"}}]);
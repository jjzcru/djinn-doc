"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[5006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"resource-model",title:"Resource Model",sidebar_position:9,custom_edit_url:null},p="Resource Model",d={unversionedId:"resource-model",id:"resource-model",title:"Resource Model",description:"A resource model is a unified way to describe the resources that the platform is able to handle, at this point in time the resources are:",source:"@site/docs/resource-model.md",sourceDirName:".",slug:"/resource-model",permalink:"/docs/resource-model",editUrl:null,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"resource-model",title:"Resource Model",sidebar_position:9,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Reference Frameworks",permalink:"/docs/reference-frameworks"},next:{title:"Relational Model",permalink:"/docs/relational-model"}},u={},m=[{value:"Plugins",id:"plugins",level:2},{value:"Device Type",id:"device-type",level:2},{value:"Device",id:"device",level:2},{value:"Users",id:"users",level:2}],s={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"resource-model"},"Resource Model"),(0,l.kt)("p",null,"A resource model is a unified way to describe the resources that the platform is able to handle, at this point in time the resources are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plugins"),(0,l.kt)("li",{parentName:"ul"},"Device Type"),(0,l.kt)("li",{parentName:"ul"},"Devices"),(0,l.kt)("li",{parentName:"ul"},"Users")),(0,l.kt)("h2",{id:"plugins"},"Plugins"),(0,l.kt)("p",null,"Resource model that describe the information of the plugin once it's installed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier set by the platform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"package")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the plugin that uses reverse domain name notation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},"Version of the plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Human readable name of the plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"abstract")),(0,l.kt)("td",{parentName:"tr",align:null},"Short description of the plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"Long Description of the plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"repository")),(0,l.kt)("td",{parentName:"tr",align:null},"URL for the repository of the plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"website")),(0,l.kt)("td",{parentName:"tr",align:null},"Website of the plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:null},"Contact email")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"license")),(0,l.kt)("td",{parentName:"tr",align:null},"License of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"authors")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of the authors of the plugin")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/plugins/1"',title:'"/plugins/1"'},'{\n  "id": 1,\n  "package": "com.phillips.hue.bulbs",\n  "version": "2.1.0",\n  "name": "Phillips Hue",\n  "abstract": "Phillips hue bulbs simple control plugin",\n  "description": "Plugin that controls all the bulbs on phillips hue ecosystem",\n  "repository": "https://github.com/djinn/hue",\n  "website": "https://bulbs.hue.phillips.com/support",\n  "email": "support@hue.phillips.com",\n  "license": "MIT",\n  "authors": [\n    {\n      "name": "John Doe",\n      "email": "jdoe@phillips.com"\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"device-type"},"Device Type"),(0,l.kt)("p",null,"The resource that describe the type of devices that are supported by the platform, the device type is associated to a plugin to map out which plugin can handle that device, it also"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the device in the platform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier for the type of device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier of the plugin that controls this type of device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Human readable name for the device type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:null},"Key value property that describe what are the attributes that expose the state of the device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"commands")),(0,l.kt)("td",{parentName:"tr",align:null},"Key value property that describes the commands that are available and the commands that they can request")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/types/1"',title:'"/types/1"'},'{\n  "id": 1,\n  "name": "RGB Bulb",\n  "type": "rgb_bulb",\n  "properties": {\n    "light": {\n      "type": "boolean"\n    },\n    "intensity": {\n      "type": "number",\n      "format": "int",\n      "range": {\n        "min": 0,\n        "max": 100,\n        "enabled": true\n      }\n    },\n    "temperature": {\n      "type": "number",\n      "format": "float",\n      "units": "C"\n    }\n  },\n  "commands": {\n    "TURN_ON": {\n      "arguments": {\n        "light": {\n          "type": "boolean"\n        }\n      },\n      "response": {\n        "light": {\n          "type": "boolean"\n        }\n      }\n    },\n    "GET_TEMPERATURE": {\n      "arguments": null,\n      "response": {\n        "temperature": {\n          "type": "number",\n          "format": "float",\n          "units": "C"\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"device"},"Device"),(0,l.kt)("p",null,"Resource model for a device"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the device in the platform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"device")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier of the device, come from the manufacturer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Human readable device name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier for the device type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"Current state of the device")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/devices/1"',title:'"/devices/1"'},'{\n  "id": 1,\n  "device": "1fba78c5-4ad9-452f-868f-1f41b64db5f9",\n  "name": "Name",\n  "type": "1fba78c5-4ad9-452f-868f-1f41b64db5f6",\n  "state": {\n    "light": {\n      "value": true\n    },\n    "temperature": {\n      "value": 100,\n      "unit": "C"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"users"},"Users"),(0,l.kt)("p",null,"Resource model for the user"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the device in the platform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"Username of the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:null},"Contact email of the user")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/users/1fba78c5-4ad9-452f-868f-1f41b64db5f9"',title:'"/users/1fba78c5-4ad9-452f-868f-1f41b64db5f9"'},'{\n  "id": "1fba78c5-4ad9-452f-868f-1f41b64db5f9",\n  "name": "John Doe",\n  "username": "johndoe",\n  "email": "jdoe@exmaple.com"\n}\n')))}c.isMDXComponent=!0}}]);
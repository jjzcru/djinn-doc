"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[4234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"use-case",title:"Use Case",sidebar_position:6,custom_edit_url:null},l="Use Case",c={unversionedId:"use-case",id:"use-case",title:"Use Case",description:"This board is not targeted as a replacement for a home assistant like Google Assistant, Siri or Alexa, instead is taking a broader approach to be able to connect any type of devices and being able to control them from a centralized device, in network engineering this is called a Wireless Sensor Network (WSN).",source:"@site/docs/use-cases.md",sourceDirName:".",slug:"/use-case",permalink:"/docs/use-case",editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"use-case",title:"Use Case",sidebar_position:6,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Gateway",permalink:"/docs/djinn-client/gateway"},next:{title:"Reference Frameworks",permalink:"/docs/reference-frameworks"}},u={},h=[{value:"House Control",id:"house-control",level:2},{value:"Environmental Monitoring",id:"environmental-monitoring",level:2},{value:"Health &amp; Medicine",id:"health--medicine",level:2},{value:"Manufacturing",id:"manufacturing",level:2}],p={toc:h};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,"This board is not targeted as a replacement for a home assistant like ",(0,i.kt)("a",{parentName:"p",href:"https://assistant.google.com"},"Google Assistant"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.apple.com/siri/"},"Siri")," or ",(0,i.kt)("a",{parentName:"p",href:"https://developer.amazon.com/en-US/alexa"},"Alexa"),", instead is taking a broader approach to be able to connect any type of devices and being able to control them from a centralized device, in network engineering this is called a ",(0,i.kt)("a",{parentName:"p",href:"https://www.intechopen.com/chapters/38793"},"Wireless Sensor Network (WSN)"),"."),(0,i.kt)("p",null,"If we try to broaden the scope of the use cases toward something more general than just a home, this board is able to talk with different wavebands, sending and receiving signals in a centralized fashion, this kind of behavior is what is called a ",(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/5308112"},"Gateway")," in the context of WSN."),(0,i.kt)("p",null,"Devices like Google Assistant, Siri, or Alexa, are one type of WSN which uses proprietary protocols and integration but they are still WSN gateway none the less, they are built to support a seamless integration in a particular ecosystem, the approach of this project is to enable manufacturers or developers to write their own plugins and integrate them in the gateway without the need to conform to a particular ecosystem."),(0,i.kt)("p",null,"Now with this change in perspective, these are some of the use cases we can achieve with WSN using the board."),(0,i.kt)("h2",{id:"house-control"},"House Control"),(0,i.kt)("p",null,"The mainstream use for this board is to be able to add regular IoT devices like plugs, lights, locks, or sprinkles, and control them from either an app, a desktop, or a browser."),(0,i.kt)("p",null,"There is an ecosystem that uses hubs that serve as a centralized structure to control devices like ",(0,i.kt)("a",{parentName:"p",href:"https://www.ikea.com/us/en/p/tradfri-gateway-white-00337813/"},"IKEA's TR\xc5DFRI")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.philips-hue.com/en-us/p/hue-bridge/046677458478"},"Phillips Hue Bridge"),"."),(0,i.kt)("p",null,"These hubs expose API that enables developers to build an integration that talks with those hubs and expands the possibility to control them, as long as there is a Plug-in that knows how to interact and is registered with this ecosystem a developer has the freedom to build whatever they want on top of the platform and as a user is just a matter of installing the plugin and configure it."),(0,i.kt)("h2",{id:"environmental-monitoring"},"Environmental Monitoring"),(0,i.kt)("p",null,"This board is built to be as agnostic as possible, it only knows that it needs to have an internet connection that could be achieved either by an ethernet cable or by a wifi network, there is nothing that limits the device to only use devices that are manufactured by household companies."),(0,i.kt)("p",null,"As a user, you can buy IoT devices that support are supported by the board (Z-wave, Zigbee, Wifi, Bluetooth), and with a plugin, you could integrate that device into the platform."),(0,i.kt)("p",null,"This could help for monitoring wildlife and natural parks with sensors, and sense the temperature or humidity in agriculture."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For this kind of environment the case for the board would be different, it would be required to have a case with an ",(0,i.kt)("a",{parentName:"p",href:"https://lumascape.com/ip-ratings"},"IP rating")," of at least 65 and an ",(0,i.kt)("a",{parentName:"p",href:"https://lumascape.com/ik-ratings#:~:text=IK%20Ratings%20are%20an%20international,equipment%20against%20external%20mechanical%20impacts."},"IK rating")," that would depend on each particular use case.")),(0,i.kt)("h2",{id:"health--medicine"},"Health & Medicine"),(0,i.kt)("p",null,"The platform has a component called ",(0,i.kt)("inlineCode",{parentName:"p"},"Djinn Cloud CE")," that enables to join multiple boards to centralized components, if you are in a hospital you could have different boards in each wing, and each of this connected to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Djinn Cloud")," instance running on-promise."),(0,i.kt)("p",null,"As a hospital administrator, you don't even need to worry about connecting to the internet and everything could be self-hosted."),(0,i.kt)("p",null,"For small clinics, you could have a single board in the clinic to control the devices and you link the board to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Djinn Cloud EE")," instance and the user would be able to control and monitor the clinic dynamically."),(0,i.kt)("p",null,"Regarding the devices, it would be up to the manufacturer of the devices to have a supported wireless protocol and the plugin implementation to know how it works, but there isn't any restriction that would discourage the usage of health devices."),(0,i.kt)("h2",{id:"manufacturing"},"Manufacturing"),(0,i.kt)("p",null,"The concept of IIoT, (Industrial Internet of Things), is a way to add digital transformation into manufacturing. As long as a device offers control and communicates its state in an understandable, open protocol, there is nothing that limits what an IoT device can do."),(0,i.kt)("p",null,"The article ",(0,i.kt)("a",{parentName:"p",href:"https://www.scnsoft.com/blog/iot-in-manufacturing"},"IoT in Manufacturing: The Ultimate Guide")," describes the adoption of IIoT in manufacturing and the benefits that it provides."),(0,i.kt)("p",null,"There is a consortium dedicated to moving forward with the adoption of IoT in Manufacturing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.iiconsortium.org/"},"Industrial Internet of Things Consortium (IIC)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opcfoundation.org/markets-collaboration/openfog/"},"OpenFog Consortium"))),(0,i.kt)("p",null,"There are already architectures like ",(0,i.kt)("a",{parentName:"p",href:"https://opcfoundation.org/about/opc-technologies/opc-ua/"},"OPC-UA")," which defines a specification on how this could be implemented, there isn't any constraint on how implementation must be executed since they provide an abstraction of how the different pieces fit together."),(0,i.kt)("p",null,"One way to integrate this with the board would be to implement the specification and then use a hub that exposes the API and the board connects to the hub or the other way would be to make the board behave as a Gateway Framework."),(0,i.kt)("p",null,"The proposed Djinn Board architecture is actually based on the Type II Gateway proposed by the book ",(0,i.kt)("a",{parentName:"p",href:"https://library.oapen.org/handle/20.500.12657/22840"},"Demystifying Internet of Things Security"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Type II Gateway",src:n(3847).Z,width:"874",height:"866"})))}d.isMDXComponent=!0},3847:function(e,t,n){t.Z=n.p+"assets/images/type_ii_gateway-dec7296d0e57f2af8f5e817ac32dcd14.png"}}]);
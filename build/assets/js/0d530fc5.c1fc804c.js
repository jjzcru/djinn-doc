"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[1815],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(s,".").concat(c)]||d[c]||h[c]||a;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"platform",title:"Platform",sidebar_position:2,custom_edit_url:null},s="Platform",p={unversionedId:"djinn-board/architecture/platform",id:"djinn-board/architecture/platform",title:"Platform",description:"This part of the architecture is going to handle the communication between the devices and the board, it handle everything that is related to the hardware that is attach to the board, handles plugin integration and also expose a resource definition for the devices and plug-in.",source:"@site/docs/djinn-board/architecture/platform.md",sourceDirName:"djinn-board/architecture",slug:"/djinn-board/architecture/platform",permalink:"/docs/djinn-board/architecture/platform",editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"platform",title:"Platform",sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/djinn-board/installation"},next:{title:"Persistance Layer",permalink:"/docs/djinn-board/architecture/persistance-layer"}},u={},h=[{value:"Hardware",id:"hardware",level:2},{value:"Z-wave",id:"z-wave",level:3},{value:"Zigbee",id:"zigbee",level:3},{value:"Wi-fi",id:"wi-fi",level:3},{value:"Bluetooth",id:"bluetooth",level:3},{value:"Plug-In",id:"plug-in",level:2},{value:"Plug-in Entry point",id:"plug-in-entry-point",level:3},{value:"Configuration file",id:"configuration-file",level:3},{value:"Information file",id:"information-file",level:3},{value:"Notation Examples",id:"notation-examples",level:3},{value:"Controller",id:"controller",level:2}],d={toc:h};function c(e){var n=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platform"},"Platform"),(0,a.kt)("p",null,"This part of the architecture is going to handle the communication between the devices and the board, it handle everything that is related to the hardware that is attach to the board, handles plugin integration and also expose a resource definition for the devices and plug-in."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Platform Diagram",src:t(8939).Z,width:"975",height:"718"})),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,"The board is comes with a wifi and bluetooth chip, we are going to attach a ",(0,a.kt)("a",{parentName:"p",href:"https://www.amazon.com/Gowoops-Protocol-Analyzer-Sniffer-802-15-4/dp/B07P5LY7Z6/ref=sr_1_6?keywords=zigbee%20usb%20adapter&link_code=qs&qid=1582640215&sr=8-6&ref=hackernoon.com"},"Dongle Protocol Analyzer, Zigbee Packet Sniffer")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.amazon.com/Z-Wave-Me-RaZberry2-Plug-Raspberry-frequency/dp/B01M3Q764U"},"z-wave plug-on module"),"."),(0,a.kt)("p",null,"All the plugins have access to the hardware and each of them make their own implementation for whatever protocol they wish to talk."),(0,a.kt)("h3",{id:"z-wave"},"Z-wave"),(0,a.kt)("p",null,"This is module is going handle the integration with the z-wave devices, the board is going to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.amazon.com/Z-Wave-Me-RaZberry2-Plug-Raspberry-frequency/dp/B01M3Q764U"},"z-wave plug-on module"),"."),(0,a.kt)("h3",{id:"zigbee"},"Zigbee"),(0,a.kt)("p",null,"This is a module that handles the integration with the Zigbee devices, the board is going to use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.amazon.com/Gowoops-Protocol-Analyzer-Sniffer-802-15-4/dp/B07P5LY7Z6/ref=sr_1_6?keywords=zigbee%20usb%20adapter&link_code=qs&qid=1582640215&sr=8-6&ref=hackernoon.com"},"Dongle Protocol Analyzer, Zigbee Packet Sniffer"),"."),(0,a.kt)("h3",{id:"wi-fi"},"Wi-fi"),(0,a.kt)("p",null,"This modules handles the integration with wi-fi devices, the raspberry pi 4 comes with a wi-fi module in the board."),(0,a.kt)("h3",{id:"bluetooth"},"Bluetooth"),(0,a.kt)("p",null,"This modules handles the integration with bluetooth devices, the raspberry pi 4 comes with a bluetooth module in the board."),(0,a.kt)("h2",{id:"plug-in"},"Plug-In"),(0,a.kt)("p",null,"This are the hearth and soul of the platform, they are like apps in a phone and are what adds functionality to the board, this are ",(0,a.kt)("a",{parentName:"p",href:"https://eli.thegreenplace.net/2021/plugins-in-go/"},"Go Plugins"),", which are dynamic libraries that run dynamically in the main system."),(0,a.kt)("p",null,"The plugins in Djinn consist on a ",(0,a.kt)("inlineCode",{parentName:"p"},".lamp")," file which is a zip file that includes the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"plugin.so")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config.yml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info.yml"))),(0,a.kt)("h3",{id:"plug-in-entry-point"},"Plug-in Entry point"),(0,a.kt)("p",null,"All the plugins must to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," interface, but they are free to implement this however they want."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This design uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.gridshore.nl/2008/08/09/the-life-cycle-pattern/"},"Lifecycle Pattern")," to describe a common language between the plugins and the controller, and between the plugin and the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Plugin interface {\n    // Lifecycle Methods\n    // Installation Methods: Used by the Gateway when installing the plugin\n    OnBeforeInstall() err\n    OnInstall() err\n    OnAfterInstall() err\n\n    // Execution Methods: Used by the Controller when running the plugin\n    OnBeforeRun() err\n    OnRun() err\n    OnAfterRun() err\n\n    // Event Methods\n    OnDiscover(id string, details string)\n    OnChange(id string, details string)\n    OnError(id string, details string)\n    OnConfigurationChange()\n\n    // Request Methods\n    // Methods that are manually triggered by the user request\n    Configuration(payload string) err\n    Restart() err\n    Subscribe(id string, event chan<- string) err\n    Command(id string, command string, payload string) (string, err)\n    State(id string) (string, err)\n    Register(id string, payload string) (string, err)\n    Discover() (string, err)\n}\n")),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.so")," is the entry point for the plugin, which the ",(0,a.kt)("a",{parentName:"p",href:"#controller"},"Controller")," is going to use to call the different lifecycle methods for running the application and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/djinn-board/architecture/gateway"},"Gateway")," is going to call when installing and validating."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," and the return in ",(0,a.kt)("inlineCode",{parentName:"p"},"GetState")," are ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," strings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="plugin.so"',title:'"plugin.so"'},"package main\n\ntype plugin struct\n\nfunc (p plugin) OnBeforeInstall() err {\n    // Lifecycle method that get's run when the plugin is going to be installed\n}\n\nfunc (p plugin) OnInstall() err {\n    // Lifecycle method when the application is installing\n}\n\nfunc (p plugin) OnAfterInstall() err {\n    // Lifecycle method that get's executed after install (Clean up)\n}\n\nfunc (p plugin) OnBeforeRun() err {\n    // Lifecycle Method that get's executed before the application runs\n}\n\nfunc (p plugin) OnRun() err {\n    // Method that get's execute when the plugin runs\n}\n\nfunc (p plugin) OnAfterRun() err {\n    // Lifecycle methods that get's executed after the application finish running\n}\n\nfunc (p plugin) OnDiscover(id string, details string) {\n    // Listener that get triggered when a new device is discovered\n}\n\nfunc (p plugin) OnChange(id string, details string) {\n    // Listener that get triggered when a device change its state\n}\n\nfunc (p plugin) OnError(id string, err error) {\n    // Listener that gets triggered when an error happened to a device\n}\n\nfunc (p plugin) OnConfigurationChange() {\n    // Listener that gets triggered when the configuration file get's updated\n}\n\nfunc (p plugin) Configuration(payload string) err {\n    // Method that change the existing configuration file\n}\n\nfunc (p plugin) Restart() err {\n    // Method that restart the plugin\n}\n\nfunc (p plugin) Subscribe(id string, event chan<- string) err {\n    // Method that creates a subscription for a device\n}\n\nfunc (p plugin) Command(id string, command string, payload string) (string, err) {\n    // Sends a command to a particular device by it's id\n}\n\nfunc (p plugin) State(id string) (string, err) {\n    // Request the state of a device\n}\n\nfunc (p plugin) Register(id string, payload string) (string, err) {\n    // Register a new device to the board\n}\n\nfunc (p plugin) Discover() (string, err) {\n    // Method that manually triggers a discovery\n}\n\nvar Plugin plugin\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/vladimirvivien/go-plugin-example/blob/master/README.md"},"Go Plugin Example")," explains how the controller and the gateway would load a plugin at runtime")),(0,a.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yml")," stores the properties that the plugin required to run, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt")," addresses."),(0,a.kt)("p",null,"When the user is installing a plugin, Djinn uses this file to request the display of a page where the user can enter the information that the plugin requires, at this point the plugin lives in a temporary path."),(0,a.kt)("p",null,"Once the information is sent and is validated by a subroutine in the plugin, then the plugin source file gets to move to a permanent path and the plugin metadata gets stored in the database."),(0,a.kt)("p",null,"Each property in the configuration file describes what type of input is required and the interface uses this metadata to provide an appropriate input."),(0,a.kt)("p",null,"In the configuration file the section ",(0,a.kt)("inlineCode",{parentName:"p"},"device_type")," describes the different types of devices that the plugin is able to control, their commands and the values required and what are the values of the state and the format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml"',title:'"config.yml"'},'# Configurations required to run the plugin\nconfig:\n  mqqt:\n    type: string\n    title: MQTT\n    description: >\n      MQTT address\n    required: true\n    regex: mqtt:\\/\\/(.)+\n  api_key:\n    type: string\n    required: true\n    title: "Api Key"\n    description: >\n      Phillips Developer Api key\n    length: 45\n  discovery_interval:\n    type: number\n    required: false\n    range: true\n    min_range: 1000\n    max_range: 5000\ndevice_type:\n  # ID of the device type\n  bulb:\n    # Display name of the device in the platform\n    name: "Bulbs"\n    # List of all the commands that are supported by this device type\n    commands:\n      - TURN_ON\n      - TURN_OFF\n      - SET_INTENSITY\n    # Object that describe how the state of the device is represented\n    state:\n      ligth:\n        type: boolean\n      intensity:\n        type: number\n        format: int\n        range: true\n        min_range: 0\n        max_range: 100\n    # Properties required for each command\n    command_payload:\n      TURN_ON:\n        light:\n          type: boolean\n          value: true\n      TURN_OFF:\n        light:\n          type: boolean\n          value: false\n      SET_INTENSITY:\n        intensity:\n          type: number\n          format: int\n  rgb_bulb:\n    name: "RGB Bulbs"\n    commands:\n      - TURN_ON\n      - TURN_OFF\n      - SET_INTENSITY\n      - SET_COLOR\n    state:\n      ligth:\n        type: boolean\n      intensity:\n        type: number\n        format: int\n        range: true\n        min_range: 0\n        max_range: 100\n      color:\n        type: string\n        format: hex\n    command_payload:\n      TURN_ON:\n        light:\n          required: true\n          type: boolean\n          value: true\n      TURN_OFF:\n        light:\n          type: boolean\n          value: false\n      SET_INTENSITY:\n        intensity:\n          type: number\n          format: int\n      SET_COLOR:\n        color:\n          required: true\n          type: string\n          format: hex\n')),(0,a.kt)("h3",{id:"information-file"},"Information file"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"info.yml")," is a file that describes the information of the plugin and the developer, this information is displayed to the user when it's installing the plugin so they know the origin and how to contact them to report bugs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="info.yml"',title:'"info.yml"'},"# Define the version of the plugin\nversion: 2.1\n# Plugin Display name\nname: Phillips Hue\n# Name of the package (using Reverse Domain Name Notation)\npackage: com.phillips.hue.bulbs\n# Short description of the plugin\nabstract: Phillips hue bulbs simple control plugin\n# Long Description of the plugin\ndescription: >\n  Plugin that controls all the bulbs on phillips hue ecosystem\n# URL for the repository of the plugin\nrepository: https://github.com/djinn/hue\n# Plugin website\nwebsite: https://bulbs.hue.phillips.com/support\n# Contact email\nemail: support@hue.phillips.com\n# License\nlicense: ISC\n# Plugin authors\nauthors:\n  - John Doe <jdoe@phillips.com>\n")),(0,a.kt)("p",null,"All the plugins are stored in a volume that is in the operating system that is also shared as a volume in ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s")," in the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/djinn/plugins/"),"."),(0,a.kt)("p",null,"Djinn platform program is going to list all the plugins that exist in the path and load them dynamically, since golang can't unmount or do a hot reload of plugins that are installed every time a plugin is updated or removed ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s")," is going to restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"Djinn platform")," program so the changes are applied."),(0,a.kt)("p",null,"The plugins are going to follow the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reverse_domain_name_notation"},"reverse domain name notation")," for their package name and directory."),(0,a.kt)("h3",{id:"notation-examples"},"Notation Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/djinn/plugins/com.phillips.hue.bulbs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/djinn/plugins/com.phillips.hue.lamps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/djinn/plugins/com.lifx.strips")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/djinn/plugins/com.lifx.bulbs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/djinn/plugins/com.wyze.scale")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/home/djinn/plugins/com.google"))),(0,a.kt)("p",null,"The reason for this naming convention is that it gives the maintainers the flexibility to maintain their plugins in different ways, they can create one big plugin to support all the devices or create different plugins for each product line."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Go plugins only work on Unix-based systems like macOS or Linux, since we are already providing the hardware and the installation this is not going to be an issue since we are using Linux on the board.")),(0,a.kt)("h2",{id:"controller"},"Controller"),(0,a.kt)("p",null,"The controller is a module that handles the communication between the plugins and the rest of the system, once a plugin is installed is going to stores the plugin metadata and configuration into the persistence layer."),(0,a.kt)("p",null,"Each plugin is going to provide a resource definition for the:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The devices that it controls"),(0,a.kt)("li",{parentName:"ul"},"The plugin itself")),(0,a.kt)("p",null,"Additionally to these resources the controller also works as a gatekeeper for other resources that exist within the board like control access and device grouping."))}c.isMDXComponent=!0},8939:function(e,n,t){n.Z=t.p+"assets/images/platform_diagram-ac2f2471709ab5c831f7f5c49f204066.png"}}]);
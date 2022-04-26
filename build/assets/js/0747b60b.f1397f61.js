"use strict";(self.webpackChunkdjinn=self.webpackChunkdjinn||[]).push([[7269],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?i.createElement(g,a(a({ref:t},d),{},{components:n})):i.createElement(g,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,custom_edit_url:null},l="Installation",c={unversionedId:"architecture/djinn-board/installation",id:"architecture/djinn-board/installation",title:"Installation",description:"We already describe that the board is a raspberry pi 4 board which come with an integrated Wi-fi module, that we are going to use to create an access point to which a device is going to connect and then set the credentials required to connect to the user network and other installation requirements.",source:"@site/docs/architecture/djinn-board/installation.md",sourceDirName:"architecture/djinn-board",slug:"/architecture/djinn-board/installation",permalink:"/docs/architecture/djinn-board/installation",editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/djinn-board/overview"},next:{title:"Platform",permalink:"/docs/architecture/djinn-board/architecture/platform"}},d={},u=[{value:"Network Installation",id:"network-installation",level:2},{value:"Wizard",id:"wizard",level:2},{value:"Hostname",id:"hostname",level:3},{value:"Plug-in",id:"plug-in",level:3},{value:"Credentials",id:"credentials",level:3},{value:"Finish",id:"finish",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"We already describe that the board is a raspberry pi 4 board which come with an integrated Wi-fi module, that we are going to use to create an access point to which a device is going to connect and then set the credentials required to connect to the user network and other installation requirements."),(0,o.kt)("h2",{id:"network-installation"},"Network Installation"),(0,o.kt)("p",null,"We are going to use debian as the base image, it will come with ",(0,o.kt)("a",{parentName:"p",href:"https://thekelleys.org.uk/dnsmasq/doc.html"},"dnsmasq")," and ",(0,o.kt)("a",{parentName:"p",href:"https://man.openbsd.org/hostapd.8#:~:text=hostapd%20is%20a%20daemon%20which,points%20in%20large%20wireless%20networks."},"hostapd")," already pre-installed to be able to create the AP, this ",(0,o.kt)("a",{parentName:"p",href:"https://thepi.io/how-to-use-your-raspberry-pi-as-a-wireless-access-point/"},"post")," provide an example on how we are going to achieve that."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user turn on the device it could connect a ethernet connection directly on the device or it could use the Wi-fi network, the difference in the setup is that the user could potentially skip the wi-fi credentials step if the board detect that there is an ethernet connection, otherwise is going to be required to set the wifi credentials.")),(0,o.kt)("h2",{id:"wizard"},"Wizard"),(0,o.kt)("p",null,"Once the board has an stable network connection, the board is going to run an http server on port ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," for the display of a wizard, the host could be ",(0,o.kt)("inlineCode",{parentName:"p"},"djinn.local")," if the host device support ",(0,o.kt)("inlineCode",{parentName:"p"},"mDNS")," which is usually supported in Linux and macOS distribution, the user could also access the server by typing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," assigned by the router."),(0,o.kt)("h3",{id:"hostname"},"Hostname"),(0,o.kt)("p",null,"The wizard is going to request the user for a name for the device, which is going to be name that is going to be used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),", when the user input the value the board is going to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"mDNS")," request to make sure that there is no conflict with other devices in the network, if there is a conflict the device is going to prompt the user to choose another name."),(0,o.kt)("p",null,"Once it's succesfull is going to store the name and go to the next step."),(0,o.kt)("h3",{id:"plug-in"},"Plug-in"),(0,o.kt)("p",null,"Plug-ins are going to be hosted in a centralized repository which are going to be vetted, the wizard is going to display a list of the most popular plugins and also display the plugins that comes with the board."),(0,o.kt)("p",null,"The user would also be able to upload their own plugins by drag and dropping a file with the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".lamp"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},".lamp")," is just a zip file with some metadata and structure")),(0,o.kt)("p",null,"Plug-ins uploaded by the user in the wizard get checked to confirm that the structure is correct, if there is an issue with the structure of the files the board is going to reject the plugin and delete it from the board."),(0,o.kt)("p",null,"All plug-ins in the wizard are only downloaded in the board and not propertly installed, once the setup is finish the user would need to go through all the plugins go through the installation process of each plugin."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the board does not have an internet connection, because the installation is performed with the Wi-fi module alone, then only the pre-installed plugins, and the plug-in uploaded by the user are going to be displayed.")),(0,o.kt)("h3",{id:"credentials"},"Credentials"),(0,o.kt)("p",null,"Now the user is going to be prompted for a username and password that is going to be user to create a super user, in the board there can only be one single super user."),(0,o.kt)("p",null,"The user is also going to be prompted to set a passphrase which is going to be stored as a ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"k3s")," and is going to be use to encrypt and decrypt the data."),(0,o.kt)("h2",{id:"finish"},"Finish"),(0,o.kt)("p",null,"Once the installation is finish the board is going to restart, is going to rename the hostname, if required, and reconnect to the network, then the server is going to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"Web Client")," application that is going to be used to control the board going forward."))}p.isMDXComponent=!0}}]);
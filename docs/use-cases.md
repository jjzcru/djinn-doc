---
id: use-case
title: Use Case
sidebar_position: 6
custom_edit_url: null
---

# Use Case

This board is not targeted as a replacement for a home assistant like [Google Assistant](https://assistant.google.com), [Siri](https://www.apple.com/siri/) or [Alexa](https://developer.amazon.com/en-US/alexa), instead is taking a broader approach to be able to connect any type of devices and being able to control them from a centralized device, in network engineering this is called a [Wireless Sensor Network (WSN)](https://www.intechopen.com/chapters/38793).

If we try to broaden the scope of the use cases toward something more general than just a home, this board is able to talk with different wavebands, sending and receiving signals in a centralized fashion, this kind of behavior is what is called a [Gateway](https://ieeexplore.ieee.org/document/5308112) in the context of WSN.

Devices like Google Assistant, Siri, or Alexa, are one type of WSN which uses proprietary protocols and integration but they are still WSN gateway none the less, they are built to support a seamless integration in a particular ecosystem, the approach of this project is to enable manufacturers or developers to write their own plugins and integrate them in the gateway without the need to conform to a particular ecosystem.

Now with this change in perspective, these are some of the use cases we can achieve with WSN using the board.

## House Control

The mainstream use for this board is to be able to add regular IoT devices like plugs, lights, locks, or sprinkles, and control them from either an app, a desktop, or a browser.

There is an ecosystem that uses hubs that serve as a centralized structure to control devices like [IKEA's TRÅDFRI](https://www.ikea.com/us/en/p/tradfri-gateway-white-00337813/) and [Phillips Hue Bridge](https://www.philips-hue.com/en-us/p/hue-bridge/046677458478).

These hubs expose API that enables developers to build an integration that talks with those hubs and expands the possibility to control them, as long as there is a Plug-in that knows how to interact and is registered with this ecosystem a developer has the freedom to build whatever they want on top of the platform and as a user is just a matter of installing the plugin and configure it.

## Environmental Monitoring

This board is built to be as agnostic as possible, it only knows that it needs to have an internet connection that could be achieved either by an ethernet cable or by a wifi network, there is nothing that limits the device to only use devices that are manufactured by household companies.

As a user, you can buy IoT devices that support are supported by the board (Z-wave, Zigbee, Wifi, Bluetooth), and with a plugin, you could integrate that device into the platform.

This could help for monitoring wildlife and natural parks with sensors, and sense the temperature or humidity in agriculture.

> For this kind of environment the case for the board would be different, it would be required to have a case with an [IP rating](https://lumascape.com/ip-ratings) of at least 65 and an [IK rating](https://lumascape.com/ik-ratings#:~:text=IK%20Ratings%20are%20an%20international,equipment%20against%20external%20mechanical%20impacts.) that would depend on each particular use case.

## Health & Medicine

The platform has a component called `Djinn Cloud CE` that enables to join multiple boards to centralized components, if you are in a hospital you could have different boards in each wing, and each of this connected to a `Djinn Cloud` instance running on-promise.

As a hospital administrator, you don't even need to worry about connecting to the internet and everything could be self-hosted.

For small clinics, you could have a single board in the clinic to control the devices and you link the board to a `Djinn Cloud EE` instance and the user would be able to control and monitor the clinic dynamically.

Regarding the devices, it would be up to the manufacturer of the devices to have a supported wireless protocol and the plugin implementation to know how it works, but there isn't any restriction that would discourage the usage of health devices.

## Manufacturing

The concept of IIoT, (Industrial Internet of Things), is a way to add digital transformation into manufacturing. As long as a device offers control and communicates its state in an understandable, open protocol, there is nothing that limits what an IoT device can do.

The article [IoT in Manufacturing: The Ultimate Guide](https://www.scnsoft.com/blog/iot-in-manufacturing) describes the adoption of IIoT in manufacturing and the benefits that it provides.

There is a consortium dedicated to moving forward with the adoption of IoT in Manufacturing:

- [Industrial Internet of Things Consortium (IIC)](https://www.iiconsortium.org/)
- [OpenFog Consortium](https://opcfoundation.org/markets-collaboration/openfog/)

There are already architectures like [OPC-UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) which defines a specification on how this could be implemented, there isn't any constraint on how implementation must be executed since they provide an abstraction of how the different pieces fit together.

One way to integrate this with the board would be to implement the specification and then use a hub that exposes the API and the board connects to the hub or the other way would be to make the board behave as a Gateway Framework.

The proposed Djinn Board architecture is actually based on the Type II Gateway proposed by the book [Demystifying Internet of Things Security](https://library.oapen.org/handle/20.500.12657/22840).

![Type II Gateway](/img/diagram/type_ii_gateway.png)

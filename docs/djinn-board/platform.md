---
id: platform
title: Platform
sidebar_position: 2
---

# Platform

This part of the architecture is going to handle the communication between the 
devices and the board, it handle everything that is related to the hardware 
that is attach to the board, handles plugin integration and also expose a 
resource definition for the devices and plug-in.

## Hardware
The board is comes with a wifi and bluetooth chip, we are going to attach a 
[Dongle Protocol Analyzer, Zigbee Packet Sniffer](https://www.amazon.com/Gowoops-Protocol-Analyzer-Sniffer-802-15-4/dp/B07P5LY7Z6/ref=sr_1_6?keywords=zigbee%20usb%20adapter&link_code=qs&qid=1582640215&sr=8-6&ref=hackernoon.com) and [z-wave plug-on module](https://www.amazon.com/Z-Wave-Me-RaZberry2-Plug-Raspberry-frequency/dp/B01M3Q764U).

All the plugins have access to the hardware and each of them make their own 
implementation for whatever protocol they wish to talk.

### Z-wave

This is module is going handle the integration with the z-wave devices, the 
board is going to use [z-wave plug-on module](https://www.amazon.com/Z-Wave-Me-RaZberry2-Plug-Raspberry-frequency/dp/B01M3Q764U).

### Zigbee

This is a module that handles the integration with the zigbee devices, the 
board is going to use the [Dongle Protocol Analyzer, Zigbee Packet Sniffer](https://www.amazon.com/Gowoops-Protocol-Analyzer-Sniffer-802-15-4/dp/B07P5LY7Z6/ref=sr_1_6?keywords=zigbee%20usb%20adapter&link_code=qs&qid=1582640215&sr=8-6&ref=hackernoon.com).

### Wi-fi

This modules handles the integration with wi-fi devices, the raspberry pi 4 
comes with a wi-fi module in the board. 

### Bluetooth

This modules handles the integration with bluetooth devices, the raspberry pi 
4 comes with a bluetooth module in the board.

## Protocol Plug-In

This is the hearth and sould of the platform, this are [Go Plugins](https://eli.thegreenplace.net/2021/plugins-in-go/), this are dynamic libraries that get run dinamically at run time.

The plugins in Djinn consist on a `.plugin` file which is a zip file that includes the following files:
- **plugin.so**: Which is the plugin file that we are going to use.
- **config.yml**: Which is configuration file that stores the properties that the plugin required to run, for example `mqtt` addresses.
- **info.yml**: Which is a file that describe the information of the plugin.

All the plugins are stored in a volume that is in the operating system that is also shared as a volume in `k3s` in the path `/home/djinn/plugins/`. 

Djinn platform program is going to list all the plugins that exist in the path and load them dynamically, since golang can't unmount or do a hot reload of plugins that are installed everytime a plugin is updated or removed `k3s` is going to restart the `Djinn platform` program so the changes are applied.

The plugins are going to follow the [reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) for their package name and directory.

### Notation Examples
- `/home/djinn/plugins/com.phillips.hue.bulbs`
- `/home/djinn/plugins/com.phillips.hue.lamps`
- `/home/djinn/plugins/com.lifx.strips`
- `/home/djinn/plugins/com.lifx.bulbs`
- `/home/djinn/plugins/com.wyze.scale` 
- `/home/djinn/plugins/com.google` 

The reason for this naming convention is that it gives the maintainers the flexibility to maintain their plugins in different ways, they can create one big plugin to support all the devices or create different plugins for each product line.


> Go plugins only works on Unix based system like macOS or Linux, since we are already providing the hardware and the installation this is not going to be an issue since we are using Linux in the board.
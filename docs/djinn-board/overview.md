---
sidebar_position: 1
custom_edit_url: null
---

# Overview

This is the architecture for the application that is going to run inside the board, [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/), the raspberry pi is also going to include 2 hardware adapters to support Z-wave and Zigbee.

![Djinn Board Architecture](/img/diagram/djinn_board.png)

This application is going to run on the board, the application is going to use [k3s](https://k3s.io/) to manage the services that run, the reason for this is that `k3s` can handle recovery if crashes, detect liveliness, and scale up if required.

This architecture stores the application configuration in a .yml file that is created by [k3s](https://k3s.io/) and handled by all the services. We are going to use the library [viper](https://github.com/spf13/viper) to parse and handle the changes in the configuration file.

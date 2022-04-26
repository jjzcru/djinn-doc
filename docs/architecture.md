---
id: architecture
title: Architecture
sidebar_position: 3
custom_edit_url: null
---

# Overview

![Djinn Architecture](/img/diagram/djinn_diagram.png)

## [Djinn Board](/docs/djinn-board/overview)

This is the most important component of the architecture, this is a physical device that has all the components required to add IoT devices to the platform, this board can work as a standalone device and doesn't need an internet connection.

The integration with the cloud is optional, if the user doesn't want or need that integration they can just disable the functionality.

## [Djinn Cloud](/docs/djinn-cloud/overview)

This is a component that enables the user to connect to the devices, since the connection between the board and the cloud is initiated by the board, the cloud doesn't need to know what is the address or IP of the board, it just needs to keep the TCP connection alive.

The cloud not only enables users to access the board remotely but it also enables them to have multiple boards and control them from a centralized place, imagine having a home and a beach house, with Djinn cloud you would be able to control these two separate houses.

This cloud comes in two flavors one is an open-source version that only supports single tenancy, and the user would need to host them themself, and the enterprise version which is a proprietary SaaS offering that is built to support multitenancy and is hosted in the cloud.

## [Djin Client](/docs/djinn-client/overview)

These are the interaction between the users and the platforms, these clients can be any program that complies with the application endpoint.

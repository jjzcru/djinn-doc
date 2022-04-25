---
id: architecture
title: Architecture
sidebar_position: 3
custom_edit_url: null
---

# Overview

![Djinn Architecture](/img/diagram/djinn_diagram.png)

## [Djinn Board](/docs/djinn-board/overview)

This is the most important component of the architecture, this is a physical device that has all the components required to add IoT devices into the platform, this board can work as an standalone device and doesn't need an internet connection.

The integration with the cloud is optional, if the user doesn't want or need that integration they can just disable the functionality.

## [Djinn Cloud](/docs/djinn-cloud/overview)

This is a component that enables the user to connect to the devices, since the connection between the board and the cloud is initiated by the board, the cloud doesn't need to know what is the address or IP of the board, it just need to keep the tcp connection alive.

The cloud do not only enable users to access the board remotly but it also enable to have multiple boards and control them from a centralized place, imagine having a home and a beach house, with Djinn cloud you would be able to control this two separate houses.

This cloud comes in two flavors one is an open source version which only supports single tenancy, and the user would need to host them themself and the enterprise version which is a propetary SaaS offering that is build to support multinancy and is hosted in the cloud.

## [Djin Client](/docs/djinn-client/overview)

This are the interaction between the users and the platforms, this clients can be any program that complies with the application endpoint.

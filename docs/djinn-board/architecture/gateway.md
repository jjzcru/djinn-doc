---
id: gateway
title: Gateway
sidebar_position: 5
custom_edit_url: null
---

# Gateway

This is a service that is going to offer a GraphQL API to interact with the application from the outside world, is going to run in the port `5555` and applications can be built on top of the GraphQL.

The reason why it's a GraphQL endpoint instead of REST is that GraphQL offers bidirectional communication and that way the applications built on top of the gateway can receive updates in real-time when a device changes state.

In this layer, there is also a cross-over with the [Protocol Plug-In](/docs/architecture/djinn-board/architecture/platform#protocol-plug-in), and the reason for this is because the plugins need to be installed and verified first before they are formally installed in the system when installing a plugin is going to be stored in a temporary directory and is going to be officially in the system once it's installed properly.

The gateway is going to use the [Authentication Server](/docs/architecture/djinn-board/architecture/authentication-server) to validate the access to the application and also is going to talk with the Resource Server to validate that the user has access to the particular functionality that the user is requesting.

Once the user is authenticated, the Gateway Server is going to validate that the user has access to the particular resource, if it doesn't have access to perform the action the gateway is going to throw an error.

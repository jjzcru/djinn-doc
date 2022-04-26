---
id: web-client
title: Web Client
sidebar_position: 7
custom_edit_url: null
---

# Web Client

This is a web interface that is built in react and runs on top of the Djinn Gateway, it runs on port `80` and port `443` and enables the users to configure and control the Djinn OS from a browser.

This is an application that also exposes a `GraphQL` endpoint to make a request to the gateway, the reason why we are using this instead of [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) is that `GraphQL` has [Subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/), which are implemented as WebSockets in the browser, and that provides bidirectional communication with the server, which is required to listen for events from the devices.

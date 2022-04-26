---
id: event-bus
title: Event Bus
sidebar_position: 4
custom_edit_url: null
---

# Event Bus

In the application all the communication is going to be asynchronous and is going to use a message queue to handle the request, the reason we are doing this is that is easy to scale the application using the asynchronous nature of a publish-subscribe system.

By using a message queue instead of a request-response architecture we do not need to worry to do a handshake for every single request, instead, all the services already have a connection with the queue making the exchange of messages faster and more scalable.

We are going to use [0MQ](https://zeromq.org/) which works as an embeddable networking library and will enable us to use messages to send commands to the controller and also communicate the current state of the application.

Since each module is going to be different processes we are going to use [messages for IPC](https://www.geeksforgeeks.org/ipc-using-message-queues/).

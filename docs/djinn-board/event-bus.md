---
id: event-bus
title: Event Bus
sidebar_position: 4
---

# Event Bus

In the application all the comunication is going to be asynchrounous and is going to use an message queue to handle the request, the reason we are doing this is because is easy to scale the application using the asynchrounous nature of a publish-subscribe system.

By using a message queue instead of a request-response arquitecture we do not need to worry to do a handshake for everysingle request, instead all the services already have a connection with the queue making the exchange of messages faster and more scalable.

We are going to use [0MQ](https://zeromq.org/) which works as an embeddable networking library and will enable to use messages to send commands to the controller and also comunicate the current state of the application.

Since each module is going to be a different processes we are going to use [messages for IPC](https://www.geeksforgeeks.org/ipc-using-message-queues/).
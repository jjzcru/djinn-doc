---
id: reference-frameworks
title: Reference Frameworks
sidebar_position: 5
custom_edit_url: null
---

# Reference Frameworks

The architecture for Djinn 🧞‍♂️, is built using other frameworks as a reference, all of these frameworks provide a framework for the entire infrastructure but their implementation is not feasible unless a tight integration is done, and right now there is a plethora of devices, each using different protocols which are fragmented the market making it more difficult to provide a solution for each device, for this reason, the application chooses the most popular communication protocols and take inspiration on how different frameworks handle different problems.

## OCF Core Specification

Open Connectivity Foundation, OCF, created the OCF Core Specification as a way to describe an abstract Framework for IoT platform, in this framework they create multiple routers for the different types of the sensor network, IP and Non-IP based, while also other services that are provided in the cloud, we took the concept of routing and we put all of them inside the board, they describe that from a node in the network you should be able to translate the message from IP and Non-Ip networks which the Djinn architecture do by using the Platform Module.

OCF also describes a definition for endpoints, which is based on REST, we use the concept of the endpoint but in Djinn we use [gRPC](https://grpc.io/docs/what-is-grpc/introduction/) for the exposing the endpoints, the reason for this is with REST you add overhead by [Marshaling and Unmarshaling](https://squbs.readthedocs.io/en/latest/marshalling/) data, by using [Protocol Buffers](https://developers.google.com/protocol-buffers), Djinn is able to avoid the step of serializing/deserialize making it more performant, it also supports bidirectional communication (required for notification and messaging) and by protecting the transmission channels we can prevent data leaks and limit [Man-in-the-Middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

The resource definition of devices from the OFC framework is used as inspiration for the resource definition model that is used in Djinn.

## OneM2M

One Machine to Machine, OneM2M, is an IoT layered framework that consists of different layers, and the instantiation of this layered is called an entity.

### Application Layer

This is the layer inside a node that controls the logic of the common service layer.

> You can think of the application layer as an operating system and the Common Service Layer as the Kernel.

### Common Service Layer

This is layered that has different modules for services that could be required by the application, this could be communication management, message delivery handling, device management, discovery, group management, etc.

### Network Services layer

This layer handles the configuration of the network.

Djinn takes the approach of CSL by abstracting the services as resources which is the job of the Platform Module, the difference is that in OneM2M the authorization, authentication and device management is centralized in CSL, in Djinn is distributed between the Authentication Server, the Agent and the gateway.

## IIC Architecture

Industrial Internet of Things Consortium, IIC, is an architecture that is focused more on the businesses side, it has a more tide integration than the other architectures because the context in which they are implemented is more in the Supply Chain, Manufacturing, or Enterprise market.

The concept that we use from this model is the separation that they have between edge devices, platform, and access. Djinn shared the same logic with the Edge Gateway in IIC but for a simpler use case, device control, since Djinn only offers device control and management.

Meanwhile, IIC offers other features like device management, data aggregation, data transformation, analytics, rules, and controls, which are functionalities that are outside of the scope of the current architecture model.

IIC is an architecture that is complex and has a different types of sensors, actuators, controllers, and gateway, this complexity, although justified, is against the principle of simplicity that the project tries to follow.

## OPC-UA

Open Platform Communications-Unified Architecture, OPC-UA, is an architecture based on Microsoft [OLE](https://docs.microsoft.com/en-us/cpp/mfc/ole-background?view=msvc-170) technology is an architecture that is target Industrial cases, it's based in a server-client architecture that is tightly integrated to be able to work, instead of building on top of heterogenous open protocols this architecture relies on the fact that both the server and the client are compliant with the architecture.

Djinn's usage of encryption on transit using gRPC is inspired by the `Secure channel layer` concept that is described in OPC-UA.

## DDS

Data Distribution Service, DDS, this is not an IoT framework per-se, is a connectivity framework for process control, they focus on using RPC and topics for the delivery of messages and use a data-centric publish-subscribe (DCPS) approach for the efficient and robust delivery of information.

This approach is used by Djinn by the use of the message queue layer and the decision to use endpoints that support bidirectional communication, gRPC uses the concept of streaming to keep receiving notifications and updates from the devices, and the board can control the message by using a [Pipes and Filter architecture](https://www.linkedin.com/pulse/software-architectural-patterns-pipes-filters-lakmal-kankanamge/), which is build using a combination of the Authentication Layer for access control. The backend used by the website uses a [GraphQL](https://graphql.org/) endpoint that supports [Subscriptions](https://graphql.org/blog/subscriptions-in-graphql-and-relay/) which get implemented as web sockets in the browser.

---
id: reference-frameworks
title: Reference Frameworks
sidebar_position: 5
---

# Reference Frameworks

The architecture for Djinn 🧞‍♂️, is built using other frameworks as a reference, all of these frameworks provide a framework for the entire infrastructure but their implementation is not feasible unless a tight integration is done, and right now there is a plethora of devices, each using different protocols which are fragmented the market making it more difficult to provide a solution for each device, for this reason, the application chooses the most popular communication protocols and take inspiration on how different frameworks handle different problems.

## OCF Core Specification

Open Connectivity Foundation, OCF, created the OCF Core Specification as a way to describe an abstract Framework for IoT platform, in this framework they create multiple routers for the different types of the sensor network, IP and Non-IP based, while also other services that are provided in the cloud, we took the concept of routing and we put all of them inside the board, they describe that from a node in the network you should be able to translate the message from IP and Non-Ip networks which the Djinn architecture do by using the Platform Module.

OCF also describes a definition for endpoints, which is based on REST, we use the concept of the endpoint but in Djinn we use [gRPC](https://grpc.io/docs/what-is-grpc/introduction/) for the exposing the endpoints, the reason for this is with REST you add overhead by [Marshaling and Unmarshaling](https://squbs.readthedocs.io/en/latest/marshalling/) data, by using [Protocol Buffers](https://developers.google.com/protocol-buffers), Djinn is able to avoid the step of serializing/deserialize making it more performant, it also supports bidirectional communication (required for notification and messaging) and by protecting the transmission channels we can prevent data leaks and limit [Man-in-the-Middle attacks]https://en.wikipedia.org/wiki/Man-in-the-middle_attack().

The resource definition of devices from the OFC framework is used as inspiration for the resource definition model that is used in Djinn.

## OneM2M

One Machine to Machine, OneM2M,

## IIC Architecture

Industrial Internet of Things Consortium, IIC,

## OPC-UA

Open Platform Communications-Unified Architecture, OPC-UA,

## DDS

Data Distribution Service, DDS,

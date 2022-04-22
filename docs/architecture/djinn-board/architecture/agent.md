---
id: agent
title: Agent
sidebar_position: 8
custom_edit_url: null
---

# Agent


![Agent Diagram](/img/diagram/agent_diagram.png)

This is a module that will handled the communication with the cloud, it talks with the cloud via [gRPC](https://grpc.io/), which uses [proto buffers](https://developers.google.com/protocol-buffers) underneath.

The motivation to use this is to support a biderectional protocol that is efficient, and can also ensure the implementation of the specification for both client and server.

The Djinn agent can talk to any backend server that supports the specification, the agent can also be disabled if there is no need to sync with a cloud service and communication via de Gateway is more than enough.
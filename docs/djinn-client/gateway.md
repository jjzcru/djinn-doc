---
id: gateway
title: Gateway
sidebar_position: 3
---

# Gateway

The gateway clients are native applications (Android, iOS, macOS, Windows, Linux) that can talk via the gRPC, there is no restriction on how this builds as long as they comply with the gRPC standard.

Is possible for a single application to talk to a local and a cloud instance at the same time.

## Board

These are clients that implement the gRPC API and they only have access to the devices that exist on each board.

## Cloud

These are clients that implement the gRPC API for the cloud instance, this client has access to all the `Homes` that are linked with the Cloud account, they can control each `Home` via the `Agent` service that is running in each board.

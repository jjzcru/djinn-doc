---
id: security-model
title: Security Model
sidebar_position: 4
custom_edit_url: null
---

# Security model

The cloud, as it's name state, is going to be publically available, and is more prone to attacks than the board that lives in a private network.

## Principle of Least Privilege

Same principle as describe in the board

> [Djinn Board - Principle of Least Privilege](/docs/djinn-board/security-model#principle-of-least-privilege)

## Limit the area of attack

The architecture of the cloud is the same as the board.

> [Djinn Board - Principle of Least Privilege](/docs/djinn-board/security-model#limit-the-area-of-attack)

## Isolation

In the board we are using k3s to control the isolation, but in the cloud we have access to more resources, for the cloud we are going to use the official [Kubernetes](https://kubernetes.io/) implementation.

In the **Enterprise Edition** each tenant belongs to a particular namespace, that way they are isolated one from another.

> The rationale for isolation is the same as the one in the board. View [Djinn Board - Isolation](/docs/djinn-board/security-model#isolation)

## Encryption

When the cloud instance is being created it automatically generate a secret key that belong to that instance and is used to encrypt all the data that is stored in the local sqlite database.

It also uses secrets as a way to protect sensitive information, the same way they are controlled in the board.

## Secure endpoints

All the exposed endpoints are required to use SSL, the gateway and the agent both use gRPC, which supports SSL/TLS for authentication, and the web client which exposes a GraphQL version as well run an HTTPS server.

Since in the cloud we have access to more [Certificate Authorities](https://www.ssl.com/faqs/what-is-a-certificate-authority) we are going to use the certificate from one of this CA instead of one that is self generated.

> [](https://www.digitalocean.com/community/tutorials/an-introduction-to-let-s-encrypt) explains how can you get a SSL certificate using [Let's Encrypt](https://letsencrypt.org/)

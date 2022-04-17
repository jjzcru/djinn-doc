---
id: authentication-server
title: Authentication Server
sidebar_position: 6
---

# Authentication Server
This is a OAuth 2.0 server, [build in go](https://hackernoon.com/build-your-own-oauth2-server-in-go-7d0f660732c3), that handles the authentication of the users that wan't to control the board.

It uses the credentials that are store in the Db to validate the credential and also assign access.

The reason we are creating a custom OAuth Server is because it provides access to the IoT devices without the need of a internet connection, also if we only want to control the board from our LAN there is no need to have our credentials stored in the internet.
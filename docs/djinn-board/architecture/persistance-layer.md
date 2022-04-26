---
id: persistance-layer
title: Persistance Layer
sidebar_position: 3
custom_edit_url: null
---

# Persistance Layer

This is the layer that is used to keep a persistent state of the system and is accessed by the Authentication Service, the Gateway, and the platform.

![Persistance Layer Diagram](/img/diagram/persistance_layer.png)

## Database

The database is going to be a [sqlite](https://www.sqlite.org) database, since K3s is handling the resource management, we are going to mount the `SQLite` file into a volume with `k3s` that way we have access to the database outside of K3s as well.

The database is going to store the devices that are linked in the system, this will work as a reference to list all the items of the network and their states and controls.

## Volumes

To keep the persistence of the configuration files outside of the container lifecycle we are going to use [volumes](https://rancher.com/docs/k3s/latest/en/storage/#pvc-yaml), which are going to be created and managed by `k3s`.

> Keeping a copy of the files in the host operating system makes it easier to backup, migrate and restore.

In the volumes we are going to store:

- Plugin configuration files
- Plugin assets
- Board configuration files
- `.sqlite` database file

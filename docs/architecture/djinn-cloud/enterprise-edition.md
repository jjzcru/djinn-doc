---
id: enterprise-edition
title: Enterprise Edition
sidebar_position: 3
custom_edit_url: null
---

# Enterprise Edition

This is the SaaS offering, propertary, where users are able to sign up and create their own cloud of homes, this is build on top of a full fledge kubernetes cluster that supports multinancy by creating a new [Namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) for each customer.

When the user sign up, they add a subdomain for `*.djinn.com` and that's url that is going to use to access that particular instance of the djinn cloud, each instance it's their own stack which is the same archicture that is used by the CE.

> This way to register subdomain is the same approach that slack uses for creating workspaces.

The enterprise edition comes with the same features as the CE plus.

## Technical Support
They get a live chat with an agent that can help them to troubleshoot.

## Device Tagging
This will enable users to easily tag their devices and group them for those tags, like: `lights`, `locks`, `camera`

## Device Grouping
This will enable users to group devices for a particular group, each device can belong to multiple groups.

## Bulk Commands
This will enable to send the same command to multiple devices, as long as those devices are the same type and the same plugin is managing them.

## Notifications
This edition supports to set notifications when certain event's happens.
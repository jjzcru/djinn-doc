---
id: enterprise-edition
title: Enterprise Edition
sidebar_position: 3
custom_edit_url: null
---

# Enterprise Edition

This is the SaaS offering, property, where users are able to sign up and create their own cloud of homes, this is built on top of a full-fledge Kubernetes cluster that supports multi-tenancy by creating a new [Namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) for each customer.

When the user signs up, they add a subdomain for `*.djinn.com` and that's the URL that is going to use to access that particular instance of the djinn cloud, each instance it's its own stack which is the same architecture that is used by the CE.

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

This edition supports setting notifications when certain events happen.

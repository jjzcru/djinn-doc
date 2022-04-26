---
id: resource-model
title: Resource Model
sidebar_position: 9
custom_edit_url: null
---

# Resource Model

A resource model is a unified way to describe the resources that the platform is able to handle, at this point in time the resources are:

- Plugins
- Device Type
- Devices
- Users

## Plugins

Resource model that describe the information of the plugin once it's installed

| Properties    | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| `id`          | Unique identifier (UUID) set by the platform                            |
| `package`     | Unique identifier for the plugin that uses reverse domain name notation |
| `version`     | Version of the plugin                                                   |
| `name`        | Human readable name of the plugin                                       |
| `abstract`    | Short description of the plugin                                         |
| `description` | Long Description of the plugin                                          |
| `repository`  | URL for the repository of the plugin                                    |
| `website`     | Website of the plugin                                                   |
| `email`       | Contact email                                                           |
| `license`     | License of the project                                                  |
| `authors`     | Array of the authors of the plugin                                      |

```json title="/plugins/1fba78c5-4ad9-452f-868f-1f41b64db5f9"
{
  "id": "1fba78c5-4ad9-452f-868f-1f41b64db5f9",
  "package": "com.phillips.hue.bulbs",
  "version": "2.1.0",
  "name": "Phillips Hue",
  "abstract": "Phillips hue bulbs simple control plugin",
  "description": "Plugin that controls all the bulbs on phillips hue ecosystem",
  "repository": "https://github.com/djinn/hue",
  "website": "https://bulbs.hue.phillips.com/support",
  "email": "support@hue.phillips.com",
  "license": "MIT",
  "authors": [
    {
      "name": "John Doe",
      "email": "jdoe@phillips.com"
    }
  ]
}
```

## Device Type

Resource that describe the type of devices that are supported by the platform, the device type are associated to a plugin to map out which plugin can handle that device, it also

| Properties   | Description                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| `id`         | Unique identifier for the device in the platform                                                         |
| `type`       | Identifier for the type of device                                                                        |
| `plugin`     | Identifier of the plugin that controls this type of device                                               |
| `name`       | Human readable name for the device type                                                                  |
| `properties` | Key value property that describe what are the attributes that expose the state of the device             |
| `commands`   | Key value property that describes the commands that are available and the commands that they can request |

```json title="/types/1fba78c5-4ad9-452f-868f-1f41b64db5f9"
{
  "id": "1fba78c5-4ad9-452f-868f-1f41b64db5f9",
  "name": "RGB Bulb",
  "type": "rgb_bulb",
  "properties": {
    "light": {
      "type": "boolean"
    },
    "intensity": {
      "type": "number",
      "format": "int",
      "range": {
        "min": 0,
        "max": 100,
        "enabled": true
      }
    },
    "temperature": {
      "type": "number",
      "format": "float",
      "units": "C"
    }
  },
  "commands": {
    "TURN_ON": {
      "arguments": {
        "light": {
          "type": "boolean"
        }
      },
      "response": {
        "light": {
          "type": "boolean"
        }
      }
    },
    "GET_TEMPERATURE": {
      "arguments": null,
      "response": {
        "temperature": {
          "type": "number",
          "format": "float",
          "units": "C"
        }
      }
    }
  }
}
```

## Device

Resource model for a device

| Properties | Description                                      |
| ---------- | ------------------------------------------------ |
| `id`       | Unique identifier for the device in the platform |
| `name`     | Human readable device name                       |
| `type`     | Identifier for the device type                   |
| `state`    | Current state of the device                      |

```json title="/devices/1fba78c5-4ad9-452f-868f-1f41b64db5f9"
{
  "id": "1fba78c5-4ad9-452f-868f-1f41b64db5f9",
  "name": "Name",
  "type": "1fba78c5-4ad9-452f-868f-1f41b64db5f6",
  "state": {
    "light": {
      "value": true
    },
    "temperature": {
      "value": 100,
      "unit": "C"
    }
  }
}
```

## Users

Resource model for the user

| Properties | Description                                      |
| ---------- | ------------------------------------------------ |
| `id`       | Unique identifier for the device in the platform |
| `name`     | Name of the user                                 |
| `username` | Username of the user                             |
| `email`    | Contact email of the user                        |

```json title="/users/1fba78c5-4ad9-452f-868f-1f41b64db5f9"
{
  "id": "1fba78c5-4ad9-452f-868f-1f41b64db5f9",
  "name": "John Doe",
  "username": "johndoe",
  "email": "jdoe@exmaple.com"
}
```

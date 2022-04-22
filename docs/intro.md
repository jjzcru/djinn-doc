---
sidebar_position: 1
custom_edit_url: null
---

# Introduction

Djinn is a framework model that enables customers to add IoT to the framework platform, while also providing an access model and distributed access.

You can imagine Djinn as another platform like Alexa o Apple Home, but using custom protocols by using being extensible, there are other platforms like Home Assistant that have the flexibility to add more IoT devices but they don't have support for control of multiple spaces as a single platform.

The goal is that users would be able to buy one or multiple boards and connect them to centralized entities in which they would be able to control them remotely, while also being able to control them locally if they are in the same network, _to remove the dependency of a missing internet connection_.

## Principles

This are four principles that serve as guidelines for developing the project:

- Simplicity
- Security
- Extensibility
- Aesthetics

### Simplicity

> Simplicity is the ultimate sophistication
>
> > Leonardo da Vinci

The goal of this product is to be simple to use, someone who is not technically savvy should be able to use the application and configure it, the same way they use other platforms.

Complex products are really easy to do, you just keep adding stuff, but this increases the cognitive load on the user, achieving simplicity is way harder, you need to empathize with the user, understand the problem and try to do as much for them as possible.

For this reason, we try to `guess` what the user is trying to do like using discovery protocols, like [mDNS](https://www.ionos.com/digitalguide/server/know-how/multicast-dns/), to locate services.

### Security

In IoT you have devices that are tracking the environment while also changing them, this information is sensitive, either in an industrial setting or a personal home environment.

For this reason, there is a security model for the board and the cloud to protect the data, while in transit and at storage.

### Extensibility

The hearth and soul of the board is the plugin layer, this is what enables the board to talk to the hardware while also standardizing the way that we describe the properties of the devices and the type of control we can perform on them.

### Aesthetics

> Good design is Aesthetic
>
> > Dieter Rams

One of the [Ten Principles of Good Design](https://designsojourn.com/dieter-rams-and-his-10-design-commandments/), by Dieter Rams, explains that the quality of a product is integral to its usefulness, because aesthetic products affect the mood of the owner and it's well being, only well-executed objects can be beautiful.

The paper [The Consequences of Beautiful Products: Sacredness, Awe and Forgiveness](https://faculty.wharton.upenn.edu/wp-content/uploads/2018/01/Consequences-of-Beautiful-Products_Final.pdf) describes that the way a product looks play a big role on how that product is perceived, it doesn't only evoke the need to be owned but it also increases the likelihood to be forgiven by the owners if something goes wrong, _like a bug_.

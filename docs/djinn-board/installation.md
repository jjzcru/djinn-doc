---
sidebar_position: 2
---

# Installation

We already describe that the board is a raspberry pi 4 board which come with an integrated Wi-fi module, that we are going to use to create an access point to which a device is going to connect and then set the credentials required to connect to the user network and other installation requirements.

## Network Installation

We are going to use debian as the base image, it will come with [dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html) and [hostapd](https://man.openbsd.org/hostapd.8#:~:text=hostapd%20is%20a%20daemon%20which,points%20in%20large%20wireless%20networks.) already pre-installed to be able to create the AP, this [post](https://thepi.io/how-to-use-your-raspberry-pi-as-a-wireless-access-point/) provide an example on how we are going to achieve that.

> When the user turn on the device it could connect a ethernet connection directly on the device or it could use the Wi-fi network, the difference in the setup is that the user could potentially skip the wi-fi credentials step if the board detect that there is an ethernet connection, otherwise is going to be required to set the wifi credentials.

## Installation Wizard
Once the board has an stable network connection, the board is going to run an http server on port `80` for the display of a wizard, the host could be `djinn.local` if the host device support `mDNS` which is usually supported in Linux and macOS distribution, the user could also access the server by typing the `ip` assigned by the router.

### Hostname

The wizard is going to request the user for a name for the device, which is going to be name that is going to be used for the `hostname`, when the user input the value the board is going to make a `mDNS` request to make sure that there is no conflict with other devices in the network, if there is a conflict the device is going to prompt the user to choose another name.

Once it's succesfull is going to store the name and go to the next step.

### Plug-in
Plug-ins are going to be hosted in a centralized repository which are going to be vetted, the wizard is going to display a list of the most popular plugins and also display the plugins that comes with the board.

The user would also be able to upload their own plugins by drag and dropping a file with the extension `.plugin`.

> The `.plugin` is just a zip file with some metadata and structure

Plug-ins uploaded by the user in the wizard get checked to confirm that the structure is correct, if there is an issue with the structure of the files the board is going to reject the plugin and delete it from the board.

All plug-ins in the wizard are only downloaded in the board and not propertly installed, once the setup is finish the user would need to go through all the plugins go through the installation process of each plugin.

> If the board does not have an internet connection, because the installation is performed with the Wi-fi module alone, then only the pre-installed plugins, and the plug-in uploaded by the user are going to be displayed.

### Credentials
Now the user is going to be prompted for a username and password that is going to be user to create a super user, in the board there can only be one single super user.

The user is also going to be prompted to set a passphrase which is going to be stored as a `secret` in `k3s` and is going to be use to encrypt and decrypt the data.


## Finish
Once the installation is finish the board is going to restart, is going to rename the hostname, if required, and reconnect to the network, then the server is going to start the `Web Client` application that is going to be used to control the board going forward.
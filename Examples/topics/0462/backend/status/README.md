# Backend status

## Subscriber: 
device

## Publisher: 
backend

## QOS 
Quality of service is exactly once (2).

## Retain
The MQTT broker will retain the messages (true).

## Online Description
When the backend comes online it will publish a online message in the status channel. 

The device must upon recieving a online message announce itself in the hello channel.

## Offline Description
If the backend becomes unavailable for some reason, the MQTT broker will publish a offline message in the status channel.

If the backend goes offline the device should stop detecting customers and publish a online message to its own status channel.
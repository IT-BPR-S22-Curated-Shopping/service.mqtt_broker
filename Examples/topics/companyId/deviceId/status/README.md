# Device status

## Subscriber: 
backend

## Publisher: 
device

## QOS 
Quality of service should be at most once (0).

## Retain
The MQTT broker should not retain the messages (false).

## Online description
Whenever a divice comes online it must publish a online message as the first thing in its own status channel. 

Like wise if the backend goes offline the device should stop detecting customers and publish a online message.

## Ready description
After having recieved a ready command form the backend the device must prepare itself for detecting customers and publish a ready message in its own status channel.

## Active description 
When a device changes state to detecting customers it must publish a active message in its own status channel.
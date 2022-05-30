# Device error

## Subscriber: 
device

## Publisher: 
backend

## QOS 
Quality of service is at most once (0).

## Retain
The MQTT broker does not retain the messages (false).

## Description
If an error occurs on the server-side, an error message will be published to the device error channel. The message will contain a timestamp and a message in a combined string. 

The following will cause errors:
* Incorrect or empty payload 
* Incorrect topic structure 
* Duplicate deviceId - device ids must be globally unique.

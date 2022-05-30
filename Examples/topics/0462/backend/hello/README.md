# Backend hello

## Subscriber: 
Backend

## Publisher: 
device

## QOS 
Quality of service should be at most once (0).

## Retain
The MQTT broker must not retain the messages (false).

## Description
When a device comes online it must announce itself in the hello channel by publishing a hello message. 

The backend will then register the device in the system, if it is not already. 

If success the backend will subscribe to the following device channels
* detection
* status
* telemetry

Then it will publish a ready message in the device command channel.

If not successful, the backed will publish a error message in the device error channel.

See device topics for channel payload structure.

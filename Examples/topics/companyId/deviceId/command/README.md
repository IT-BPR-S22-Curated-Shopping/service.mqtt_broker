# Device command

## Subscriber: 
device

## Publisher: 
backend

## QOS 
Quality of service is at most once (0).

## Retain
The MQTT broker does not retain the messages (false).

## Ready description
When the backend has subscribed to the relevant device topics is will publish a Ready message in the command channel to let the device know it is subscribed to. 

The Device must then publish a ready message in its status channel when ready to detect customers.

## Activate description
When and if a device is configured to a location in the system, and it has announced ready, the backend will publish an activate message in the device command channel.

The device can now start and publish detections.

## Deactivate description
If a device is active and removed from a location in the system, the backend will publish a deactivate message in the device command channel.

The device should stop detecting and return to its ready state.

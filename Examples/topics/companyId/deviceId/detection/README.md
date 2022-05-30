# Device detections

## Subscriber: 
backend

## Publisher: 
device

## QOS 
Quality of service should be at most once (0).

## Retain
The MQTT broker should not retain the messages (false).

## Description 
Whenever a device detects a customer, it must publish a detection message containing:
* UTC epoch timestamp of detection.
* UUID of the customer detected.
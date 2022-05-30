# MQTT Broker

HiveMQ Cloud hosted on Azure is used as API between the backend service and the identification devices.

## Connection
See examples/clients.

## Topics
For description and payload content see examples/topics.

topic | subscriber | publisher 
--- | --- | --- 
0462/backend/hello | backend | device
0462/backend/status | device | backend
companyId/deviceId/status | backend | device
companyId/deviceId/telemetry | backend | device
companyId/deviceId/detection | backend | device
companyId/deviceId/command | device | backend
companyId/deviceId/error | device | backend


## QoS description

https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/

## Retain flag description

https://www.hivemq.com/blog/mqtt-essentials-part-8-retained-messages/

## Monitor Activity
https://websocketclient.hivemq.cloud/?username=app_monitor&host=637b798f8004424f8503cda3e53851b9.s2.eu.hivemq.cloud&port=8884

Enter password and connect.


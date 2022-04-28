# MQTT Broker

HiveMQ Cloud hosted on Azure is used as API between the backend service and the identification devices.

## Connection
See Examples.

## Topics

## Topics

- companyId/deviceId/
    - status
    - telemetry 
    - detection 

### Detection Payload Example

```
{
  "uuid": "010D2108-0462-4F97-BAB8-000000000002",
  "major": 2,
  "minor": 0,
  "mac": "41:62:47:29:93:2d",
  "time": 1651140793666,
  "updated": 1651140831334,
  "rssi": -64.07905794297476,
  "distance": "4.02",
  "observations": [
    -64.71625183479372,
    -63.98224398108878,
    -64.07905794297476
  ]
}
```

## Monitor Activity
https://websocketclient.hivemq.cloud/?username=app_monitor&host=637b798f8004424f8503cda3e53851b9.s2.eu.hivemq.cloud&port=8884

Enter password and connect.

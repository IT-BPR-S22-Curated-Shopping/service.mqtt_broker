# MQTT Broker

HiveMQ Cloud hosted on Azure is used as API between the backend service and the identification devices.

## Connection
See Examples.


## Topics

- companyId/deviceId/
    - status
    - telemetry 
    - detection 

### Status Payload
The status topic will hold the device connection state.

Values:
- ONLINE
- OFFLINE

OFFLINE is set by MQTT broker via last will:

```
will: {
    topic: 'companyId/deviceId/status',
    payload: 'OFFLINE',
    qos: 2,
    retain: true
}
```

### Telemetry Payload
The telemetry topic will contain device specific data wrapped in the format:

```
{
    level: telemetryLevel,
    message: "string"
}
```

With telemetry levels:
```
{
    info: "info",
    warning: "warning",
    error: "error"
}
```

### Detection Payload
The detection topic will contain payloads of detected uuids with timestamp.

```
{
  "uuid": "010D2108-0462-4F97-BAB8-000000000002",
  "time": 1651140793666
}
```

## Monitor Activity
https://websocketclient.hivemq.cloud/?username=app_monitor&host=637b798f8004424f8503cda3e53851b9.s2.eu.hivemq.cloud&port=8884

Enter password and connect.

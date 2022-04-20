var mqtt = require('mqtt')

var options = {
    host: '637b798f8004424f8503cda3e53851b9.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'app_ble',
    password: '<your-password>'
}

//initialize the MQTT client
var client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');
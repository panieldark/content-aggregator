const Kafka = require("kafkajs").Kafka
const msg = process.argv[2];
const Partitioners = require("kafkajs").Partitioners

run();
async function run(){
try {
    // first thing when connecting with a broker: establish a TCP connection
    const kafka = new Kafka({
        "clientId": "myapp",
        "brokers": ["localhost:9092"]
    })

    const producer = kafka.producer({
        "createPartitioner": Partitioners.LegacyPartitioner
    });
    
    console.log("Connecting...")
    await producer.connect();
    console.log("Connected!")

    const partition = msg[0] < "N" ? 0 : 1;
    const result = await producer.send({
        "topic": "Users",
        "messages": [
            {
                "value": msg,
                "partition": partition
            }
        ]
    })
    console.log(`Produced message!: ${JSON.stringify(result)}`)
    await producer.disconnect();
}
catch(ex) {
    console.error(`ERROR: ${ex}`)
}
finally {
    process.exit(0);
}
}
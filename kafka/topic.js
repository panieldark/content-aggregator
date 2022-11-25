const Kafka = require("kafkajs").Kafka

run();

async function run(){
try {
    // first thing when connecting with a broker: establish a TCP connection
    const kafka = new Kafka({
        "clientId": "myapp",
        "brokers": ["localhost:9092"]
    })

    const admin = kafka.admin();
    
    console.log("Connecting...")
    await admin.connect();
    console.log("Connected!")

    // topic partitions: A-M, N-Z
    await admin.createTopics({
        "topics": [{
            "topic": "Users",
            "numPartitions": 2
        }]
    })
    console.log("Created topics successfully!")
    await admin.disconnect();
}
catch(ex) {
    console.error(`ERROR: ${ex}`)
}
    process.exit(0);
}
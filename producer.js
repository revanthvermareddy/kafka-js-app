const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  console.log("Connecting Producer...");
  await producer.connect();
  console.log("Producer Connected Successfully...");

  const topicName = "rider-updates";
  await producer.send({
    topic: topicName,
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({
          name: "Tony Stark",
          loc: "Hyderabad",
        }),
      },
    ],
  });

  await producer.disconnect();
}

init();

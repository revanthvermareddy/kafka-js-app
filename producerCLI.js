const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const topicName = "rider-updates";

async function init() {
  const producer = kafka.producer();
  console.log("Connecting Producer...");
  await producer.connect();
  console.log("Producer Connected Successfully...");

  rl.setPrompt(">");
  rl.prompt();

  rl.on("line", async function (line) {
    const [riderName, location] = line.split(" ");

    await producer.send({
      topic: topicName,
      messages: [
        {
          partition: location.toLowerCase() === "south" ? 1 : 0,
          key: "location-update",
          value: JSON.stringify({
            name: riderName,
            loc: location,
          }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();

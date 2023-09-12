const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Connecting Admin...");
  await admin.connect();
  console.log("Admin Connected Successfully...");

  const topicName = "rider-updates";
  console.log(`Creating Topic [${topicName}]`);
  await admin.createTopics({
    topics: [
      {
        topic: topicName,
        numPartitions: 2,
        replicationFactor: 1,
      },
    ],
  });
  console.log(`Topic Created Success [${topicName}]`);

  console.log("Disconnecting Admin...");
  await admin.disconnect();
}

init();

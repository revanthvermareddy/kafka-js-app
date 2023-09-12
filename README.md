## To run the kafka broker:

Run the below command to start the kafka broker on local machine

```
docker-compose up -d --build
```

Run the below command to stop the kafka broker on local machine

```
docker-compose down
```

## To setup:

Run the below command to do the topics setup on kafka broker

```
node admin.js
```

## To produce messages:

Run the below command to post messages onto a kafka topic using producer client

```
node producer.js
```

## To consume messages:

Run the below command to consume messages from a kafka topic using consumer client

```
node consumer.js
```

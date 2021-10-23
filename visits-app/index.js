const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
//Because of using docker-compose we only need to specify the name of docker-container for host and default port
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0)
  client.get("visits", (err, visits) => {
    res.send("Number of visits " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});

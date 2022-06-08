const express = require("express");
var bunyan = require("bunyan");
var log = bunyan.createLogger({ name: "Todo App" });
const app = express();

const mongoose = require("mongoose");

main()
  .then(() => log.info("Connected")) // If main successfull
  .catch((err) => log.error(err)); // If main unsuccessfull

async function main() {
  await mongoose.connect(
    "mongodb+srv://piyush:piyush321@cluster0.4rbj9pt.mongodb.net/?retryWrites=true&w=majority"
  );
}

app.get("/", (req, res) => {
  res.json({ name: "Piyush", age: 16 });
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});

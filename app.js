const express = require("express");
const bunyan = require("bunyan");
const cors = require("cors");
const log = bunyan.createLogger({ name: "Todo App" });
const Todo = require("./models/todo.model");
const app = express();

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

main()
  .then(() => log.info("Connected")) // If main successfull
  .catch((err) => log.error(err)); // If main unsuccessfull

async function main() {
  await mongoose.connect(
    "mongodb+srv://piyush:piyush321@cluster0.4rbj9pt.mongodb.net/?retryWrites=true&w=majority"
  );
}

// Read
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  if (!todos) {
    res.status(400).send("Not Found any Todos");
  }
  res.json(todos);
});

// Create
app.post("/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save();
  // console.dir(req.body);
  res.send(newTodo);
});

// Delete
app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.json(todo);
  } catch (err) {
    log.error(err);
    res.send("Can't Delete");
  }
});

// Update
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    res.send(data);
    // const todo = await Todo.findByIdAndUpdate()
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log(`Server started on port 5000`);
});

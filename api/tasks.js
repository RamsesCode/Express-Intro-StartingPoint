const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
  // res.status(501).send("Not implemented");
  const alltask = Task.findAll();
  if (!alltask) {
    return res.status(404).send("Server is not Working!");
  }
  res.status(200).send(alltask);
});

// GET a single task by id
router.get("/:id", (req, res) => {

  const id = Number(req.params.id);
  const singleTask = Task.findByPk(id);
  if (!singleTask) {
    return res.status(404).send("Task not found!");
  }
  res.status(200).send(singleTask);
})

// Patch a task by id
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const update = Task.update(id, req.body);
  res.send(update);
});

// Delete a task by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  try {
    Task.delete(id);
    res.send({ sucess: true })
  } catch (Error) {
    res.status(400).send({ error: "Task not found" })
  }
})

// Create a new task

router.post("/", (req, res) => {
  const newTask = Task.create(req.body);
  res.send(newTask);
});

module.exports = router;

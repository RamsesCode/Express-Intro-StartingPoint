const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const allTasks = Task.findAll()
  res.send(allTasks);
});

// GET a single task by id
router.get("/:id", (req, res)=>{
  const id = Number(req.params.id);
  const singleTask = Task.findByPk(id);
  res.send(singleTask);
})

// Patch a task by id

// Delete a task by id

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  try {
    Task.delete(id);
    res.send({ success: true });
  } catch (error) {
    res.status(404).send({ error: "Task not found" });
  }
});

// Create a new task

router.post("/", (req, res) => {
  const newTask = Task.create(req.body);
  res.send(newTask); 
});

module.exports = router;

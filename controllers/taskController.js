/*
=================================================
taskController.js
Contains business logic
=================================================
*/

const { getRequestBody } = require("../utils/helpers");

/*
In-memory database
*/
let tasks = [];

/*
Generate unique ID
*/
const generateId = () => {
  return Date.now();
};

/*
GET /tasks
*/
const getAllTasks = (req, res) => {

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(tasks));
};

/*
GET /tasks/:id
*/
const getTaskById = (req, res, id) => {

  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    res.writeHead(404);

    return res.end(
      JSON.stringify({
        message: "Task not found"
      })
    );
  }

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(task));
};

/*
POST /tasks
*/
const createTask = async (req, res) => {

  try {

    const body = await getRequestBody(req);

    if (!body.title) {

      res.writeHead(400);

      return res.end(
        JSON.stringify({
          message: "Title is required"
        })
      );
    }

    const newTask = {
      id: generateId(),
      title: body.title,
      completed: body.completed || false
    };

    tasks.push(newTask);

    res.writeHead(201, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(newTask));

  } catch (error) {

    res.writeHead(400);

    res.end(
      JSON.stringify({
        message: "Invalid JSON"
      })
    );
  }
};

/*
PUT /tasks/:id
*/
const updateTask = async (req, res, id) => {

  const index = tasks.findIndex(
    task => task.id === Number(id)
  );

  if (index === -1) {

    res.writeHead(404);

    return res.end(
      JSON.stringify({
        message: "Task not found"
      })
    );
  }

  try {

    const body = await getRequestBody(req);

    tasks[index] = {
      ...tasks[index],
      title: body.title ?? tasks[index].title,
      completed:
        body.completed ?? tasks[index].completed
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(tasks[index]));

  } catch (error) {

    res.writeHead(400);

    res.end(
      JSON.stringify({
        message: "Invalid JSON"
      })
    );
  }
};

/*
DELETE /tasks/:id
*/
const deleteTask = (req, res, id) => {

  const index = tasks.findIndex(
    task => task.id === Number(id)
  );

  if (index === -1) {

    res.writeHead(404);

    return res.end(
      JSON.stringify({
        message: "Task not found"
      })
    );
  }

  tasks.splice(index, 1);

  res.writeHead(200);

  res.end(
    JSON.stringify({
      message: "Task deleted successfully"
    })
  );
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
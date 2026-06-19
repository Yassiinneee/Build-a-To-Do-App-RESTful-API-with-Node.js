/*
=================================================
taskRoutes.js
Responsible for route handling
=================================================
*/

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const taskRoutes = (req, res) => {

  /*
  Modern URL parsing
  Replaces deprecated url.parse()
  */
  const parsedUrl = new URL(
    req.url,
    `http://${req.headers.host}`
  );

  const path = parsedUrl.pathname;

  /*
  GET /tasks
  */
  if (
    path === "/tasks" &&
    req.method === "GET"
  ) {
    return getAllTasks(req, res);
  }

  /*
  POST /tasks
  */
  if (
    path === "/tasks" &&
    req.method === "POST"
  ) {
    return createTask(req, res);
  }

  /*
  Dynamic route
  Example:
  /tasks/123
  */
  const taskIdMatch =
    path.match(/^\/tasks\/(\d+)$/);

  if (taskIdMatch) {

    const id = taskIdMatch[1];

    /*
    GET /tasks/:id
    */
    if (req.method === "GET") {
      return getTaskById(req, res, id);
    }

    /*
    PUT /tasks/:id
    */
    if (req.method === "PUT") {
      return updateTask(req, res, id);
    }

    /*
    DELETE /tasks/:id
    */
    if (req.method === "DELETE") {
      return deleteTask(req, res, id);
    }
  }

  /*
  Route not found
  */
  res.writeHead(404, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      message: "Route not found"
    })
  );
};

module.exports = taskRoutes;
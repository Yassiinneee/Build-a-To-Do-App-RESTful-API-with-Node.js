/*
=================================================
server.js
Main entry point of the application
=================================================
*/

const http = require("http");
const taskRoutes = require("./routes/taskRoutes");

// Create HTTP server
const server = http.createServer((req, res) => {
  taskRoutes(req, res);
});

// Server port
const PORT = 5000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
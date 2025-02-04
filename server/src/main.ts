// Load environment variables from .env file
import "dotenv/config";
import type { RequestHandler } from "express";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

// Get the port from the environment variables
const port = process.env.APP_PORT;
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};
app.get("/", sayWelcome);
// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });

const express = require("express");
const cors = require("cors");
const notes_routes = require("./routes/notes.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/notes", notes_routes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}!`);
});

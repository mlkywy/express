const pool = require("../database.js");

// Get all notes.
const getNotes = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes");

    if (result.rowCount == 0) {
      res.status(404).json({ message: "There are no notes." });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a note based on ID.
const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM notes WHERE note_id = $1", [
      id,
    ]);

    if (result.rowCount == 0) {
      res.status(404).json({
        message: `A note with the specified ID (${id}) does not exist.`,
      });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Create a note with a title and description.
const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO notes (title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update note based on ID.
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE notes SET title = $1, description = $2 WHERE note_id = $3",
      [title, description, id]
    );

    if (result.rowCount == 0) {
      res.status(404).json({
        message: `A note with the specified ID (${id}) does not exist.`,
      });
    } else {
      res.status(200).json({
        message: `The note with the specified ID (${id}) has been updated.`,
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a note based on ID.
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM notes WHERE note_id = $1", [
      id,
    ]);

    if (result.rowCount == 0) {
      res.status(404).json({
        message: `A note with the specified ID (${id}) does not exist.`,
      });
    } else {
      res.status(200).json({
        message: `The note with the specified ID (${id}) has been deleted.`,
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};

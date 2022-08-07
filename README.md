# express notes

## About

A note-taking app.

### Built With

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Environment Variables

The .env file in the server directory should follow this basic format:

```env
NODE_ENV=development
PORT=5000
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
DB_PORT=5432
DATABASE=notesdb
```

### Database Setup

In order to run and view the server locally, you must create and setup a PostgreSQL database. You may be prompted to enter the password you set when you installed PostgreSQL.

```
psql -U postgres
```

To see a list of your databases:

```
\l
```

If you have not yet created a notes database, enter the following SQL code in your terminal:

```sql
CREATE DATABASE notesdb;
```

To enter the database and see your tables:

```
\c notesdb
\dt
```

If you have not yet created a notes table, enter the following SQL code in your terminal:

```sql
CREATE TABLE notes(
    note_id SERIAL PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

To view all notes in your table:

```sql
SELECT * FROM notes;
```

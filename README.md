# Chu-Do List

Authors:
    
Seth Leander L. Caballero

Ryona Cassandra P. Honrado

## Overview
Hello, World! Chu-Do List is a simple and light-weight to-do list web application for you and for me and for the entire human race!

### Tech Stack
Our chosen tech stack is:
- HTML
- CSS
- JavaScript
- Flask (Python)
- SQLite (Database)

We chose this tech stack because it fits the scale of this lab. The entire request can be traced end-to-end — from a button click, through `fetch()`, through a Flask route, to raw SQL, and then back, without any ORM or framework abstraction obscuring what's actually happening. This transparency made debugging and understanding our own code straightforward throughout development.

This stack also had a low learning curve for us: we already had experience with HTML, CSS, and JavaScript; SQLite's SQL syntax is similar to MySQL, which we were already familiar with; and Flask, being Python-based, let us focus on learning the framework itself rather than a new language at the same time.

## How to Run the App Locally

### Prerequisites
- Python 3.13 (or compatible 3.x) installed
- Git (to clone the repo)

### Setup

1. **Clone the repository**
   ```powershell
   git clone <repo-url>
   cd cmsc128-Lab1_CRUD_caballero_honrado
   ```

2. **Create and activate a virtual environment**
   ```powershell
   py -3.13 -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
   If PowerShell blocks the activation script with an execution policy error, run this once per session first:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```

3. **Install dependencies**
   ```powershell
   pip install -r requirements.txt
   ```
4. **Run the app**
   ```powershell
   cd backend
   python app.py
   ```
   On first run, this automatically creates `tasks.db` in the `backend/` folder with the required schema — no manual database setup needed, since SQLite ships with Python's standard library.

5. **Open the app**

   Visit `http://127.0.0.1:5000/` in your browser.

### Notes
- `tasks.db` and `venv/` are excluded from version control (`.gitignore`) — each developer has their own local database file.
- The server runs with `debug=True` for local development, enabling auto-reload on file changes and detailed error tracebacks.

---

## API Endpoints (CRUD Operations)

All endpoints are served locally at `http://127.0.0.1:5000`.

### `GET /tasks`
Returns all tasks currently stored in the database.

**Response** — `200 OK`
```json
[
    {
        "id": 1,
        "title": "Buy milk",
        "due_datetime": "2026-09-10T10:00",
        "priority": 1,
        "tag": "errand",
        "is_done": 0,
        "created_at": "2026-09-09T08:00"
    }
]
```

### `POST /tasks`
Creates a new task.

**Request body**
```json
{
    "title": "Buy milk",
    "due_datetime": "2026-09-10T10:00",
    "priority": 1,
    "tag": "errand",
    "created_at": "2026-09-09T08:00"
}
```

**Response** — `201 Created`
```json
{
    "id": 1,
    "title": "Buy milk",
    "due_datetime": "2026-09-10T10:00",
    "priority": 1,
    "tag": "errand",
    "created_at": "2026-09-09T08:00",
    "is_done": 0
}
```
*(`is_done` is always set to `0` server-side for new tasks, client is not asked to manually input it.)*

### `PUT /tasks/<int:task_id>`
Updates an existing task by id.

**Request body**
```json
{
    "title": "Buy milk and eggs",
    "due_datetime": "2026-09-10T10:00",
    "priority": 1,
    "tag": "errand",
    "is_done": 1
}
```

**Response** — `200 OK`
```json
{
    "status": "updated",
    "id": 1
}
```

### `DELETE /tasks/<int:task_id>`
Deletes a task by id.

**Response** — `200 OK`
```json
{
    "status": "deleted",
    "id": 1
}
```
## Screenshots

### Task Creation
![Task creation form](screenshots/task-creation.png)

### Edit Task
![Edit task form](screenshots/edit-task.png)

### Mark as Done
![Mark task as done](screenshots/mark-as-done.png)

### Task Deletion
![Task deletion confirmation](screenshots/task-deletion.png)
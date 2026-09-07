import sqlite3
from pathlib import Path

# dynamically creates an absolute file path to tasks.db located in the same folder of app.py
# __file__ : Python's built-in reference to the current script's path
DB_PATH = Path(__file__).parent / "tasks.db"

if __name__ == "__main__":
    # define connection & cursor
    connection= sqlite3.connect(DB_PATH)
    cursor = connection.cursor()

    # create task table
    create_schema_command = """CREATE TABLE IF NOT EXISTS
    tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, due_datetime TEXT, priority INTEGER, tag TEXT, is_done INTEGER, created_at TEXT)"""

    cursor.execute(create_schema_command)
    connection.commit()     # permanently saves all the pending changes made during the current transaction to the database file
    cursor.close()          # closes the opened Cursor
    connection.close()      # terminates the active link between Py script and SQLite DB
// FILENAME: ui.js
// handles add task btn, toggling form's visibility

document.addEventListener('DOMContentLoaded',function () {
    const addTaskBtn    = document.getElementById('add-task-btn');
    const formSection   = document.getElementById('task-form-section');
    const form          = document.getElementById('task-form');

    addTaskBtn.addEventListener('click', function () {
        formSection.classList.toggle('hidden');
        console.log('Add button clicked.');
        // reset form if closed
        if (formSection.classList.contains('hidden')) {
            form.reset();
        }
    });

    form.addEventListener('submit', async function (event) {
        event.preventDefault();     // stops html page from reloading
        
        // builds request payload with expected field names
        const payload = {
            title: document.getElementById('task-name').value,
            due_datetime: document.getElementById('due-date-time').value,
            priority: document.getElementById('priority-select').value,
            tag: document.getElementById('tag').value,
            created_at: new Date().toISOString()
        };

        // POST payload with fetch
        const response = await fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            location.reload();  // reload page to render fetched data
        } else {
            console.error('Failed to create task:', response.status);
        }
    });
});
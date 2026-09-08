// FILENAME: ui.js
// handles add task btn, toggling form's visibility

document.addEventListener('DOMContentLoaded',function () {
    const addTaskBtn    = document.getElementById('add-task-btn');
    const formSection   = document.getElementById('task-form-section');
    const form          = document.getElementById('task-form');

    addTaskBtn.addEventListener('click', function () {
        formSection.classList.toggle('hidden');
        
        // reset form if closed
        if (formSection.classList.contains('hidden')) {
            form.reset();
        }
    });
});
// FILENAME: tasksRender.js

document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('/tasks');
    const data     = await response.json(); // array of "plain objects" from JSON

    // for each objects in data, call Task.fromJSON on it and collect the results into a new array
    const tasks     = data.map(taskData => Task.fromJSON(taskData)); // now an array of real Task instances

    const container = document.getElementById('task-list');
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.dataset.priority = task.getPriority();
        if ( task.getIsDone() ) {
            li.classList.add('done');
        }

        const titleEl       = document.createElement('span');   // get HTML element
        titleEl.textContent = task.getTitle();                  // set content to HTML element
        li.appendChild(titleEl);                                // append to `li` container

        const dueDateTimeEl       = document.createElement('span');
        dueDateTimeEl.textContent = task.getDueDateTime();
        li.appendChild(dueDateTimeEl);
        
        
        const priorityEl       = document.createElement('span');
        priorityEl.textContent = task.getPriority();
        li.appendChild(priorityEl);
        
        const tagEl       = document.createElement('span');
        tagEl.textContent = task.getTag();
        li.appendChild(tagEl);
        
        const createdAtEl       = document.createElement('span');
        createdAtEl.textContent = task.getCreatedAt();
        li.appendChild(createdAtEl);
        
        
        const isDoneEl       = document.createElement('input');
        isDoneEl.type = 'checkbox';
        isDoneEl.checked = task.getIsDone();
        isDoneEl.addEventListener('change', async () => {
            const response = await fetch(`/tasks/${task.getId()}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: task.getTitle(),
                    due_datetime: task.getDueDateTime(),
                    priority: task.getPriority(),
                    tag: task.getTag(),
                    is_done: isDoneEl.checked ? 1 : 0
                })
            });
            if ( !response.ok ) {
                console.error('Failed to update done status:', response.status);
                isDoneEl.checked = !isDoneEl.checked;   // reverts the checkbox visually
            } else {
                li.classList.toggle('done', isDoneEl.checked);
            }
        });
        li.appendChild(isDoneEl);


        const editEl = document.createElement('button');
        editEl.textContent = "Edit Task";
        editEl.addEventListener('click', () => {
            document.getElementById('task-name').value = task.getTitle();
            document.getElementById('due-date-time').value = task.getDueDateTime();
            document.getElementById('priority-select').value = task.getPriority();
            document.getElementById('tag').value = task.getTag();
            
            const form = document.getElementById('task-form');
            form.dataset.editingId     = task.getId();
            form.dataset.editingIsDone = task.getIsDone();
            
            document.getElementById('submit-btn').textContent = "Update Task";

            // targets the same (+) toggle button
            document.getElementById('task-form-section').classList.remove('hidden');
            

        });
        editEl.classList.add('edit-task-btn');
        li.appendChild(editEl);


        const deleteEl = document.createElement('button');
        deleteEl.textContent = "X";
        deleteEl.addEventListener('click', async () => {
            console.log('Delete Task button clicked.');
            
            if ( confirm(`Delete task ${task.getTitle()}?`) ) {
                const response = await fetch(`/tasks/${task.getId()}`, {method: 'DELETE',});
                if ( response.ok ) {
                    li.remove()
                } else {
                    console.error('Failed to delete task:', response.status);
                }
            }
        });
        deleteEl.classList.add('delete-task-btn');
        li.appendChild(deleteEl);

        // append to `container` container
        container.appendChild(li);
    }); 

    
});
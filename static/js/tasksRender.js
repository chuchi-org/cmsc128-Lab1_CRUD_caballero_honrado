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
        
        
        const isDoneEl       = document.createElement('span');
        isDoneEl.textContent = task.getIsDone();
        li.appendChild(isDoneEl);

        // append to `container` container
        container.appendChild(li);
    }); 

    
});
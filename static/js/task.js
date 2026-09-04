// FILENAME: task.js

// priority constants
const HIGH = 0;
const MED  = 1;
const LOW  = 2;

class Task {
    constructor(title, dueDateTime, priority, tag) {
        this.title       = title;
        this.dueDateTime = dueDateTime;
        this.priority    = priority;
        this.tag         = tag;

        // returns time & date the Task object is instantiated
        this.createdAt   = new Date().toISOString();
        
        this.isDone      = false;
    }

    // getters and setters are for mutable fields only
    // getters - for reading/reviewing Tasks
    getTitle() {
        return this.title;
    }

    getDueDateTime() {
        return this.dueDateTime;
    }

    getPriority() {
        return this.priority;
    }

    getTag() {
        return this.tag;
    }
    
    getCreatedAt() {
        return this.createdAt;
    }

    getIsDone() {
        return this.isDone;
    }
    
    // setters - for updating Tasks
    setTitle(newTitle) {
        this.title = newTitle;
    }
    
    setDueDateTime(newDueDateTime) {
        this.dueDateTime = newDueDateTime;
    }
    
    setPriority(newPriority) {
        this.priority = newPriority;
    }
    
    setTag(newTag) {
        this.tag = newTag;
    }

    // setters for isDone
    markDone() {
        this.isDone = true;
    }

    markUndone() {
        this.isDone = false;
    }

}
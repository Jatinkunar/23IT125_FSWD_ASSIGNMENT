// Initial array of task objects
let tasks = [
    { title: "Complete homework", status: "Pending", priority: 4 },
    { title: "Buy groceries", status: "Completed", priority: 3 },
    { title: "Clean the house", status: "Pending", priority: 2 },
    { title: "Write blog post", status: "Completed", priority: 5 },
    { title: "Prepare dinner", status: "Pending", priority: 1 }
];

// Add Task function
const addTask = (title, status, priority) => {
    tasks.push({ title, status, priority });
};

// Filter by Status function
const filterByStatus = (status) => {
    return tasks.filter(task => task.status === status);
};

// Find High Priority Task function
const findHighPriorityTask = () => {
    return tasks.find(task => task.priority === 5);
};

// Used map() to create a list of task titles with their status
const taskStatusList = tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);

// Log the details of all tasks using template literals
const logTasks = () => {
    tasks.forEach(task => {
        console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`);
    });
};

// Example Usage:

// Add a new task
addTask("Call mom", "Pending", 3);

// Filter tasks by status
console.log("Pending Tasks:");
console.log(filterByStatus("Pending"));

// Find the first high priority task
console.log("High Priority Task:");
console.log(findHighPriorityTask());

// Log the task status list
console.log("Task Status List:");
console.log(taskStatusList);

// Log all tasks
console.log("All Tasks:");
logTasks();
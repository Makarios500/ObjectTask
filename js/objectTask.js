const tasks = JSON.parse(localStorage.getItem("tasks")) || [];


let showTasks = () => {
  console.clear();
  console.table(tasks);
};

let newTask = () => {
  let taskName = prompt("Please enter task name");
  let taskDate = prompt("Please enter task date");
  let taskstatus = confirm("The task is complete?");
  let task = {
    Name: taskName,
    Date: taskDate,
    Status: taskstatus,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  showTasks();
};

let deleteTask = () => {
  let taskIndex = prompt("Please enter the index of Task do you want delete");
  tasks.splice(taskIndex, 1);
  showTasks();
};

let replaceTasks = () => {
  let taskIndex = +prompt("Please enter the index of Task do you want replace");
  let replaceTask = prompt("Please enter the Task do you want replace");
  let newOfTask = prompt("Please enter new value of the task");
  tasks[taskIndex][replaceTask] = newOfTask;
  showTasks();
};

let toogleTaskStatus = () => {
  let taskStatus = +prompt(
    "Please enter the index of Task do you want change status",
  );
  if (tasks[taskStatus].Status == false) {
    tasks[taskStatus].Status = true;
  }
  showTasks();
};

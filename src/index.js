document.addEventListener("DOMContentLoaded", function() {
  // Get references to the form, input, and task list elements
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the task description from the input
    const taskDescription = taskInput.value.trim();

    // Only proceed if the input is not empty
    if (taskDescription) {
      // Create a new list item for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Create a delete button for the task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
      });

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Append the new task to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  });
});
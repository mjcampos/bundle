var checkmark = {
	onBreak: false,
	longBreak: false,
	count: 0
};

$(document).ready(function() {
	// Enter and display task prompt
	var task = prompt("Enter your task.");

	while(!task.trim()) {
		task = prompt("You didn't enter a task. Please try again.");
	}

	$("#taskName").append("<h2>Task: " + task + "</h2>");
});
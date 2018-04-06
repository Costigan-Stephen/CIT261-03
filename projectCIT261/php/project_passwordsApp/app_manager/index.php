<?php
//update with our database information
require('../model/database.php');
require('../model/task_db.php');

$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'list_tasks';
    }
}

if ($action == 'list_tasks') {
    $tasks = get_tasks();
    include('task_list.php');
} else if ($action == 'delete_task') {
    $task_id = filter_input(INPUT_POST, 'task_id', 
            FILTER_VALIDATE_INT);
    if ($task_id == NULL || $task_id == FALSE) {
        $error = "Missing or incorrect task id.";
        include('../errors/error.php');
    } else { 
        delete_task($task_id);
        header("Location: .?action=list_tasks");
    }
} else if ($action == 'show_add_form') {
    include('task_add.php');
    } else if ($action == 'edit_task_form') {
    $task_id = filter_input(INPUT_POST, 'task_id', FILTER_VALIDATE_INT);
    $task = get_task($task_id);
    include('edit_task.php');
    }  else if ($action == 'add_task') {
    $name = filter_input(INPUT_POST, 'name');
    $notes = filter_input(INPUT_POST, 'notes');
    $time = filter_input(INPUT_POST, 'time');
    if ($name == NULL || $notes == NULL || $time == NULL || $time == FALSE) {
        $error = "Invalid task data. Check all fields and try again.";
        include('../errors/error.php');
    } else { 
        add_task($name, $notes, $time);
        header("Location: .?action=list_tasks");
    }
}  else if ($action == 'edit_task') {
    $name = filter_input(INPUT_POST, 'name');
    $notes = filter_input(INPUT_POST, 'notes');
    $time = filter_input(INPUT_POST, 'time');
    $task_id = filter_input(INPUT_POST, 'task_id');
    if ($name == NULL || $notes == NULL || $time == NULL || $task_id == NULL) {
        $error = "Invalid task data. Check all fields and try again.";
        include('../errors/error.php');
    } else { 
        $success = edit_task($name, $notes, $time, $task_id);
        header("Location: .?action=list_tasks");
        }
} else if ( $action == 'view_completed_tasks') {
		$tasks = get_completed_tasks();
		include('completed_tasks.php');
		} else if ($action=='confirmDel') {
				//action to confirm delete
				$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
				$task_id = filter_input(INPUT_POST, 'task_id', FILTER_SANITIZE_STRING);
				$time = filter_input(INPUT_POST, 'time', FILTER_SANITIZE_STRING);
				$warning = 'Are you sure you want to delete this task?';
				include '../todo_manager/confirmDel.php';
				exit;
			} else if ($action=='cancel') {
					//action to delete registry
					$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
					$task_id = filter_input(INPUT_POST, 'task_id', FILTER_SANITIZE_STRING);
					$time = filter_input(INPUT_POST, 'time', FILTER_SANITIZE_STRING);
					$confirm = 'You have successfully deleted this task item.';
					include '../todo_manager/confirm.php';
					exit;
				} 
	
?>
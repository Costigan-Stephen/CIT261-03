<?php
//needs to be updated with our database names/information
function get_task($task_id) {
    global $db;
    $query = 'SELECT * FROM tasks
              WHERE taskID = :task_id';
    $statement = $db->prepare($query);
    $statement->bindValue(":task_id", $task_id, PDO::PARAM_STR);
    $statement->execute();
    $task = $statement->fetch();
    $statement->closeCursor();
    return $task;
}

function delete_task($task_id) {
    global $db;
    $query = 'UPDATE tasks SET deleted=1
              WHERE taskID = :task_id';
    $statement = $db->prepare($query);
    $statement->bindValue(':task_id', $task_id, PDO::PARAM_STR);
    $statement->execute();
    $statement->closeCursor();
}

function get_tasks() {
	global $db;
    $query = 'SELECT * FROM tasks WHERE deleted=0';
    $statement = $db->prepare($query);
    $statement->execute();
    $tasks = $statement->fetchAll();
    $statement->closeCursor();
    return $tasks;
}

function get_completed_tasks() {
global $db;
    $query = 'SELECT * FROM tasks WHERE deleted=1';
    $statement = $db->prepare($query);
    $statement->execute();
    $tasks = $statement->fetchAll();
    $statement->closeCursor();
    return $tasks;
}

function add_task($name, $notes, $time) {
    global $db;
    $query = 'INSERT INTO tasks
                 (taskName, taskNotes, taskTime)
              VALUES
                 (:name, :notes, :time)';
    $statement = $db->prepare($query);
    $statement->bindValue(':name', $name, PDO::PARAM_STR);
    $statement->bindValue(':notes', $notes, PDO::PARAM_STR);
    $statement->bindValue(':time', $time, PDO::PARAM_STR);
    $statement->execute();
    $statement->closeCursor();
}

function edit_task($name, $notes, $time, $task_id) {
	global $db;
	//echo $task_id, $name, $notes, $time;
    //exit;
	$query = 'UPDATE tasks
    			SET taskName = :name, 
    			 taskNotes = :notes, 
    			 taskTime = :time
    			 WHERE taskID = :id';
    $statement = $db->prepare($query);
    $statement->bindValue(':id', $task_id, PDO::PARAM_STR);
    $statement->bindValue(':notes', $notes, PDO::PARAM_STR);
    $statement->bindValue(':time', $time, PDO::PARAM_STR);
    $statement->bindValue(':name', $name, PDO::PARAM_STR);
    $success = $statement->execute();
    $statement->closeCursor();    
}

?>
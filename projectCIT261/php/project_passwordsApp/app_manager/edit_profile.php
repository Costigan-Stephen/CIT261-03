<?php include '../view/header.php'; ?>
//update with our database information
<main>
    <h1>Edit task</h1>
    <form action="index.php" method="post" id="edit_task_form">
        <input type="hidden" name="action" value="edit_task">

        <label>Name:</label>
        <input type="text" name="name" value="<?php echo $task['taskName']; ?>" required/>
        <br>

        <label>Notes:</label>
        <input type="text" name="notes" value="<?php echo $task['taskNotes']; ?>" required/>
        <br>

        <label>List time:</label>
        <input type="text" name="time" value="<?php echo $task['taskTime']; ?>" required/>
        <br>
        
        <input type="hidden" name="task_id" value="<?php echo $task['taskID']; ?>" required/>

        <label>&nbsp;</label>
        <input type="submit" value="Save Changes"/>
        
        <br>
    </form>
    <p class="last_paragraph">
        <a href="index.php?action=list_tasks">View task List</a>
    </p>

</main>
<?php include '../view/footer.php'; ?>
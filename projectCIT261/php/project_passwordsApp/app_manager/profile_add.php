<?php include '../view/header.php'; ?>
//update with our database information
<main>
    <h1>Add task</h1>
    <form action="index.php" method="post" id="add_task_form">
        <input type="hidden" name="action" value="add_task">
        
    
        <label>Name:</label>
        <input type="text" name="name" required/>
        <br>

        <label>Notes:</label>
        <input type="text" name="notes" required/>
        <br>

        <label>List time:</label>
        <input type="text" name="time" required/>
        <br>

        <label>&nbsp;</label>
        <input type="submit" value="Add task"/>
        
        <br>
    </form>
    <p class="last_paragraph">
        <a href="index.php?action=list_tasks">View task List</a>
    </p>

</main>
<?php include '../view/footer.php'; ?>
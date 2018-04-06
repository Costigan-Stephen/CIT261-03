<?php include '../view/header.php'; ?>
//update with our database information
<main>
    <h1>To-Do List</h1>

    <section>
        <!-- display a table of tasks -->
        <table>
            <tr>
                <th>Task</th>
                <th>Notes</th>
                <th class="right">Time</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
            </tr>
            <?php foreach ($tasks as $task) : ?>
            <tr>
                <td><?php echo $task['taskName']; ?></td>
                <td><?php echo $task['taskNotes']; ?></td>
                <td class="right"><?php echo $task['taskTime']; ?></td>
                <td><form action="." method="post">
                    <input type="hidden" name="action"
                           value="delete_task">
                    <input type="hidden" name="task_id"
                           value="<?php echo $task['taskID']; ?>">
                    <input type="submit" value="Complete" class='complete'>
                </form></td> 
                <td><form action="." method="post">
                    <input type="hidden" name="action"
                           value="edit_task_form">
                    <input type="hidden" name="task_id"
                           value="<?php echo $task['taskID']; ?>">
                    <input type="submit" value="Edit" class='edit'>
                </form></td> 
            </tr>
            <?php endforeach; ?>
        </table>
        <p><a href="?action=show_add_form">Add task</a></p> 
        <p><a href="?action=view_completed_tasks">View Completed Tasks</a></p>     
    </section>
</main>
<?php include '../view/footer.php'; ?>
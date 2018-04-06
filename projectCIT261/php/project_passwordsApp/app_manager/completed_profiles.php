<?php include '../view/header.php'; ?>
//update with our information
<main>
    <h1>Completed Tasks</h1>

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
               
                </form></td> 
            </tr>
            <?php endforeach; ?>
        </table>
        <p><a href="?action=show_add_form">Add task</a></p> 
        <p><a href="index.php">View Uncompleted Tasks</a></p>     
    </section>
</main>
<?php include '../view/footer.php'; ?>
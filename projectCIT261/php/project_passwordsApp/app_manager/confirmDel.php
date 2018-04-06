<?php include'../view/header.php'; ?>
//update with our database information
<main>
	<?php echo $warning ?>
	<form action='index.php' method='post'>
		<input type='hidden' name='action' value='cancel'>
		<input type='text' name='task_id' value='<?php echo $task_id ?>'>
		<input type='text' name='name' value='<?php echo $name ?>'>
		<input type='text' name='time' value='<?php echo $time ?>'>
		<input class='btn-me' type='submit' name='Completed' value='Cancel Task Completion'>
	</form>
</main>
<?php include'../view/footer.php'; ?>
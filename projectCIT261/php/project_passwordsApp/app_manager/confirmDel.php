<?php include'../view/header.php'; ?>
<main>
	<?php echo $warning ?>
	<form action='index.php' method='post'>
		<input type='hidden' name='action' value='cancel'>
		<input type='text' name='ProfileID' value='<?php echo $ProfileID ?>'>
		<input type='text' name='ProfileName' value='<?php echo $ProfileName ?>'>
		<input type='text' name='Username' value='<?php echo $Username ?>'>
		<input type='text' name='Password' value='<?php echo $Password ?>'>
		<input type='text' name='Email' value='<?php echo $Email ?>'>
		<input type='text' name='Notes' value='<?php echo $Notes ?>'>
		<input type='text' name='Account_accountID' value='<?php echo $Account_accountID ?>'>
	</form>
</main>
<?php include'../view/footer.php'; ?>
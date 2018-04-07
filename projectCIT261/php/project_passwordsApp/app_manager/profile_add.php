<?php include '../view/header.php'; ?>
<main>
    <h1>Add task</h1>
    <form action="index.php" method="post" id="add_profile_form">
        <input type="hidden" name="action" value="add_profile">
        
    	<label>Profile Name:</label>
        <input type="text" name="ProfileName" required/>
        <br>

        <label>Username:</label>
        <input type="text" name="Username" required/>
        <br>

        <label>Password:</label>
        <input type="text" name="Password" required/>
        <br>
        
        <label>Email:</label>
        <input type="text" name="Email" required/>
        <br>
        
        <label>Notes:</label>
        <input type="text" name="Notes" required/>
        <br>
        
        <label>Account ID:</label>
        <input type="text" name="Account_accountID" required/>
        <br>
       
        <label>&nbsp;</label>
        <input type="submit" value="Add profile"/>
        
        <br>
    </form>
    <p>
        <a href="index.php?action=list_profiles">View Profile List</a>
    </p>

</main>
<?php include '../view/footer.php'; ?>
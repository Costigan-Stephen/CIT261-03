<?php include '../view/header.php'; ?>
<main>
    <h1>Edit Profile</h1>
    <form action="index.php" method="post" id="edit_profile_form">
        <input type="hidden" name="action" value="edit_profile">

        <label>Profile Name:</label>
        <input type="text" name="ProfileName" value="<?php echo $profiles['ProfileName']; ?>" required/>
        <br>

        <label>Username:</label>
        <input type="text" name="Username" value="<?php echo $profiles['Username']; ?>" required/>
        <br>

        <label>Password:</label>
        <input type="text" name="Password" value="<?php echo $profiles['Password']; ?>" required/>
        <br>
        
        <label>Email:</label>
        <input type="text" name="Email" value="<?php echo $profiles['Email']; ?>" required/>
        <br>
        
        <label>Notes:</label>
        <input type="text" name="Notes" value="<?php echo $profiles['Notes']; ?>" required/>
        <br>
        
        <label>Account ID:</label>
        <input type="text" name="Account_accountID" value="<?php echo $profiles['Account_accountID']; ?>" required/>
        <br>
        
        <input type="hidden" name="ProfileID" value="<?php echo $profiles['ProfileID']; ?>" required/>

        <label>&nbsp;</label>
        <input type="submit" value="Save Changes"/>
        
        <br>
    </form>
    <p class="last_paragraph">
        <a href="index.php?action=list_profiles">View Profile List</a>
    </p>

</main>
<?php include '../view/footer.php'; ?>
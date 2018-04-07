<?php include '../view/header.php'; ?>
<main>
    <h1>Profile List</h1>

    <section>
        <!-- display a table of profiles -->
        <table>
            <tr>
                <th>Profile ID</th>
                <th>Profile Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Notes</th>
                <th>Account ID</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
            </tr>
            <?php foreach ($profiles as $profile) : ?>
            <tr>
                <td><?php echo $profile['ProfileName']; ?></td>
                <td><?php echo $profile['Username']; ?></td>
                <td><?php echo $profile['Password']; ?></td>
                <td><?php echo $profile['Email']; ?></td>
                <td><?php echo $profile['Notes']; ?></td>
                <td><?php echo $profile['AccountID']; ?></td>
                <td><form action="." method="post">
                    <input type="hidden" name="action"
                           value="delete_profile">
                    <input type="hidden" name="ProfileID"
                           value="<?php echo $profile['ProfileID']; ?>">
                </form></td> 
                <td><form action="." method="post">
                    <input type="hidden" name="action"
                           value="edit_profile_form">
                    <input type="hidden" name="ProfileID"
                           value="<?php echo $profile['ProfileID']; ?>">
                    <input type="submit" value="Edit" class='edit'>
                </form></td> 
            </tr>
            <?php endforeach; ?>
        </table>
        <p><a href="?action=show_add_form">Add profile</a></p> 
</main>
<?php include '../view/footer.php'; ?>
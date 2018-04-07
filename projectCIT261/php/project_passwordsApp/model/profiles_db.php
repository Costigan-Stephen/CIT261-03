<?php
function get_profile($ProfileID) {
    global $db;
    $query = 'SELECT * FROM profiles
              WHERE ProfileID = :ProfileID';
    $statement = $db->prepare($query);
    $statement->bindValue(":ProfileID", $ProfileID, PDO::PARAM_STR);
    $statement->execute();
    $task = $statement->fetch();
    $statement->closeCursor();
    return $profile;
}

function delete_profile($ProfileID) {
    global $db;
    $query = 'UPDATE profiles SET deleted=1
              WHERE ProfileID = :ProfileID';
    $statement = $db->prepare($query);
    $statement->bindValue(':ProfileID', $ProfileID, PDO::PARAM_STR);
    $statement->execute();
    $statement->closeCursor();
}

function get_profiles() {
	global $db;
    $query = 'SELECT * FROM profiles WHERE deleted=0';
    $statement = $db->prepare($query);
    $statement->execute();
    $tasks = $statement->fetchAll();
    $statement->closeCursor();
    return $profiles;
}

function add_profile($ProfileName, $Username, $Password, $Email, $Notes, $Account_accountID) {
    global $db;
    $query = 'INSERT INTO profiles
                 (ProfileName, Username, Password, Email, Notes, Account_accountID)
              VALUES
                 (:ProfileName, :Username, :Password, :Email, :Notes, :Account_accountID)';
    $statement = $db->prepare($query);
    $statement->bindValue(':ProfileName', $ProfileName, PDO::PARAM_STR);
    $statement->bindValue(':Username', $Username, PDO::PARAM_STR);
    $statement->bindValue(':Password', $Password, PDO::PARAM_STR);
     $statement->bindValue(':Email', $Email, PDO::PARAM_STR);
      $statement->bindValue(':Notes', $Notes, PDO::PARAM_STR);
       $statement->bindValue(':Account_accountID', $Account_accountID, PDO::PARAM_STR);
    $statement->execute();
    $statement->closeCursor();
}

function edit_profile($ProfileID, $ProfileName, $Username, $Password, $Email, $Notes, $Account_accountID) {
	global $db;
	$query = 'UPDATE profiles
    			SET ProfileName = :ProfileName, 
    			 Username = :Username, 
    			 Password = :Password,
    			 Email = :email,
    			 Notes = :Notes,
    			 Account_accountID = :Account_accountID
    			 WHERE ProfileID = :ProfileID';
    $statement = $db->prepare($query);
    $statement->bindValue(':ProfileID', $ProfileID, PDO::PARAM_STR);
    $statement->bindValue(':ProfileName', $ProfileName, PDO::PARAM_STR);
    $statement->bindValue(':Username', $Username, PDO::PARAM_STR);
    $statement->bindValue(':Password', $Password, PDO::PARAM_STR);
    $statement->bindValue(':Email', $Email, PDO::PARAM_STR);
    $statement->bindValue(':Notes', $Notes, PDO::PARAM_STR);
    $statement->bindValue(':Account_accountID', $Account_accountID, PDO::PARAM_STR);
    $success = $statement->execute();
    $statement->closeCursor();    
}

?>
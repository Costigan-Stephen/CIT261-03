<?php
require('../model/database.php');
require('../model/profiles_db.php');

$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'list_profiles';
    }
}

if ($action == 'list_profiles') {
    $tasks = get_profiles();
    include('profile_list.php');
} else if ($action == 'delete_profile') {
    $ProfileID = filter_input(INPUT_POST, 'ProfileID', 
            FILTER_VALIDATE_INT);
    if ($ProfileID == NULL || $ProfileID == FALSE) {
        $error = "Missing or incorrect profile id.";
        include('../errors/error.php');
    } else { 
        delete_profile($ProfileID);
        header("Location: .?action=list_profiles");
    }
} else if ($action == 'show_add_form') {
    include('profile_add.php');
    } else if ($action == 'edit_profile_form') {
    $ProfileID = filter_input(INPUT_POST, 'ProfileID', FILTER_VALIDATE_INT);
    $profiles = get_profiles($ProfileID);
    include('edit_profile.php');
    }  else if ($action == 'add_profile') {
    $ProfileName = filter_input(INPUT_POST, 'ProfileName');
    $Username = filter_input(INPUT_POST, 'Username');
    $Password = filter_input(INPUT_POST, 'Password');
    $Email = filter_input(INPUT_POST, 'Email');
    $Notes = filter_input(INPUT_POST, 'Notes');
    $Account_accountID = filter_input(INPUT_POST, 'Account_accountID');
    if ($ProfileName == NULL || $Username == NULL || $Password == NULL || $Email == NULL || $Notes == NULL || $Account_accountID == NULL) {
        $error = "Invalid profile data. Check all fields and try again.";
        include('../errors/error.php');
    } else { 
        add_profile($ProfileName, $Username, $Password, $Email, $Notes, $Account_accountID);
        header("Location: .?action=list_profiles");
    }
}  else if ($action == 'edit_profile') {
	$ProfileID = filter_input(INPUT_POST, 'ProfileID');
    $ProfileName = filter_input(INPUT_POST, 'ProfileName');
    $Username = filter_input(INPUT_POST, 'Username');
    $Password = filter_input(INPUT_POST, 'Password');
    $Email = filter_input(INPUT_POST, 'Email');
    $Notes = filter_input(INPUT_POST, 'Notes');
    $Account_accountID = filter_input(INPUT_POST, 'Account_accountID');
    if ($ProfileID == NULL || $ProfileName == NULL || $Username == NULL || $Password == NULL || $Email == NULL || $Notes == NULL || $Account_accountID == NULL)) {
        $error = "Invalid profile data. Check all fields and try again.";
        include('../errors/error.php');
    } else { 
        $success = edit_profile($ProfileID, $ProfileName, $Username, $Password, $Email, $Notes, $Account_accountID);
        header("Location: .?action=list_profiles");
        }
} else if ($action=='confirmDel') {
				//action to confirm delete
				$ProfileName = filter_input(INPUT_POST, 'ProfileName', FILTER_SANITIZE_STRING);
				$ProfileID = filter_input(INPUT_POST, 'ProfileID', FILTER_SANITIZE_STRING);
				$Username = filter_input(INPUT_POST, 'Username', FILTER_SANITIZE_STRING);
				$Password = filter_input(INPUT_POST, 'Password', FILTER_SANITIZE_STRING);
				$Email = filter_input(INPUT_POST, 'Email', FILTER_SANITIZE_STRING);
				$Notes = filter_input(INPUT_POST, 'Notes', FILTER_SANITIZE_STRING);
				$Account_accountID = filter_input(INPUT_POST, 'Account_accountID', FILTER_SANITIZE_STRING);
				$warning = 'Are you sure you want to delete this profile?';
				include '../app_manager/confirmDel.php';
				exit;
			} else if ($action=='cancel') {
					//action to delete registry
					$ProfileName = filter_input(INPUT_POST, 'ProfileName', FILTER_SANITIZE_STRING);
					$ProfileID = filter_input(INPUT_POST, 'ProfileID', FILTER_SANITIZE_STRING);
					$Username = filter_input(INPUT_POST, 'Username', FILTER_SANITIZE_STRING);
					$Password = filter_input(INPUT_POST, 'Password', FILTER_SANITIZE_STRING);
					$Email = filter_input(INPUT_POST, 'Email', FILTER_SANITIZE_STRING);
					$Notes = filter_input(INPUT_POST, 'Notes', FILTER_SANITIZE_STRING);
					$Account_accountID = filter_input(INPUT_POST, 'Account_accountID', FILTER_SANITIZE_STRING);
					$confirm = 'You have successfully deleted this profile item.';
					include '../app_manager/confirm.php';
					exit;
				} 
	
?>
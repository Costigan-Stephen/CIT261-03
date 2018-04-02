<?php
 session_start();
 require_once 'config.php';

 if(isset($_POST['btn-login']))
 {
  $username = trim($_POST['username']);
  $user_password = trim($_POST['password']);
  
  $password = md5($user_password);
  
  try
  { 
  
   $stmt = $db_con->prepare("SELECT * FROM tbl_users WHERE username=:masterUsername");
   $stmt->execute(array(":masterUsername"=>$username));
   $row = $stmt->fetch(PDO::FETCH_ASSOC);
   $count = $stmt->rowCount();
   
   if($row['masterPassword']==$password){
    
    echo "Success"; // log in
    $_SESSION['user_session'] = $row['user_id'];
   }
   else{
    
    echo "Error: email or password does not exist."; // wrong details 
   }
    
  }
  catch(PDOException $e){
   echo $e->getMessage();
  }
 }

?>

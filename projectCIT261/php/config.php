<?php
// define variables and set to empty values
$user = $pass = "";
 $host = "passwordsApp.sql";
 $dbname = "passwordsApp";

// Attempt to parse values from HTML form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user = test_input($_POST["username"]);
  $pass = test_input($_POST["password"]);
}

// Change values in SQL based on input.  Not sure if this works yet, will test more
try{
  
  $db_con = new PDO("mysql:host={$host};dbname={$dbname}",$user,$pass);
  $db_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 }
 catch(PDOException $e){
  echo $e->getMessage();
 }
?>

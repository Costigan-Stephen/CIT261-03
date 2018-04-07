<?php
    $dsn = 'mysql:host=localhost;dbname=misstyle_passwordsApp';
    $username = 'misstyle_roots';
    $password = 'roots';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        include('../errors/database_error.php');
        exit();
    }
?>
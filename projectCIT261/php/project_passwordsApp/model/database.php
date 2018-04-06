<?php
    $dsn = 'mysql:host=localhost;dbname=passwordsApp';
    //$username = 'misstyle_iAdmin';
    //$password = 'K)q?RyOb*}^X';
    $username = 'rootroot';
    $password = 'rootroot';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        include('../errors/database_error.php');
        exit();
    }
?>
<?php
    session_start();

    $id = $_POST["id"];
    $username = $_POST["username"];

    $dbhost = "localhost:3307";
    $dbuser = "root";
    $dbpass = "root";
    $dbname = "movie_store";

    $con = mysql_connect($dbhost, $dbuser, $dbpass,$dbname);
    
    if (!$con)
    {
        echo "Failed to connect to MySQL: ";
    }    


    mysql_query("SET NAMES 'utf8'");
    mysql_select_db($dbname);

    $query = "select UID from userinfo where f_name = '$username';";
    $q_result = mysql_query($query) or die('MySQL query error');
    $row = mysql_fetch_array($q_result);

    $uid = $row['UID'];



    $sql = "insert into records (PID, UID, start_date, end_date, state) values ('$id', '$uid', NOW(), NOW() + interval 1 month, '1');";


    $result = mysql_query($sql) or die ($sql);

    echo 'success';
   
?>
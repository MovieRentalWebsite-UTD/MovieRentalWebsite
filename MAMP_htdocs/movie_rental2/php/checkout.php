<?php
    session_start();

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



    $sql = "update records a left join userinfo b on a.UID = b.UID set state = '2' where f_name = '$username' and state = '1';";

    $result = mysql_query($sql) or die ($sql);

    echo 'success'; 
?>
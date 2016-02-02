<?php
    session_start();

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

    $pid=$_POST['PID'];

    $sql = "DELETE from prod_info where PID = ".$pid.";";
    $result=mysql_query($sql) or die('MySQL query error'); 
    echo $pid; 
?>
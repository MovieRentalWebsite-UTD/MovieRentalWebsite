<?php
    session_start();

    $username = $_POST["username"];
    $password = $_POST["password"];

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


    $sql = "SELECT * from userinfo where username = '$username' && password = '$password';";
    $result = mysql_query($sql) or die('MySQL query error');

    $record_count = mysql_num_rows($result); 
    if($record_count < 1)
    {
        echo 'errormsg';
    }
    else
    {
        while($row = mysql_fetch_array($result))
        {
            $value = $row['isAdmin'];
            $firstname = $row['f_name'];
        }
        //$_SESSION['username'] = $firstname;
        echo 'success'.$value.','.$firstname;
        //return 'success';
    }     
?>
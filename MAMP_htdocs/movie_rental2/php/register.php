<?php
    session_start();

    $username = $_POST["username"];
    $password = $_POST["password"];
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];

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

    $query1 = "select * from userinfo where email = '$email';";
    $match1_e = mysql_query($query1) or die('MySQL query error');
    $match2_e = mysql_fetch_array($match1_e);

    $query2 = "select * from userinfo where username = '$username';";
    $match1_u = mysql_query($query2) or die('MySQL query error');
    $match2_u = mysql_fetch_array($match1_u);

    if ($match2_e) 
    {
        echo 'error1';
    }
    else if ($match2_u)
    {
        echo 'error2';
    }

    else
    {
        $sql = "insert into userinfo (f_name, l_name, username, password, email) values ('$firstname', '$lastname', '$username', '$password', '$email');";

        $result = mysql_query($sql) or die('MySQL query error');

        $_SESSION['f_name'] = $username;
        echo 'success';
    }
?>
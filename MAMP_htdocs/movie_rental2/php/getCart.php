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

    if ($username == "")
    {
        echo "<span id='sign_in_first' style='font-size:25px; color:red;'>Please sign in first.</span>";
    }
    else
    {
        $query = "select distinct sum(price) as sum from records a left join userinfo b on a.UID = b.UID left join prod_info c on a.PID = c.PID and state = 1 where b.f_name = '$username';";
        $sum1 = mysql_query($query) or die('MySQL query error');
        $sum2 = mysql_fetch_array($sum1);
        $sum = $sum2['sum'];
        
        $sql = "select distinct item_name, price, img_title from records a left join userinfo b on a.UID = b.UID left join prod_info c on a.PID = c.PID left join rental_state d on a.state = d.SID where b.f_name = '$username' and state = 1;";
        $result = mysql_query($sql) or die('MySQL query error');

        //echo "<table class='myTable_Cart' id='myTable_Cart'><tr><th>Movie</th><th>Title</th><th>Price</th></tr>";

        echo '<tr><td></td><td></td><td><input type="button" name="submit" value="Checkout" id="checkout_cart" onclick="checkout();"></td></tr>';
        while($row = mysql_fetch_array($result))
        {
            echo '<tr><td id="picture"><img src="img/100-125/'.$row['img_title'].'100-125.jpg" alt="Thumbnail Image 1" class="img-responsive"></td><td>' . $row['item_name'] . '</td><td>' . $row['price'] . '</td></tr>';
        }
        echo '<tr><td></td><td>Total: </td><td>'.$sum.'</td></tr>';
        #echo '<tr><td></td><td></td><td><input type="button" name="submit" value="Checkout" id="checkout"></td></tr>';
    }
    
?>
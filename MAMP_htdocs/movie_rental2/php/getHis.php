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

    if ($username == "")
    {
        echo "<span id='sign_in_first' style='font-size:25px; color:red;'>Please sign in first.</span>";
    }
    else
    {
        /*$query = "select distinct sum(price) as sum from records a left join userinfo b on b.f_name = '$username' and a.UID = b.UID left join prod_info c on a.PID = c.PID;";
        $sum1 = mysql_query($query) or die('MySQL query error');
        $sum2 = mysql_fetch_array($sum1);
        $sum = $sum2['sum'];*/

        $sql = "select distinct item_name, price, img_title, state_name from records a left join userinfo b on a.UID = b.UID left join prod_info c on a.PID = c.PID left join rental_state d on a.state = SID where b.f_name = '$username' and (state = 2 or state = 3);";
        $result = mysql_query($sql) or die('MySQL query error');

        echo "<table class='myTable_His' id='myTable_His'>
                    <tr>
                        <th>Movie</th>
                        <th>Title</th>
                        <th style='padding: 10px; margin:auto;'>Price</th>
                        <th>Rental State</th>
                    </tr>";

        while($row = mysql_fetch_array($result))
        {
            echo '<tr><td style="padding: 40px; margin:auto;" id="picture"><img src="img/100-125/'.$row['img_title'].'100-125.jpg" alt="Thumbnail Image 1" class="img-responsive"></td><td>' . $row['item_name'] . '</td><td>' . $row['price'] . '</td><td>' . $row['state_name'] . '</td></tr>';
        }
        echo '</table>';
    }
?>
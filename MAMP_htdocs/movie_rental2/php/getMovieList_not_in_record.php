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

    $sql2 = "SELECT a.*,b.* FROM prod_info a INNER JOIN cat b INNER JOIN records c ON a.CID=b.CID Where a.PID!=c.PID GROUP BY a.PID;";
    $result2 = mysql_query($sql2) or die('MySQL query error');
    $record_count2 = mysql_num_rows($result2); 
     
    if($record_count2 < 1 )
    {
        echo 'no data';
    }
    else
    {

        while($row=mysql_fetch_array($result2)){
            echo '<tr><td id="category">'.$row['cat_name'].'</td>
                      <td class="product_id">'.$row['PID'].'</td>
                      <td id="picture"><img src="img/100-125/'.$row['img_title'].'100-125.jpg" alt="Thumbnail Image 1" class="img-responsive"></td>
                      <td class="product">'.$row['item_name'].'</td>
                      <td id="price">'.$row['price'].'</td>
                      <td class="cart_td"><a href="#" onClick="addToCart('.$row['PID'].');" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to Cart</a></td>
                      <td class="update_td"><a href="#" onClick="update_item('.$row['PID'].',this);" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Update</a></td>
                      <td class="delete_td"><a href="#" onClick="delete_item('.$row['PID'].',this);" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Delete Item</a></td>
                      </tr>';
        }
    }     
?>
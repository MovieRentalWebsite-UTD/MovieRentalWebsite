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

    $sql = "SELECT a.*,b.* FROM prod_info a INNER JOIN cat b ON a.CID=b.CID;";
    $result = mysql_query($sql) or die('MySQL query error');

    $record_count = mysql_num_rows($result); 
    if($record_count < 1)
    {
        echo 'no data';
    }
    else
    {
        while($row=mysql_fetch_array($result)){
            echo '<tr><td class="category_category">'.$row['cat_name'].'</td>
                      <td class="product_id">'.$row['PID'].'</td>
                      <td id="picture"><img src="img/100-125/'.$row['img_title'].'100-125.jpg" alt="Thumbnail Image 1" class="img-responsive"></td>
                      <td class="product_category">'.$row['item_name'].'</td>
                      <td id="price">'.$row['price'].'</td>
                      <td class="cart_td"><a href="#" onClick="addToCart('.$row['PID'].');" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" area-hidden=""></span> Add to Cart</a></td>
                      <td class="update_td"><a href="#" onClick="update_item('.$row['PID'].',this);" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" area-hidden=""></span> Update</a></td>
                      <td class="delete_td"><a href="#" onClick="delete_item('.$row['PID'].',this);" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" area-hidden=""></span> Delete Item</a></td>
                      </tr>';
        }
    }     
?>
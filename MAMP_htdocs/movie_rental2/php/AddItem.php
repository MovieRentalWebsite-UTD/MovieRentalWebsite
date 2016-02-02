<?php
    session_start();
    
   // $pid=$_POST['PID'];
    $item_name=$_POST['item_name'];
    $CID=$_POST['category'];
    $price=$_POST['price'];
    $img_title=$_POST['img_title'];

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

    $sql = "INSERT INTO prod_info (item_name,CID,price,img_title) VALUES ('$item_name','$CID','$price','$img_title');" ;
    mysql_query($sql) or die('MySQL query error');
    $sqll = "SELECT a.*,b.* FROM prod_info a INNER JOIN cat b ON a.img_title='$img_title' and a.CID=b.CID;;" ;
    $result=mysql_query($sqll) or die('MySQL query error');

    while($row=mysql_fetch_array($result)){
        echo '<tr><td id="category">'.$row['cat_name'].'</td>
                      <td class="product_id">'.$row['PID'].'</td>
                      <td id="picture"><img src="img/100-125/'.$row['img_title'].'100-125.jpg" alt="Thumbnail Image 1" class="img-responsive"></td>
                      <td class="product">'.$row['item_name'].'</td>
                      <td id="price">'.$row['price'].'</td>
                      <td class="cart_td"><a href="#" onClick="add_cart_item('.$row['PID'].',this);"class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add to Cart</a></td>
                      <td class="update_td"><a href="#" onClick="update_item('.$row['PID'].',this);" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Update</a></td>
                      <td class="delete_td"><a href="#" onClick="delete_item('.$row['PID'].',this);" class="btn btn-primary" role="button"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Delete Item</a></td>
                      </tr>';
    }

?>


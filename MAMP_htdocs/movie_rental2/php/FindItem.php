<?php
    session_start();
    
    $PID=$_POST["PID"];

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

    $sqll = "SELECT * FROM prod_info WHERE PID='$PID';" ;
    $result=mysql_query($sqll) or die('MySQL query error');

    while($row=mysql_fetch_array($result))
    {
        echo '<div id="product_update" >
          <form id="form2" name="form2">
            <p>Product Id:
              <span id="product_id2" name="PID2">'.$row['PID'].'</span>
            </p>
            <p>Movie Name:    
              <input value="'.$row['item_name'].'" type="text" id="item_name2" name="item_name2" />
            </p>

            <p>Category:
              <select name="category2" id="category2">          
                <option value="1">Action</option>
                <option value="2">Adventure</option>
                <option value="3">Animation</option>
                <option value="4">Fantasy</option>
                <option value="5">Horror</option>
                <option value="6">Romance</option>
              </select>
            </p>

            <p>Price:    
              <input value="'.$row['price'].'" type="text" id="price2" name="price2" />
            </p>

            <p>Image Title:    
              <input value="'.$row['img_title'].'" type="text" id="img_title2" name="img_title2" />
            </p>

            <p>
              <input type="submit" id="update_button" value="update Item" name="update_button" onclick="update_item(pid);"/> 
            </p>
          </form>
        </div>';
    }

// mysqli_close($con);

?>


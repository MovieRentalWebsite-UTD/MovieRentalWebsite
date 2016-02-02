$(document).ready(function() 
{
  $('#form1').submit(function(event){
          event.preventDefault();
          // var item_name=$('#item_name').val();
          // var category=$('#categoryy').val();
          // var price=$('#pricee').val();
          // var img_title=$('#img_title').val();

          var str=$("#form1").serialize(); 
          
          //alert("item_name="+item_name+"&category="+category+"&price="+price+"&img_title="+img_title);         
              $.ajax({
                      type:'POST',
                      url: "php/AddItem.php",
                      //data: "PID="+pid+"&item_name="+item_name+"&category="+category+"&price="+price+"&img_title="+img_title,
					            data: str, 
                      success: function(movies){
                          $(".product_list_table tr").last().after(movies);
                          $(".cart_td").hide();
                          $('#product_list').show("slow");
                          $(".product_category_list_table tr").last().after(movies);                                      
                      },
                      error:function(msg){
                            document.write("error");
                            //alert("Add Item: Not Link Successfully!");
                      },
                      complete:function(){
                            //alert("complete!"); 
                      }
              });        
      
      });
});
$(document).ready(function() 
{
	$("#history").click(function()
	{
        $(".myTable_His").remove();
		var username = $('#login_showname').text().substring(7);
    	$.ajax(
    	{
        	url: "php/getHis.php",
        	data: "username=" + username,
        	type: "POST",
        	beforeSend:function()
        	{
        	},
        	success:function(msg)
        	{
                $("#loginForm").hide();
                $("#registerForm").hide();
               	$("#recommended_products").hide();

                $(".product_list_table").hide();
                $(".product_list_table tr").children("th").last().hide();
                $(".product_list_table tr").children("td:last-child").hide();
                $(".product_list_table tr").children("td:last-child").find("*").hide();

                $("#product_input").hide();

                $(".product_category_list_table").hide();
                $(".product_category_list_table tr").children("th").last().hide();
                $(".product_category_list_table tr").children("td:last-child").hide();
                $(".product_category_list_table tr").children("td:last-child").find("*").hide(); 

                $("#myCart").hide();
                $("#cartTable_list").hide();
                $(".cartTable").hide();
                $(".cartTable tr").children("th").last().hide();
                $(".cartTable tr").children("td:last-child").hide();
                $(".cartTable tr").children("td:last-child").find("*").hide();


                $("#hisTable_list").append(msg);
                //$(".hisTable tr").last().after(msg);
                $("#myHis").fadeIn();
                $("#hisTable_list").fadeIn();
                //$("myTable_His").show();


            },
        	error:function(xhr)
        	{
            	alert('Ajax request alert');
        	},
        	complete:function()
        	{
        	}
    	})
	})
    $("#register").click(function()
    {
        $("#recommended_products").hide();
        $("#loginForm").hide();
        $("#registerForm").fadeIn();
    })
});
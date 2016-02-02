$(document).ready(function() 
{
	$("#cart").click(function()
	{
        $(".cartTable tr td").remove();
        $("#myCart").show();
        $("#cartTable_list").show();
        $(".cartTable").show();
        $(".cartTable tr").children().show();
        $("#checkout_cart").show();
        //$(".cartTable tr td").show();
		var username = $('#login_showname').text().substring(7);
    	$.ajax(
    	{
        	url: "php/getCart.php",
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
                $("#sign_in_first").hide();

                $("#myHis").hide();
                $("#hisTable_list").hide();
                $(".hisTable").hide();
                $(".hisTable tr").children("th").last().hide();
                $(".hisTable tr").children("td:last-child").hide();
                $(".hisTable tr").children("td:last-child").find("*").hide();



                $(".cartTable tr").last().after(msg);

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
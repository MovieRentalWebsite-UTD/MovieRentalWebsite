$(document).ready(function() 
{
	$("#login").click(function()
	{
	    $("#recommended_products").hide();
	    $("#registerForm").hide();
	    $("#loginForm").fadeIn();

	    $("#myCart").hide();
            $("#cartTable_list").hide();
            $(".cartTable").hide();
            $(".cartTable tr").children("th").hide();
            $(".cartTable tr").children("td").hide();
            $(".cartTable tr").children("td").find("*").hide();

            $("#myHis").hide();
            $("#hisTable_list").hide();
            $(".myTable_His").hide();
            $(".myTable_His tr").children("th").last().hide();
            $(".myTable_His tr").children("td:last-child").hide();
            $(".myTable_His tr").children("td:last-child").find("*").hide();

	})

	$("#home").click(function()
	{
	    $("#recommended_products").fadeIn();
	    $("#registerForm").hide();
	    $("#loginForm").hide();
	    $("#myTable").hide();

	    $("#myCart").hide();
            $("#cartTable_list").hide();
            $(".cartTable").hide();
            $(".cartTable tr").children("th").last().hide();
            $(".cartTable tr").children("td:last-child").hide();
            $(".cartTable tr").children("td:last-child").find("*").hide();

            $("#myHis").hide();
            $("#hisTable_list").hide();
            $(".hisTable").hide();
            $(".hisTable tr").children("th").last().hide();
            $(".hisTable tr").children("td:last-child").hide();
            $(".hisTable tr").children("td:last-child").find("*").hide();
	})
});
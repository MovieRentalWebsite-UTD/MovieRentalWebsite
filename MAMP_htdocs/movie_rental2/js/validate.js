$(document).ready(function() 
{
	$("#username").on("focus", function()
	{
        $("#infomsg1").show();
        $("#OK1").hide();
        $("#Error1").hide();

    });

    $("#password").on("focus", function()
	{
        $("#infomsg2").show();
        $("#OK2").hide();
        $("#Error2").hide();

    });

    $("#email").on("focus", function()
	{
        $("#infomsg3").show();
        $("#OK3").hide();
        $("#Error3").hide();

    });

    $("#username").on("blur", function()
	{
		$("#infomsg1").hide();
		if (this.value.length == 0) 
		{
			$("#infomsg1").hide();
            $("#OK1").hide();
            $("#Error1").hide();
		}
		else
		{
			if (this.value.match(/[^a-zA-Z0-9 ]/g))
		    {

			    $("#Error1").show();
		    }
		    else
		    {
			    $("#OK1").show();
		    }
		}		
    });

    $("#password").on("blur", function()
	{
		$("#infomsg2").hide();
		if (this.value.length == 0) 
		{
			$("#infomsg2").hide();
            $("#OK2").hide();
            $("#Error2").hide();
		}
		else
		{
			if (this.value.length == 8)
			{

				$("#OK2").show();
			}
			else
			{
				$("#Error2").show();
			}
		}
		
    });

    $("#email").on("blur", function()
	{
		$("#infomsg3").hide();
		if (this.value.length == 0) 
		{
			$("#infomsg3").hide();
            $("#OK3").hide();
            $("#Error3").hide();
		}
		else
		{
			if (this.value.indexOf("@") > -1)
			{
				$("#OK3").show();
			}
			else
			{
				$("#Error3").show();
			}
		}
		
    });
});
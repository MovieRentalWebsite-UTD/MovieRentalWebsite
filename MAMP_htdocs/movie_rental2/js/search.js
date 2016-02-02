$(document).ready(function () 
{
	$('#search_string').keyup(function(event) 
	{
		var search_text = $('#search_string').val();
		var rg = new RegExp(search_text,'gi');
		$('#category, .product').each(function()
		{
 			if($.trim($(this).html()).search(rg) == -1) 
 			{
				//$(this).parent().css('display', 'none');
				$('#movie_list').hide();
				
			}	
			else
			{
				//$(this).parent().css('display', '');
				$('#movie_list').show();
			}
		});		

		if (search_text == "")
		{
			$('#movie_list').hide();
			$("#page1").fadeIn();
		}
		else
		{
			$('#movie_list').show();
		}
	});
});
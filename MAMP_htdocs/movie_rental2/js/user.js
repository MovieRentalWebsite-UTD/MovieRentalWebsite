$(document).ready(function() 
{
    GetMovieList();
    Category_GeneralUser();
    Search_GeneralUser();
	$("#login_chk").click(function()
	{
		var username = $('#username').val();
    	var password = $('#password').val();

        $("#loginConfirm").hide();

    	$.ajax(
    	{
        	url: "php/login_chk.php",
        	data: "username=" + username + "&password=" + password,
        	type: "POST",
        	beforeSend:function()
        	{
            	$('#loading_div').show(); 
            	//beforeSend 發送請求之前會執行的函式
        	},
        	success:function(msg)
        	{
                var flag = msg.substring(0, 8);
                var firstname = msg.substring(9)

            	if(flag =="successY")
            	{
            		
            		$('#login').hide();
            		$('#logout').show();
                	$('#login_showname').text('Hello, Admin');
                    $("#loginForm").hide();
                    $("#registerForm").hide();
                	$("#recommended_products").fadeIn();
                    Category_Admin();
                    Search_Admin();           
                }
                else if(flag == "successN")
                {   
                    $('#login').hide();
                    $('#logout').show();
                    $('#login_showname').text('Hello, ' + firstname);
                    $("#loginForm").hide();
                    $("#registerForm").hide();
                    $("#recommended_products").fadeIn();
                    Category_GeneralUser();
                    Search_GeneralUser();
                }
                else
                {
                    $('#error_msg').text('The username or password you entered is incorrect. Please try again.');
                }
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

function GetMovieList(){
            $.ajax(
            {
                url:"php/getMovieList.php",
                type: "GET",
                beforeSend:function(){
                },
                success:function(movies){
                    console.log('success',movies);
                    $(".product_list_table tr").last().after(movies);
                    // $.ajax(
                    // {
                    //     url:"php/getMovieList_not_in_record.php",
                    //     type: "GET",
                    //     beforeSend:function(){
                    //     },
                    //     success:function(moviess){
                    //         console.log('success',moviess);
                    //         $(".product_list_table tr").last().after(moviess);
                    //  },error:function(xhr){
                    //         alert('Ajax request fail');
                    //     },
                    //     complete:function(){
                    //     }
                    // });
                },error:function(xhr){
                    alert('Ajax request fail');
                },
                complete:function(){
                }
            }); 

            $.ajax(
            {
                url:"php/getMovieCategoryList.php",
                type: "GET",
                beforeSend:function(){
                },
                success:function(movies){
                    console.log('success',movies);
                    $(".product_category_list_table tr").last().after(movies);
                },error:function(xhr){
                    alert('Ajax request fail');
                },
                complete:function(){
                }
            });
    }

    function Category_Admin(){
        $('#category_action,#action').click(function() {
            var search_text = $.trim($('#action').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_Admin();                    
            $('#movie_category_list').show(550);
         });

        $('#category_adventure,#adventure').click(function() {
            var search_text = $.trim($('#adventure').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_Admin(); 
            $('#movie_category_list').show(550);
        });

        $('#category_animation,#animation').click(function() {
            var search_text = $.trim($('#animation').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_Admin(); 
            $('#movie_category_list').show(550);
        });

        $('#category_fantasy, #fantasy').click(function() {
            var search_text = $.trim($('#fantasy').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_Admin(); 
            $('#movie_category_list').show(550);
        });

        $('#category_horror,#horror').click(function() {
            var search_text = $.trim($('#horror').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_Admin();         
            $('#movie_category_list').show(550);
        });

        $('#category_romance,#romance').click(function() {
            var search_text = $.trim($('#romance').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_Admin(); 
            $('#movie_category_list').show(550);
        });

    }

    function Show_Hide_Cate_Admin(){
        //Show product_category_list_table
        //$(".product_category_list_table").show();                   
        $(".product_category_list_table tr").children("th").last().show();
        $(".product_category_list_table tr").children("th").last().prev().show();
        $(".product_category_list_table tr").children("th").last().prev().prev().hide();
        $(".product_category_list_table tr").children("td:last-child").show();
        $(".product_category_list_table tr").children("td:last-child").prev().show();
        $(".product_category_list_table tr").children("td:last-child").prev().prev().hide();
    }

    function Search_Admin(){
        $('#search_string').keyup(function(event) {
            var search_text = $('#search_string').val();
            var rg = new RegExp(search_text,'gi');
                $('#category, .product').each(function(){
                if($.trim($(this).html()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
                //Show product_list_table
                    //$(".product_list_table").show();
                    $(".product_list_table tr").children("th").last().show();
                    $(".product_list_table tr").children("th").last().prev().show();
                    $(".product_list_table tr").children("th").last().prev().prev().hide();
                    $(".product_list_table tr").children("td:last-child").show();
                    $(".product_list_table tr").children("td:last-child").prev().show();
                    $(".product_list_table tr").children("td:last-child").prev().prev().hide();
                    //Show add_item and update item div
                    $("#product_input").show();
                    //$("#product_update").show();
                    Show_Hide_Cate_Admin();
                });
        });

    }

    function Category_GeneralUser(){
        $('#category_action,#action').click(function() {
            var search_text = $.trim($('#action').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_GeneralUser();                    
            $('#movie_category_list').show(550);
         });

        $('#category_adventure,#adventure').click(function() {
            var search_text = $.trim($('#adventure').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_GeneralUser(); 
            $('#movie_category_list').show(550);
        });

        $('#category_animation,#animation').click(function() {
            var search_text = $.trim($('#animation').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_GeneralUser(); 
            $('#movie_category_list').show(550);
        });

        $('#category_fantasy, #fantasy').click(function() {
            var search_text = $.trim($('#fantasy').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_GeneralUser(); 
            $('#movie_category_list').show(550);
        });

        $('#category_horror,#horror').click(function() {
            var search_text = $.trim($('#horror').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_GeneralUser();         
            $('#movie_category_list').show(550);
        });

        $('#category_romance,#romance').click(function() {
            var search_text = $.trim($('#romance').text());
            var rg = new RegExp(search_text,'gi');
            $('.category_category').each(function(){
                if($.trim($(this).text()).search(rg) == -1) {
                    $(this).parent().css('display', 'none');
                }   
                else{
                    $(this).parent().css('display', '');
                }
            });
            Show_Hide_Cate_GeneralUser(); 
            $('#movie_category_list').show(550);
        });

    }

    function Show_Hide_Cate_GeneralUser(){
            //Show product_category_list_table
            $(".product_category_list_table tr").children("th").last().hide();
            $(".product_category_list_table tr").children("th").last().prev().hide();
            $(".product_category_list_table tr").children("td:last-child").hide();
            $(".product_category_list_table tr").children("td:last-child").prev().hide();
    }

    function Search_GeneralUser(){
        $('#search_string').keyup(function(event) {
            var search_text = $('#search_string').val();
            var rg = new RegExp(search_text,'gi');
                $('#category, .product').each(function(){
                    if($.trim($(this).html()).search(rg) == -1) {
                        $(this).parent().css('display', 'none');
                    }   
                    else{
                        $(this).parent().css('display', '');
                     }
                        //Show product_list_table
                        $(".product_list_table tr").children("th").last().hide();
                        $(".product_list_table tr").children("th").last().prev().hide();
                        $(".product_list_table tr").children("td:last-child").hide();
                        $(".product_list_table tr").children("td:last-child").prev().hide();
                        //Show add_item and update item div
                        $("#product_input").hide();
                        $("#product_update").hide();
                        Show_Hide_Cate_GeneralUser();
                }); 
                $('#page1').hide();
                $('#page2').hide();
                $('#movie_list').show();
        });
    }

    function Hide_MovieList_MovieCateList_Cart_His()
    {
        $('#movie_list').hide(550);
        $('#movie_category_list').hide(550);
        $("#myCart").hide(550);
        $("#myHis").hide(550);
        $("#recommended_products").fadeIn();
        $('#page1').fadeIn();
    }

    $('#home').click(function(){
        Hide_MovieList_MovieCateList_Cart_His();
    });

    $("#logout").click(function()
	{
		$.ajax(
		{
        	url:"php/logout.php",
        	type : "POST",
        	success:function(msg)
        	{
            	if(msg == "success")
            	{
            		$('#login').show();
            		$('#logout').hide();
                	$("#recommended_products").hide();
                    $('#login_showname').hide();
                    $("#registerForm").hide();
		            $("#loginForm").fadeIn();
		            $("#logout_status").text("Logout successfully!");   
                    Hide_MovieList_MovieCateList_Cart_His();
            	}
            	else
            	{    
                	$('#error_msg').html('Sign out failed, please try again.');
            	}
                Category_GeneralUser();
                Search_GeneralUser();	
        	},
        	error:function(xhr)
        	{
            	alert('Ajax request 發生錯誤');
        	},
        	complete:function()
        	{
            	$('#loadingout_div').hide();
            	$('#user_login').fadeIn();     
        	}
    	});		
	})

    $("#register").click(function()
    {
        $("#recommended_products").hide();
        $("#loginForm").hide();
        $("#registerForm").fadeIn();
    })

    $("#register_chk").click(function()
    {
        var username = $('#username_r').val();
        var password = $('#password_r').val();
        var password_chk = $('#c_password').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();

        if(username == "")
        {
            $('#errorinfo').text('Please enter username.');
        }
        else if (firstname == "") 
        {
            $('#errorinfo').text('Please enter firstname.');
        }
        else if (lastname == "")
        {
            $('#errorinfo').text('Please enter lastname.');
        }
        else if (!email.match("@"))
        {
            $('#errorinfo').text('Please enter valid email.');
        }
        else if (!password.match(/[A-Za-z]/) || !password.match(/[0-9]/) || !password.length > 7)
        {
            $('#errorinfo').text('Please enter valid password. Must contain one or more uppercase letters and lowercase letters, and at least 8 letters.');
        }
        else if (password != password_chk)
        {
            $('#errorinfo').text('Please confirm your password again.');
        }
        else
        {
            $.ajax(
            {
                url:"php/register.php",
                data: "username=" + username + "&password=" + password + "&firstname=" + firstname + "&lastname=" + lastname + "&email=" + email,
                type : "POST",
                success:function(msg)
                {
                    if(msg == "success")
                    {
                        $('#login').hide();
                        $('#logout').show();
                        $('#login_showname').text('Hello, ' + username);
                        $("#loginForm").hide();
                        $("#registerForm").hide();
                        $("#recommended_products").fadeIn();
                    }
                    else if(msg == "error1")
                    {
                        $('#errorinfo').text('This email has already registered, please try another.');
                    }
                    else
                    {
                        $('#errorinfo').text('This username has already registered, please try another.');
                    }
                },
                error:function(xhr)
                {
                    alert('Ajax request 發生錯誤');
                },
                complete:function()
                {
                    $('#loadingout_div').hide();
                    $('#user_login').fadeIn();     
                }
            });
        }
    })
});
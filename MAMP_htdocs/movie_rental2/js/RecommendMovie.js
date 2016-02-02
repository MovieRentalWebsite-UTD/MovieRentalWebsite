$(document).ready(function(){
		
	$("#prev").click(function(){
		showPage1();
	})

	$("#click2").click(function(){
		showPage2();
	})

	$("#click1").click(function(){
		showPage1();
	})

	$("#next").click(function(){
		showPage2();
	})

	function showPage1(){
		$("#click1").addClass("active");
		$("#click2").removeClass("active");
		$("#page1").show();
		$("#page2").hide();
	}

	function showPage2(){
		$("#click2").addClass("active");
		$("#click1").removeClass("active");
		$("#page2").show();
		$("#page1").hide();
	}
})
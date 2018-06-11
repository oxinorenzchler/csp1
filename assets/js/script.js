$(document).ready(function(){
 
}) 
$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".black").css("background" , "red");
	  }

	  else{
		  $(".black").css("background" , "blue");  	
	  }
  })
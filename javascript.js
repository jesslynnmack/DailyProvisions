$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });
    
});
//when morning button is clicked hide all other menu sections
$("#morning-btn").click(function(){
    $("#day").hide();
    $("#night").hide();
    $("#drinks").hide();
  });
  $("#morning-btn").click(function(){
    $("#morning").show();
  });
//   when day button is clicked hide all other menu sections
  $("#day-btn").click(function(){
    $("#morning").hide();
    $("#night").hide();
    $("#drinks").hide();
  });
  $("#day-btn").click(function(){
    $("#day").show();
  });
//when night button is clicked hide all other menu sections
$("#night-btn").click(function(){
    $("#morning").hide();
    $("#day").hide();
    $("#drinks").hide();
  });
  $("#night-btn").click(function(){
    $("#night").show();
  });
//when drinks button is clicked hide all other menu sections
$("#drinks-btn").click(function(){
    $("#morning").hide();
    $("#day").hide();
    $("#night").hide();
  });
  $("#drinks-btn").click(function(){
    $("#drinks").show();
  });

// navigation transition on scroll
$(window).scroll(function(){
  //if scrolled more than 50
    if($(document).scrollTop() > 50){
      //add scrolled nav class and float right class
        $('nav').addClass('scrolled-nav');
        $('.scrolled-nav ul').addClass('float-right')
    }else {
      // if not scrolled past 50 remove scrolled and float classes
      $('.scrolled-nav ul').removeClass('float-right');
        $('nav').removeClass('scrolled-nav');
    };
});

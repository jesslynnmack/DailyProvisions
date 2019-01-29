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
//morning
$("#morning-btn").click(function(){
    $("#day").hide();
    $("#night").hide();
    $("#drinks").hide();
  });
  $("#morning-btn").click(function(){
    $("#morning").show();
  });
//   day
  $("#day-btn").click(function(){
    $("#morning").hide();
    $("#night").hide();
    $("#drinks").hide();
  });
  $("#day-btn").click(function(){
    $("#day").show();
  });
//night
$("#night-btn").click(function(){
    $("#morning").hide();
    $("#day").hide();
    $("#drinks").hide();
  });
  $("#night-btn").click(function(){
    $("#night").show();
  });
//drinks
$("#drinks-btn").click(function(){
    $("#morning").hide();
    $("#day").hide();
    $("#night").hide();
  });
  $("#drinks-btn").click(function(){
    $("#drinks").show();
  });

$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $('nav').addClass('scrolled-nav');
    }else {
        $('nav').removeClass('scrolled-nav');
    };
});

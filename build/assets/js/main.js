AOS.init({ 
  debounceDelay: 50,
  once: false,  
});

$(".sliderbanner").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: true,
    autoHeight: true,
    loop: true,
    nav: false,
    fade: true,
    items: 1,
    autoplayHoverPause: true, 
  });

  $(".ourmission_slider").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: false,
    autoHeight: true,
    loop: true,
    nav: true,
    fade: true,
    items: 1,
    autoplayHoverPause: true, 
  });


  $('.mobile_link').click(function(e) {
      var active=$(this).parent().hasClass('active');
      $('.mobilemenus_box').removeClass('active');
      if(active){

      }else{
          $(this).parent().addClass('active');
      
      }
  }); 
  i 

    


   
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
      $(".header_main").addClass("header-fixed");
  } else {
      $(".header_main").removeClass("header-fixed");
  }
});  

 
$(document).ready(function(){
  $(".toggle").click(function(){
    $(".nav_elements").toggleClass('nav_elements_active');
    $(".nav_elements").slideToggle(400);
    $(".toggle").toggleClass('toggle_active');
  })
  $(window).resize(function(){
    if ($(window).width() <= 768){
      $(".nav_elements").css("display", "none");
    }	else {
      $(".nav_elements").css("display", "flex");
    }
  });
})

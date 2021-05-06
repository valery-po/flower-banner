$(document).ready(function(){
   $('.text .line span').click(function() {
   $(".img .front, .img .back").css("transform", "scale(.3)");
    let imgSrc = $(this).attr("data-src");
     
     setTimeout(function(){
    $(".img .front, .img .back").css("transform", "scale(1)");
     }, 700);
    $(".img .front, .img .back").attr("src", imgSrc);
});
  
  
});
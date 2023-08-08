$(document).ready(function() {

 $('.top a').click(function(event) {
  event.preventDefault(); // disable href='#' function
  $('html,body').animate({
    scrollTop: 0
  }, 1000); // 1000 ms
 });

});
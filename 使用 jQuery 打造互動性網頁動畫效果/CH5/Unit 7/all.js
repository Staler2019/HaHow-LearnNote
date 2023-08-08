$(document).ready(function () {
    // big
  $(".font-b").click(function (e) {
    e.preventDefault();

    $(".content p").css("font-size", "20px");
  });
    // medium
  $(".font-m").click(function (e) {
    e.preventDefault();

    $(".content p").css("font-size", "16px");
  });
    //small
  $(".font-s").click(function (e) {
    e.preventDefault();

    $(".content p").css("font-size", "13px");
  });
$('.ad-close').click(function (e) {
    e.preventDefault();

    $('.ad').fadeOut();
});
});

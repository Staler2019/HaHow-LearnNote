$(document).ready(function () {
  $(".menu li").click(function (e) {
    e.preventDefault();

    // $('.menu li').addClass('active');
    $(this).addClass("active"); // means the clicked one add active class
  });
});

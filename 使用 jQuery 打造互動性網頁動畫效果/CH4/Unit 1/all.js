$(document).ready(function () {
  $(".button").click(() => {
    //   $(".text").slideDown(10000); // ms // 下滑 open
      $(".text").slideToggle(2000);
    //   $(".text").slideUp(); // 上滑 close
  });
});

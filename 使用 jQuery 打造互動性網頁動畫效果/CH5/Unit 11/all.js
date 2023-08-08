$(document).ready(function () {
  $(".open").click(function (e) {
    e.preventDefault();

    $(".box").addClass("animate__animated animate__shakeX");
  });

  $(".box").on("animationend", function () {
    // 監聽當動畫結束後移除 class
    $(this).removeClass("animate__animated animate__shakeX");
  });
});

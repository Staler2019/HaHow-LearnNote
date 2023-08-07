$(document).ready(function () {
  $(".open").click(function (e) {
    $(".box1").delay().slideDown();
    $(".box2").delay(1000).slideDown();
    // $(".box3").delay(2000).slideDown();
    $(".box3").delay(2000).show(0);
    // $(".box3").delay(2000).show(); // show 未寫 0 會造成該行的 delay() 沒有作用，會直接show出來
  });
});

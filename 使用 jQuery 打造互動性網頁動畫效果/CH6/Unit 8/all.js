$(document).ready(function () {
  // click: 要分先後順序撰寫
  //   $(".box1").html("<h1>用 jQuery 動態產生的</h1>");
  $("h1").click((e) => {
    e.preventDefault();

    alert("有效！");
  });
  $(".box1").html("<h1>用 jQuery 動態產生的</h1>");

  // on: 不用分先後順序撰寫 => 事件、物件位置、function
  $(".wrap").on("click", "h1", (e) => {
    e.preventDefault();
  });
});

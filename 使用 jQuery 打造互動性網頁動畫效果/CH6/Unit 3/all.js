$(document).ready(function () {
  $(".menu li").click(function (e) {
    e.preventDefault();

    $(this).addClass("active").siblings().removeClass("active");
    // siblings 取得其他的同階層元素
    // $(this).siblings().removeClass("active").addClass("active");
    // 下面這個除了自己之外的同階層元素都會 active
  });
});

$(document).ready(function () {
  // 不用 '.cart a' 是因為我們只要 .cart, li, a 連成階層的 a 元素
  $('.cart > li > a').click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
  });
});
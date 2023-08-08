$(document).ready(function () {
    $('.start').click(function (e) {
        e.preventDefault();
        // stop 中斷動畫並使用新的動畫
        $('.box').stop().slideToggle(3000);
    });
});

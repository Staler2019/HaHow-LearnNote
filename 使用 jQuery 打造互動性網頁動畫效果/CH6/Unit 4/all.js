$(document).ready(function () {
$('.cart li').click(function (e) {
    e.preventDefault();

    $(this).find('h3').toggleClass('active');
    // find 找子元素
});
});

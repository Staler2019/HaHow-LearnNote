$(document).ready(function () {
    $('.dropdown').click(function (e) {
        e.preventDefault();

        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });
});

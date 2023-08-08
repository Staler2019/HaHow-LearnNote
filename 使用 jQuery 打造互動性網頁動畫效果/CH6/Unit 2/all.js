$(document).ready(function () {
  $(".addCart").click(function (e) {
    e.preventDefault();

    $(this).parent().toggleClass("active"); // assign to its nearest parent
  });
});

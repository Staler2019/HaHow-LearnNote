$(document).ready(function () {
  // $.ready(() => {})
  // $("#box").show(); // # : id

  $(".button1").click(() => {
    $(".title1").toggle(); // h1 跟 p
  });
  $(".button2").click(() => {
    $(".title2").toggle(); // h1 跟 p
  });
});

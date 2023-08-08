$(document).ready(function() {
  $('.remove').click(function(event) {
    /* Act on the event */
    $(this).parent().parent().remove(); // remove the selector in current html
    // $(this).parent().parent().hide(); // css -> display: none
  });
});
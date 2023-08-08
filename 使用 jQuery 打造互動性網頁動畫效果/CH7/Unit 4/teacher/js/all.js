$(document).ready(function () {
  $("a[href$='.doc']").addClass("fa fa-file-word-o"); // 如果 a 裡面的 href 有包含 .doc 就加上 class
  $("a[href$='.jpg']").addClass("fa fa-file-photo-o");
  $("a[href$='.zip']").addClass("fa fa-file-zip-o");
});

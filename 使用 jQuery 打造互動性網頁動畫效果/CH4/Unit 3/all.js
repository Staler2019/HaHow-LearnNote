$(document).ready(function () {
  $(".button").click(() => {
    $(".text").toggleClass('active') // 增加或移除該 class
    // $(".text").addClass('active') // 增加該 class <-> DOMElement.classList.add('class')
    // $(".text").removeClass('active') // 移除該 class <-> DOMElement.classList.remove('class')
  });
});

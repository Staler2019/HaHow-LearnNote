$(document).ready(function () {
  // FIXME. fail using jQuery
  // $(".question h3").click((e) => {
  //   e.preventDefault();

  //   console.log(e);
  //   $(this).addClass("active");

  //   $(this).toggleClass("active");
  //   $(this).parent().find("p").slideToggle();
  //   $(this).parent().siblings().find("p").slideUp();
  //   $(this).parent().siblings().find("h3").removeClass("active");
  // });

  // normal js
  h3s = document.querySelectorAll(".question h3");
  // console.log(h3s);
  h3s.forEach((h3Element) => {
    h3Element.addEventListener("click", () => {
      let noActive = true;

      h3Element.classList.forEach((h3Class) => {
        if (h3Class === "active") {
          noActive = false;
        }
      });

      if (noActive) {
        h3Element.classList.add("active");
      } else {
        h3Element.classList.remove("active");
      }
    });
  });
});

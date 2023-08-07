const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const track = carousel.querySelector(".slide-track");
const prevBtn = carousel.querySelector(".prev-btn");
const nextBtn = carousel.querySelector(".next-btn");
const navigator = carousel.querySelector(".navigator");
const indicator = navigator.querySelectorAll(".indicator");
let currentIndex = 0;

function setupSlides() {
  //  console.log(slides);

  const w = track.clientWidth;

  slides.forEach((slide, i) => {
    slide.style.left = `${w * i}px`; // `normal_str${VARs}normal_str`
  });

  updateNavigatorButtons(currentIndex);
}

function moveSlides(index) {
  const w = track.clientWidth;
  track.style.transform = `translateX(-${w * index}px)`;

  updateNavigatorButtons(index);
  updateIndicator(index);
}

function updateNavigatorButtons(index) {
  if (index === 0) {
    prevBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
  } else if (index === slides.length - 1) {
    prevBtn.classList.remove("hide");
    nextBtn.classList.add("hide");
  } else {
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
  }
}

function updateIndicator(index) {
  indicator.forEach((indicator, i) => {
    // if (Number(indicator.dataset.index) === index) {
    //   indicator.classList.add("active");
    // } else {
    //   indicator.classList.remove("active");
    // }
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  moveSlides(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  moveSlides(currentIndex);
});

navigator.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.matches("button")) {
    // console.log("yes")
    const dot = e.target;
    // console.log(dot.dataset);
    const dotIndex = Number(dot.dataset.index); // attribute: data-{VARIABLE}="{VALUE}" (html) => DOM.dataset.VARIABLE="{VALUE}" (js)

    currentIndex = dotIndex;
    moveSlides(currentIndex);
  }
});

setupSlides();

// TODO. window resize
// TODO. change picture in some seconds

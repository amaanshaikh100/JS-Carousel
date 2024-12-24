const sliderContainer = document.querySelector(".slider__container");
const sliderRight = document.querySelector(".slider__btn-right");
const sliderLeft = document.querySelector(".slider__btn-left");
const sliders = document.querySelectorAll(".slider");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
let maxSlide = sliders.length;

const createDots = function () {
  sliders.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const moveSlide = function (slide) {
  sliders.forEach((slider, i) => {
    slider.style.transform = `translateY(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  moveSlide(curSlide);
  activeDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  moveSlide(curSlide);
  activeDots(curSlide);
};

sliderRight.addEventListener("click", nextSlide);
sliderLeft.addEventListener("click", prevSlide);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    moveSlide(slide);
    activeDots(slide);
  }
});

setInterval(function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  activeDots(curSlide);
  moveSlide(curSlide);
}, 3000);

function init() {
  createDots();
  moveSlide(0);
  activeDots(0);
}

init();

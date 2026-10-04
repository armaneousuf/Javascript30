function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".site-wrap img");
function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    const windowBottom = (window.scrollY + window.innerHeight);
    const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
    const isTopShown = windowBottom > sliderImage.offsetTop;
    const isNotScrolledPassed = window.scrollY < imageBottom;
    if (isTopShown && isNotScrolledPassed) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));

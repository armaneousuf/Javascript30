// This is the modern method of doing the scrolling slide-in

const sliderImages = document.querySelectorAll(".site-wrap img");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, {threshold: 0.1});

sliderImages.forEach((img) => {
  observer.observe(img);
});

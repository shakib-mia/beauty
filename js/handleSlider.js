$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 40,
  });
});

function handleSlideChange(slide, direction) {
  document.querySelector(`#${slide} .owl-${direction}`).click();
}

document
  .getElementById("testimonial-prev")
  .addEventListener("click", () =>
    handleSlideChange("testmonial-slide", "prev")
  );

document
  .getElementById("testimonial-next")
  .addEventListener("click", () =>
    handleSlideChange("testmonial-slide", "next")
  );

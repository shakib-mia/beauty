import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: true,
    duration: 1000,
  });
  // Lenis initialization and other code here
});

const date = new Date();

document.getElementById("dev-year").innerText = date.getFullYear();

const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

document.getElementById("scroll-image").addEventListener("click", handleScroll);

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= window.innerHeight) {
    document.getElementById("scroll-image").style.display = "none";
  } else {
    document.getElementById("scroll-image").style.display = "block";
  }
});

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Navigation arrows
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementById("testimonial-prev").addEventListener("click", () => {
  document.getElementsByClassName("swiper-button-prev")[0].click();
});

document.getElementById("testimonial-next").addEventListener("click", () => {
  document.getElementsByClassName("swiper-button-next")[0].click();
});

import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const date = new Date();

document.getElementById("dev-year").innerText = date.getFullYear();

const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

document.getElementById("scroll-image").addEventListener("click", handleScroll);

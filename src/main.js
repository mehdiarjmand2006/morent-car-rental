import './style.css'
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}
document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     Like Buttons
  ========================= */

  document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");

      icon.classList.toggle("ri-heart-line");
      icon.classList.toggle("ri-heart-fill");
      icon.classList.toggle("text-red-500");
    });
  });


  /* =========================
     Cars Slider
  ========================= */

  const slider = document.querySelector("#cars-slider");
  const cards = document.querySelectorAll(".car-card");
  const dotsContainer = document.querySelector("#slider-dots");

  if (!slider || !cards.length || !dotsContainer) return;


  let currentIndex = 0;


  /* Create Slider Dots */

  const createDots = () => {
    dotsContainer.innerHTML = "";

    cards.forEach((_, index) => {
      const dot = document.createElement("button");

      dot.type = "button";

      dot.className =
        "slider-dot h-2 w-2 rounded-full bg-datil/30 transition-all duration-300";

      dot.setAttribute(
        "aria-label",
        `Go to car ${index + 1}`
      );

      dot.addEventListener("click", () => {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start"
        });
      });

      dotsContainer.appendChild(dot);
    });

    updateDots();
  };


  /* Update Active Dot */

  const updateDots = () => {
    const cardWidth = cards[0].offsetWidth;

    if (!cardWidth) return;

    currentIndex = Math.round(
      slider.scrollLeft / cardWidth
    );

    const dots =
      dotsContainer.querySelectorAll(".slider-dot");

    dots.forEach((dot, index) => {
      if (index === currentIndex) {

        dot.classList.remove(
          "w-2",
          "bg-datil/30"
        );

        dot.classList.add(
          "w-5",
          "bg-bluee"
        );

      } else {

        dot.classList.remove(
          "w-5",
          "bg-bluee"
        );

        dot.classList.add(
          "w-2",
          "bg-datil/30"
        );

      }
    });
  };


  /* Initialize */

  createDots();


  /* Detect Scroll */

  slider.addEventListener(
    "scroll",
    updateDots,
    { passive: true }
  );


  /* Detect Resize */

  window.addEventListener(
    "resize",
    updateDots
  );
});
const slider = document.getElementById("cars-slider");

function scrollNext() {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: "smooth"
    });
}

function scrollPrev() {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: "smooth"
    });
}
const filterToggle = document.getElementById("filter-toggle");
const filterSidebar = document.getElementById("filter-sidebar");

filterToggle.addEventListener("click", () => {
    filterSidebar.classList.toggle("-translate-x-full");
});
const mainCarImage = document.getElementById("main-car-image");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {

    // Change main image
    mainCarImage.src = item.dataset.image;

    // Remove active border
    galleryItems.forEach((galleryItem) => {
      galleryItem.classList.remove("border-[#3563E9]");
      galleryItem.classList.add("border-transparent");
    });

    // Add active border
    item.classList.remove("border-transparent");
    item.classList.add("border-[#3563E9]");
  });
});
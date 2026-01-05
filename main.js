// Loading screen
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 800);
});

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("active");
  navMenu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");

  // Prevent scrolling when menu is open
  document.body.style.overflow = isOpen ? "hidden" : "auto";
});

// Close menu when clicking a link
navMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";

    // Smooth scroll to section
    const href = a.getAttribute("href");
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const nav = document.querySelector("nav");
  if (!nav.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Parallax effect for hero section
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".beranda");
  if (hero) {
    hero.style.backgroundPositionY = scrolled * 0.5 + "px";
  }
});

// Close mobile menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".service-card, .container2, .footer-info, .footer-social")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });

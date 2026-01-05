const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("active");
  navMenu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Tutup menu kalau klik link (mobile)
navMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Tutup menu kalau klik di luar navbar
document.addEventListener("click", (e) => {
  const nav = document.querySelector("nav");
  if (!nav.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector('nav'); // Mengambil elemen navbar
  if (window.scrollY > 90) {
    navbar.classList.add("scrolled"); // Menambahkan kelas 'scrolled' saat scroll
  } else {
    navbar.classList.remove("scrolled"); // Menghapus kelas 'scrolled' saat berada di posisi atas
  }
});
// Kalau resize ke desktop, pastikan menu mobile tertutup
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

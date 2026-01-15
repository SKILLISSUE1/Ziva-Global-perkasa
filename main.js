
      // Data untuk bahasa
      const translations = {
        id: {
          home: "BERANDA",
          about: "TENTANG KAMI",
          services: "LAYANAN KAMI",
          contact: "HUBUNGI KAMI",
          tagline: "Solusi Terpercaya untuk Kebutuhan Industri Anda",
          aboutTitle: "Tentang Kami",
          aboutText: "PT Ziva Global Perkasa adalah perusahaan yang menyediakan barang dan jasa berkualitas untuk memenuhi kebutuhan industri, dengan fokus pada solusi inovatif dan kepuasan pelanggan. Kami berkomitmen untuk memberikan produk dan layanan yang efisien dan sesuai dengan standar industri, didukung oleh tim profesional yang berpengalaman dan selalu berinovasi untuk mencapai hasil terbaik.",
          servicesTitle: "Layanan Kami",
          service1Title: "Pengadaan Barang",
          service1Desc: "Kami menyediakan pengadaan barang berkualitas tinggi untuk berbagai industri, dengan harga yang kompetitif dan pengiriman tepat waktu.",
          service2Title: "Pengadaan Jasa",
          service2Desc: "Kami juga mengkhususkan diri dalam pengadaan jasa profesional, mulai dari konsultasi hingga implementasi solusi khusus untuk kebutuhan Anda.",
          service3Title: "Logistik & Pengiriman",
          service3Desc: "Dengan jaringan yang luas, kami menyediakan layanan logistik dan pengiriman untuk memastikan barang sampai dengan aman dan tepat waktu.",
          learnMore: "Pelajari Lebih Lanjut",
          contactTitle: "Kontak Kami:",
          emailLabel: "Email",
          phoneLabel: "Telepon",
          addressLabel: "Alamat",
          addressText: "Komplek Angkasa Pura Blok L-5,<br>Gunung Sahari Utara, Sawah Besar,<br>Jakarta Pusat 10720",
          followTitle: "Ikuti Kami:",
          facebookLabel: "Facebook",
          instagramLabel: "Instagram",
          copyrightText: "&copy; 2026 PT Ziva Global Perkasa. All rights reserved.",
          languageButton: "EN"
        },
        en: {
          home: "HOME",
          about: "ABOUT US",
          services: "OUR SERVICES",
          contact: "CONTACT US",
          tagline: "Trusted Solutions for Your Industrial Needs",
          aboutTitle: "About Us",
          aboutText: "PT Ziva Global Perkasa is a company that provides quality goods and services to meet industrial needs, with a focus on innovative solutions and customer satisfaction. We are committed to providing efficient products and services that meet industry standards, supported by an experienced professional team that continuously innovates to achieve the best results.",
          servicesTitle: "Our Services",
          service1Title: "Goods Procurement",
          service1Desc: "We provide high-quality goods procurement for various industries, with competitive prices and timely delivery.",
          service2Title: "Services Procurement",
          service2Desc: "We also specialize in professional services procurement, from consultation to implementation of customized solutions for your needs.",
          service3Title: "Logistics & Shipping",
          service3Desc: "With our extensive network, we provide logistics and shipping services to ensure goods arrive safely and on time.",
          learnMore: "Learn More",
          contactTitle: "Contact Us:",
          emailLabel: "Email",
          phoneLabel: "Phone",
          addressLabel: "Address",
          addressText: "Komplek Angkasa Pura Blok L-5,<br>Gunung Sahari Utara, Sawah Besar,<br>Jakarta Pusat 10720",
          followTitle: "Follow Us:",
          facebookLabel: "Facebook",
          instagramLabel: "Instagram",
          copyrightText: "&copy; 2026 PT Ziva Global Perkasa. All rights reserved.",
          languageButton: "ID"
        }
      };

      // Status bahasa saat ini
      let currentLanguage = 'id';
      const languageToggle = document.getElementById('languageToggle');

      // Fungsi untuk mengganti bahasa
      function toggleLanguage() {
        currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
        
        // Update semua elemen dengan data-id
        document.querySelectorAll('[data-id]').forEach(element => {
          const key = element.getAttribute('data-id');
          if (translations[currentLanguage][key]) {
            if (element.tagName === 'A' && key === 'learnMore') {
              // Untuk link "Pelajari Lebih Lanjut"
              element.textContent = translations[currentLanguage][key];
            } else if (element.hasAttribute('data-id')) {
              // Untuk elemen lain
              element.innerHTML = translations[currentLanguage][key];
            }
          }
        });

        // Update tombol bahasa
        languageToggle.textContent = translations[currentLanguage].languageButton;
        
        // Simpan preferensi bahasa ke localStorage
        localStorage.setItem('language', currentLanguage);
      }

      // Fungsi untuk memuat bahasa dari localStorage
      function loadLanguage() {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
          currentLanguage = savedLanguage;
          if (currentLanguage === 'en') {
            toggleLanguage(); // Apply English translation
          }
        }
      }

      // Event listener untuk tombol bahasa
      languageToggle.addEventListener('click', toggleLanguage);

      // Loading screen
      window.addEventListener("load", function () {
        const loader = document.getElementById("loader");
        setTimeout(() => {
          loader.classList.add("hidden");
        }, 800);
        
        // Load bahasa setelah halaman selesai loading
        loadLanguage();
      });

      // Hamburger menu functionality
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("navMenu");

      hamburger.addEventListener("click", () => {
        const isOpen = hamburger.classList.toggle("active");
        navMenu.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.style.overflow = isOpen ? "hidden" : "auto";
      });

      // Close menu when clicking a link
      navMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "auto";

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
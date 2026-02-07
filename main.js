
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
          languageButton: "EN",
          filterAll: "Semua",
          filterPerdagangan: "Perdagangan",
          filterJasa: "Jasa & Layanan",
          filterIndustri: "Industri",
          filterLogistik: "Logistik & Transportasi",
          filterLainnya: "Lainnya"
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
          languageButton: "ID",
          filterAll: "All",
          filterPerdagangan: "Trade",
          filterJasa: "Services",
          filterIndustri: "Industry",
          filterLogistik: "Logistics & Transport",
          filterLainnya: "Others"
        }
      };

      // Data untuk layanan dengan kategori
      const servicesData = [
        {
          id: 1,
          category: "perdagangan",
          titleId: "Perdagangan Besar Pakaian",
          titleEn: "Wholesale Clothing Trade",
          descId: "Menyediakan perdagangan besar berbagai jenis pakaian dengan kualitas terbaik untuk kebutuhan industri dan ritel.",
          descEn: "Providing wholesale trade of various types of clothing with the best quality for industrial and retail needs.",
          image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          category: "perdagangan",
          titleId: "Perdagangan Besar Alat Tulis dan Gambar",
          titleEn: "Wholesale Stationery and Drawing Tools Trade",
          descId: "Distribusi alat tulis dan perlengkapan gambar untuk berbagai sektor pendidikan dan industri kreatif.",
          descEn: "Distribution of stationery and drawing equipment for various education sectors and creative industries.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          category: "perdagangan",
          titleId: "Perdagangan Besar Barang Cetakan dan Penerbitan",
          titleEn: "Wholesale Printing and Publishing Goods Trade",
          descId: "Menyediakan barang-barang cetakan dan penerbitan dalam berbagai format untuk kebutuhan korporat.",
          descEn: "Providing printing and publishing goods in various formats for corporate needs.",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          category: "perdagangan",
          titleId: "Perdagangan Besar Makanan dan Minuman",
          titleEn: "Wholesale Food and Beverage Trade",
          descId: "Distribusi makanan dan minuman berkualitas dengan jaminan keamanan pangan dan ketepatan waktu.",
          descEn: "Distribution of quality food and beverages with food safety guarantees and timeliness.",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 5,
          category: "jasa",
          titleId: "Reparasi Peralatan Rumah Tangga",
          titleEn: "Household Appliance Repair",
          descId: "Layanan reparasi profesional untuk peralatan rumah tangga dan peralatan rumah serta kebun.",
          descEn: "Professional repair services for household appliances and home and garden equipment.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 6,
          category: "jasa",
          titleId: "Penyediaan Tenaga Kerja",
          titleEn: "Workforce Provision",
          descId: "Menyediakan tenaga kerja berkualitas untuk periode waktu tertentu sesuai kebutuhan perusahaan.",
          descEn: "Providing quality workforce for specific time periods according to company needs.",
          image: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 7,
          category: "jasa",
          titleId: "Manajemen Sumber Daya Manusia",
          titleEn: "Human Resources Management",
          descId: "Layanan penyediaan dan manajemen SDM profesional untuk mendukung operasional perusahaan.",
          descEn: "Professional HR provision and management services to support company operations.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 8,
          category: "jasa",
          titleId: "Kebersihan Umum Bangunan",
          titleEn: "General Building Cleaning",
          descId: "Layanan kebersihan dan perawatan bangunan komersial dan residensial dengan standar tinggi.",
          descEn: "Cleaning and maintenance services for commercial and residential buildings with high standards.",
          image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 9,
          category: "perdagangan",
          titleId: "Perdagangan Besar Mineral",
          titleEn: "Wholesale Mineral Trade",
          descId: "Distribusi mineral bukan logam untuk kebutuhan konstruksi dan industri manufaktur.",
          descEn: "Distribution of non-metallic minerals for construction and manufacturing industry needs.",
          image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 10,
          category: "perdagangan",
          titleId: "Perdagangan Bahan Bakar",
          titleEn: "Fuel Trade",
          descId: "Distribusi bahan bakar padat, cair, dan gas serta produk turunannya dengan kualitas terjamin.",
          descEn: "Distribution of solid, liquid, and gaseous fuels and their derivative products with guaranteed quality.",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 11,
          category: "jasa",
          titleId: "Reparasi Kapal dan Perahu",
          titleEn: "Ship and Boat Repair",
          descId: "Layanan reparasi dan perawatan kapal, perahu, serta bangunan terapung lainnya.",
          descEn: "Repair and maintenance services for ships, boats, and other floating structures.",
          image: "https://images.unsplash.com/photo-1564507004663-b6dfb3e2edea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 12,
          category: "perdagangan",
          titleId: "Perdagangan Besar Produk Lainnya",
          titleEn: "Wholesale Other Products",
          descId: "Distribusi berbagai produk lainnya yang belum tercakup dalam kategori perdagangan khusus.",
          descEn: "Distribution of various other products not covered in specific trade categories.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 13,
          category: "perdagangan",
          titleId: "Perdagangan Besar Alas Kaki",
          titleEn: "Wholesale Footwear Trade",
          descId: "Distribusi alas kaki berbagai jenis dan merk untuk kebutuhan industri dan ritel.",
          descEn: "Distribution of various types and brands of footwear for industrial and retail needs.",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 14,
          category: "jasa",
          titleId: "Penunjang Pertambangan",
          titleEn: "Mining Support",
          descId: "Layanan penunjang untuk industri pertambangan dan penggalian dengan teknologi terkini.",
          descEn: "Support services for mining and quarrying industries with the latest technology.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 15,
          category: "industri",
          titleId: "Konstruksi Gedung",
          titleEn: "Building Construction",
          descId: "Layanan konstruksi gedung lainnya dengan standar keamanan dan kualitas terbaik.",
          descEn: "Other building construction services with the best safety and quality standards.",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 16,
          category: "perdagangan",
          titleId: "Perdagangan Hasil Pertanian",
          titleEn: "Agricultural Products Trade",
          descId: "Distribusi bahan makanan dan minuman hasil pertanian dengan kualitas terbaik.",
          descEn: "Distribution of agricultural food and beverage materials with the best quality.",
          image: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 17,
          category: "perdagangan",
          titleId: "Perdagangan Minuman Non Alkohol",
          titleEn: "Non-Alcoholic Beverage Trade",
          descId: "Distribusi minuman non alkohol bukan susu untuk kebutuhan industri dan ritel.",
          descEn: "Distribution of non-alcoholic non-milk beverages for industrial and retail needs.",
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 18,
          category: "perdagangan",
          titleId: "Perdagangan Buah-buahan",
          titleEn: "Fruit Trade",
          descId: "Distribusi buah-buahan segar dan olahan dengan sistem rantai dingin yang terjamin.",
          descEn: "Distribution of fresh and processed fruits with guaranteed cold chain systems.",
          image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 19,
          category: "perdagangan",
          titleId: "Perdagangan Logam dan Bijih",
          titleEn: "Metal and Ore Trade",
          descId: "Distribusi logam dan bijih logam untuk kebutuhan industri manufaktur dan konstruksi.",
          descEn: "Distribution of metals and metal ores for manufacturing and construction industry needs.",
          image: "https://images.unsplash.com/photo-1576153643062-6932c7e7e97f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 20,
          category: "jasa",
          titleId: "Perdagangan Atas Dasar Kontrak",
          titleEn: "Contract-Based Trade",
          descId: "Layanan perdagangan berdasarkan kontrak atau fee dengan transparansi dan akuntabilitas.",
          descEn: "Trade services based on contracts or fees with transparency and accountability.",
          image: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 21,
          category: "logistik",
          titleId: "Angkutan Barang Khusus",
          titleEn: "Special Goods Transportation",
          descId: "Layanan angkutan bermotor untuk barang khusus dengan keamanan dan ketepatan waktu.",
          descEn: "Motorized transportation services for special goods with security and timeliness.",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 22,
          category: "perdagangan",
          titleId: "Perdagangan Mesin dan Peralatan",
          titleEn: "Machinery and Equipment Trade",
          descId: "Distribusi mesin, peralatan, dan perlengkapan industri dengan kualitas terjamin.",
          descEn: "Distribution of machinery, equipment, and industrial supplies with guaranteed quality.",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 23,
          category: "perdagangan",
          titleId: "Perdagangan Eceran Alat Tulis",
          titleEn: "Retail Stationery Trade",
          descId: "Distribusi eceran alat tulis menulis dan gambar untuk kebutuhan pendidikan dan kantor.",
          descEn: "Retail distribution of writing and drawing stationery for education and office needs.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 24,
          category: "jasa",
          titleId: "Jasa Penunjang Kantor",
          titleEn: "Office Support Services",
          descId: "Layanan fotokopi, penyiapan dokumen, dan aktivitas penunjang kantor lainnya.",
          descEn: "Photocopy services, document preparation, and other office support activities.",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 25,
          category: "industri",
          titleId: "Industri Percetakan Umum",
          titleEn: "General Printing Industry",
          descId: "Layanan percetakan umum untuk berbagai kebutuhan dengan teknologi cetak terkini.",
          descEn: "General printing services for various needs with the latest printing technology.",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 26,
          category: "perdagangan",
          titleId: "Perdagangan Berbagai Macam Barang",
          titleEn: "Various Goods Trade",
          descId: "Distribusi berbagai macam barang untuk kebutuhan industri dan komersial yang beragam.",
          descEn: "Distribution of various goods for diverse industrial and commercial needs.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 27,
          category: "jasa",
          titleId: "Jasa Penunjang Percetakan",
          titleEn: "Printing Support Services",
          descId: "Layanan jasa penunjang untuk industri percetakan dengan teknologi terkini.",
          descEn: "Support services for the printing industry with the latest technology.",
          image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 28,
          category: "jasa",
          titleId: "Agen Perjalanan Wisata",
          titleEn: "Travel Agency Services",
          descId: "Layanan agen perjalanan wisata dengan paket lengkap dan harga kompetitif.",
          descEn: "Travel agency services with complete packages and competitive prices.",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 29,
          category: "jasa",
          titleId: "Biro Perjalanan Ibadah",
          titleEn: "Religious Travel Bureau",
          descId: "Layanan biro perjalanan khusus umrah dan haji dengan fasilitas lengkap.",
          descEn: "Special travel bureau services for Umrah and Hajj with complete facilities.",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ];

      // Kategori untuk filter
      const categories = [
        { id: 'all', nameId: 'Semua', nameEn: 'All' },
        { id: 'perdagangan', nameId: 'Perdagangan', nameEn: 'Trade' },
        { id: 'jasa', nameId: 'Jasa & Layanan', nameEn: 'Services' },
        { id: 'industri', nameId: 'Industri', nameEn: 'Industry' },
        { id: 'logistik', nameId: 'Logistik & Transportasi', nameEn: 'Logistics & Transport' },
        { id: 'lainnya', nameId: 'Lainnya', nameEn: 'Others' }
      ];

      // Status bahasa saat ini
      let currentLanguage = 'id';
      const languageToggle = document.getElementById('languageToggle');
      let currentFilter = 'all';

      // Fungsi untuk mengganti bahasa
      function toggleLanguage() {
        currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
        
        // Update semua elemen dengan data-id
        document.querySelectorAll('[data-id]').forEach(element => {
          const key = element.getAttribute('data-id');
          if (translations[currentLanguage][key]) {
            if (element.tagName === 'A' && key === 'learnMore') {
              element.textContent = translations[currentLanguage][key];
            } else if (element.hasAttribute('data-id')) {
              element.innerHTML = translations[currentLanguage][key];
            }
          }
        });

        // Update tombol bahasa
        languageToggle.textContent = translations[currentLanguage].languageButton;
        
        // Update filter buttons
        updateFilterButtons();
        
        // Update services content
        updateServicesContent();
        
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

      // Fungsi untuk membuat filter buttons
      function createFilterButtons() {
        const filtersContainer = document.getElementById('categoryFilters');
        filtersContainer.innerHTML = '';
        
        categories.forEach(category => {
          const button = document.createElement('button');
          button.className = 'filter-btn';
          if (category.id === 'all') {
            button.classList.add('active');
          }
          button.dataset.filter = category.id;
          button.textContent = currentLanguage === 'id' ? category.nameId : category.nameEn;
          button.addEventListener('click', () => filterServices(category.id));
          filtersContainer.appendChild(button);
        });
      }

      // Fungsi untuk update filter buttons saat bahasa berubah
      function updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((button, index) => {
          const category = categories[index];
          button.textContent = currentLanguage === 'id' ? category.nameId : category.nameEn;
        });
      }

      // Fungsi untuk membuat services cards
      function createServicesCards() {
        const container = document.getElementById('servicesContainer');
        container.innerHTML = '';
        
        servicesData.forEach(service => {
          const card = document.createElement('div');
          card.className = `service-card ${service.category}`;
          card.dataset.category = service.category;
          
          card.innerHTML = `
            <div class="service-image">
              <img src="${service.image}" alt="${currentLanguage === 'id' ? service.titleId : service.titleEn}">
            </div>
            <div class="service-content">
              <h3>${currentLanguage === 'id' ? service.titleId : service.titleEn}</h3>
              <p>${currentLanguage === 'id' ? service.descId : service.descEn}</p>
              <a href="#" class="btn" data-id="learnMore">${translations[currentLanguage].learnMore}</a>
            </div>
          `;
          
          container.appendChild(card);
        });
      }

      // Fungsi untuk update services content saat bahasa berubah
      function updateServicesContent() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
          const service = servicesData[index];
          if (service) {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            const btn = card.querySelector('.btn');
            
            title.textContent = currentLanguage === 'id' ? service.titleId : service.titleEn;
            desc.textContent = currentLanguage === 'id' ? service.descId : service.descEn;
            btn.textContent = translations[currentLanguage].learnMore;
          }
        });
      }

      // Fungsi untuk filter services dengan single selection
      function filterServices(category) {
        currentFilter = category;
        
        // Hapus semua active class
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Tambahkan active class hanya pada tombol yang dipilih
        document.querySelectorAll('.filter-btn').forEach(btn => {
          if (btn.dataset.filter === category) {
            btn.classList.add('active');
          }
        });
        
        // Filter cards
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.8s ease-out';
          } else {
            card.classList.add('hidden');
          }
        });
      }

      // Event listener untuk tombol bahasa
      languageToggle.addEventListener('click', toggleLanguage);

      // Loading screen
      window.addEventListener("load", function () {
        const loader = document.getElementById("loader");
        
        // Initialize services and filters
        createFilterButtons();
        createServicesCards();
        
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

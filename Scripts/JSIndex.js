// Mobile menu toggle
document
  .getElementById("mobileMenuBtn")
  .addEventListener("click", function () {
    document.getElementById("mainNav").classList.toggle("active");
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") return;

    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      document.getElementById("mainNav").classList.remove("active");
    }
  });
});

// Contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
    );
    this.reset();
  });

// Highlight active nav link on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#mainNav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
    
    // Also keep "Inicio" active when at the top
    if (scrollY < 100 && link.getAttribute("href") === "index.html") {
      link.classList.add("active");
    }
  });
});
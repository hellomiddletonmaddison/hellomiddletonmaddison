document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
      menuToggle.innerHTML = isExpanded ? "✕" : "☰";
    });

    // Close menu when clicking link inside
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
      });
    });
  }

  // Accordion Functionality for FAQs
  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const faqItem = toggle.closest(".faq-item");
      const isOpen = faqItem.classList.contains("active");

      // Close all other FAQ items for clean layout
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
      });

      // Toggle current item
      if (!isOpen) {
        faqItem.classList.add("active");
      }
    });
  });
});

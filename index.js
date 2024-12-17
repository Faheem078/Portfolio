document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeToggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  
    // Smooth scroll for navbar links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Contact form submission (mock)
    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for reaching out!");
      this.reset();
    });
  });
  
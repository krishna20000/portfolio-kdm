document.addEventListener('DOMContentLoaded', function () {
  // Loader
  window.addEventListener('load', function () {
      document.getElementById('loader').style.display = 'none';
  });

  //
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});



  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Typewriter Effect
  const typewriterText = "Krishna Dharmendra Mehta";
  const typewriterElement = document.getElementById('typewriter');
  let i = 0;

  function typeWriter() {
      if (i < typewriterText.length) {
          typewriterElement.innerHTML += typewriterText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
      }
  }

  typeWriter();

  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      themeToggle.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });


});
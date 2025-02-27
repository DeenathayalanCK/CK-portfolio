document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar2 = document.querySelector(".navbar2");
  
    if (!menuToggle) {
      console.error("Menu toggle button (#menu-toggle) not found.");
      return;
    }
    if (!navbar2) {
      console.error("Navbar container (.navbar2) not found.");
      return;
    }
  
    // Function to adjust the display of the navbar based on viewport width
    function adjustNavbarDisplay() {
      if (window.innerWidth < 768) {
        // On small screens, hide the navbar by default and show the toggle button
        navbar2.classList.remove("active");
        menuToggle.style.display = "block";
      } else {
        // On larger screens, show the navbar and hide the toggle button
        navbar2.classList.add("active");
        menuToggle.style.display = "none";
      }
    }
  
    // Initial check on page load
    adjustNavbarDisplay();
  
    // Adjust navbar on window resize
    window.addEventListener("resize", adjustNavbarDisplay);
  
    // Toggle the navbar when the hamburger button is clicked (only active on small screens)
    menuToggle.addEventListener("click", function() {
      navbar2.classList.toggle("active");
    });
  });
  
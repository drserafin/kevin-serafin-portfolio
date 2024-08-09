// Function to toggle the menu visibility and icon appearance
function toggleMenu() {
    // Find the element with the class 'menu-links' (this is the menu)
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
  
    // Toggle the 'open' class on the menu
    // If 'open' is present, it will be removed; if it's not present, it will be added
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


function toggleNav() {
  const navElement = document.querySelector(".navdrop");

  // Check if navElement contains 'hidden' class
  if (navElement.classList.contains("hidden")) {
    navElement.classList.remove("hidden"); // Remove 'hidden' class
  } else {
    navElement.classList.add("hidden"); // Add 'hidden' class
  }
}

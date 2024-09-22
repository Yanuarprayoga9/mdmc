function toggleSide() {
    const navElement = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    
    // Check if navElement contains 'hidden' class
    if (navElement.classList.contains('hidden')) {
        navElement.classList.remove('hidden'); // Remove 'hidden' class
        mainContent.classList.add('hidden'); // Remove 'hidden' class
    } else {
        mainContent.classList.remove('hidden'); // Remove 'hidden' class
        navElement.classList.add('hidden'); // Add 'hidden' class
    }
}

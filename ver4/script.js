const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarCloseButton = document.getElementById('sidebarClose'); // Get the close button
const header = document.getElementById('header'); // Get the header element

// Function to toggle sidebar and related elements
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Event listener for hamburger click
hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleSidebar();
});

// Event listener for NEW sidebar close button click
sidebarCloseButton.addEventListener('click', () => {
    toggleSidebar();
});


// Event listener for overlay click (to close sidebar)
overlay.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// Close sidebar on Escape key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// --- NEW: Header background change on scroll ---
window.addEventListener('scroll', () => {
    // Check if user has scrolled down more than a small threshold (e.g., 50px)
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Function to toggle sidebar and related elements
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle hamburger animation class
}

// Event listener for hamburger click
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from immediately closing sidebar via body click
    toggleSidebar();
});

// Event listener for overlay click (to close sidebar)
overlay.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// Optional: Close sidebar if user clicks outside of it (on the main body)
// document.body.addEventListener('click', (event) => {
//     // Check if the sidebar is active and the click was not on the sidebar or hamburger
//     if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && event.target !== hamburger && !hamburger.contains(event.target)) {
//          toggleSidebar();
//     }
// });

// Optional: Close sidebar on Escape key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});
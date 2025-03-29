const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    console.log('Dark mode toggle clicked'); // Debugging log
    body.classList.toggle('dark-mode');
    console.log('Dark mode class applied:', body.classList.contains('dark-mode')); // Check if class is applied

    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
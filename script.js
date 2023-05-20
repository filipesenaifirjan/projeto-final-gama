const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const bodyElement = document.body;

toggleDarkModeButton.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
});
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const h1Elements = document.querySelectorAll('h1');

    h1Elements.forEach(function(element, index) {
        setTimeout(function() {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 500); // Adjust the delay (in milliseconds) to control the timing between elements
    });
});

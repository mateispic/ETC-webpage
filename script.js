// Navigation menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');

            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });
});

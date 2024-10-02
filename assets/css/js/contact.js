document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    const contactOptions = document.getElementById('contact-options');

    if (contactOptions.style.display === 'none' || contactOptions.style.display === '') {
        contactOptions.style.display = 'block';
    } else {
        contactOptions.style.display = 'none';
    }
});
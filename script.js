window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
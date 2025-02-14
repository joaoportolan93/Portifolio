document.addEventListener('DOMContentLoaded', function() {
    const spotlight = document.querySelector('.spotlight-cursor');
    
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    });

    // Detecta hover nos textos com máscara
    const maskElements = document.querySelectorAll('.text-mask');
    maskElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            spotlight.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            spotlight.classList.remove('active');
        });
    });
});

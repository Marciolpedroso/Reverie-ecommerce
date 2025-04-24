document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const overlayMenu = document.getElementById('overlayMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    // Abrir menu
    menuToggle.addEventListener('click', function() {
        overlayMenu.style.display = 'block';
        setTimeout(() => {
            overlayMenu.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    });

    const items = document.querySelectorAll('.main-categories li');
    items.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
    item.style.opacity = '0';
    });
    
    // Fechar menu com animação
    function closeMenuWithAnimation() {
        overlayMenu.classList.remove('active');
        
        // Espera a animação terminar antes de esconder
        setTimeout(() => {
            overlayMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 400); // Deve corresponder ao tempo da transição (0.4s)
    }
    
    // Fechar menu pelo botão
    closeMenu.addEventListener('click', closeMenuWithAnimation);
    
    // Fechar ao clicar fora
    overlayMenu.addEventListener('click', function(e) {
        if (e.target === overlayMenu) {
            closeMenuWithAnimation();
        }
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlayMenu.classList.contains('active')) {
            closeMenuWithAnimation();
        }
    });
});
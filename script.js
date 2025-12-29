document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todas as imagens do carrossel
    const bgImages = document.querySelectorAll('.hero-bg-image');
    if (bgImages.length < 2) return; // Não faz nada se houver menos de 2 imagens

    let currentImageIndex = 0;
    const intervalTime = 5000; // Tempo de exibição de cada imagem (5 segundos)

    function changeBackgroundImage() {
        // 2. Remove a classe 'active' da imagem que está visível
        bgImages[currentImageIndex].classList.remove('active');

        // 3. Move para a próxima imagem (usando módulo para voltar à primeira)
        currentImageIndex = (currentImageIndex + 1) % bgImages.length;

        // 4. Adiciona a classe 'active' à próxima imagem
        bgImages[currentImageIndex].classList.add('active');
    }

    // 5. Inicia o loop de transição
    setInterval(changeBackgroundImage, intervalTime);
});
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    // Adiciona ou remove a classe 'active' que controla a posição no CSS
    menu.classList.toggle('active');
}
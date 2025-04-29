// Função para redirecionar para a página da pergunta
function iniciarPergunta() {
    window.location.href = 'novo projeto.html'; 
    // Redireciona para a página onde a pergunta será feita
}

// Função para redirecionar para a página final ao clicar em "Sim"
function responderSim() {
    window.location.href = '3 novo projeto.html'; 
    // Redireciona para a página onde confirma que a pessoa ama
}

function voltarPagina() {

    window.location.href = 'pagina principal.html';
}
// Movimentação aleatória do botão "Não" ao tocar nele
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
noBtn.addEventListener('click', () => {
    const newX = Math.floor(Math.random() * window.innerWidth - noBtn.offsetWidth);
    const newY = Math.floor(Math.random() * window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});



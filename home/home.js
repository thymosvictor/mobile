const filtroIcone = document.querySelector('.fa-filter');
const filtroOpcoes = document.querySelector('.filtro-opcoes');

filtroIcone.addEventListener('click', function() {
    // Alterna a visibilidade das opções
    filtroOpcoes.style.display = filtroOpcoes.style.display === 'block' ? 'none' : 'block';
});

// Função para aplicar o filtro
function filtrar() {
    const mesSelecionado = document.getElementById('mes').value;
    alert('Filtro aplicado para o mês: ' + mesSelecionado);
    filtroOpcoes.style.display = 'none'; // Esconde o filtro após aplicação
}
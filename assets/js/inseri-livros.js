const livroWrap = document.getElementById('livros');
const valorTotalDeLivros = document.getElementById('valor_total_livros_disponiveis');

const btnCategoria = document.querySelectorAll('.btn');
btnCategoria.forEach(btn => btn.addEventListener('click', filtrarLivros));

const btnOrdenacaoPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenacaoPreco.addEventListener('click', ordenaLivrosPorPreco);

/*Função para categorizar os elementos na tela*/
function filtrarLivros() {
    let elementoBotao = document.getElementById(this.id);
    let categoria = elementoBotao.value;

    let livrosFiltrados = categoria == 'disponiveis' ? livrosPorDisponibilidade() : livrosPorCategoria(categoria);
    insereLivros(livrosFiltrados);

    if (categoria == "disponiveis") {
        let soma = calcularPrecoTotalDosLivrosDisponiveis(livrosFiltrados);
        exibePrecoTotalDosLivros(soma);
    }

}

function calcularPrecoTotalDosLivrosDisponiveis(livros) {
    return livros.reduce((acc, livros) => acc + livros.preco, 0);
}

function livrosPorCategoria(categoria) {
    return livrosComDesconto.filter(livro => livro.categoria == categoria);
}

function livrosPorDisponibilidade() {
    return livrosComDesconto.filter(livro => livro.quantidade > 0);
}

function ordenaLivrosPorPreco() {
    let livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco);
    insereLivros(livrosOrdenados);

}

/*Função para inserir os livros de acordo com a categoria selecionada*/
function insereLivros(livros) {
    valorTotalDeLivros.innerHTML = '';
    livroWrap.innerHTML = '';

    livros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
        livroWrap.innerHTML += `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}a</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`;
    });

}

function exibePrecoTotalDosLivros(preco) {

    valorTotalDeLivros.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${preco.toFixed(2)}</span></p>
    </div>`;
}


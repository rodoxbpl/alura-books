
/*Função para carregar os dados de livros do arquivo json*/
async function carregaLivros() {
    var consultaApiLancamento = 'assets/json/ultimos-lancamentos.json';
    var consultaApiVendidos = 'assets/json/ultimos-vendidos.json';

    var consultaLivrosLancamento = await fetch(consultaApiLancamento);
    var livrosLancamentos = await consultaLivrosLancamento.json();

    var consultaLivrosVendidos = await fetch(consultaApiVendidos);
    var livrosMaisVendidos = await consultaLivrosVendidos.json();

    insereLivros(livrosLancamentos, livrosMaisVendidos);
}

carregaLivros();//Chamada função para carregar todos os livros na tela


/*Função para inserir os livros no html*/
function insereLivros(livroLancamento, livroVendido) {
    var livroWrapLancamento = document.getElementById('wrapper-lancamento');
    var livroWrapVendido = document.getElementById('wrapper-vendido');

    livroWrapLancamento.innerHTML = '';
    livroWrapVendido.innerHTML = '';

    livroLancamento.forEach(livro => {
        livroWrapLancamento.innerHTML += `<div class="swiper-slide"><img src="${livro.imagem}" 
        alt="${livro.alt}"></div>`;
    });

    livroVendido.forEach(livro => {
        livroWrapVendido.innerHTML += `<div class="swiper-slide"><img src="${livro.imagem}" 
        alt="${livro.alt}"></div>`;
    });
}

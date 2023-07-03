
var consultaLivrosConvertida = [];
var livrosComDesconto = [];

/*Função para carregar os dados de livros do arquivo json*/
async function carregaLivros() {
    var consultaApi = 'assets/json/livros.json';

    var consultaLivros = await fetch(consultaApi);
    consultaLivrosConvertida = await consultaLivros.json();
    livrosComDesconto = aplicaDesconto(consultaLivrosConvertida);

    insereLivros (livrosComDesconto);
}

function aplicaDesconto(consultaLivrosConvertida) {
    const desconto = 0.2;
    livrosComDesconto = consultaLivrosConvertida.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livrosComDesconto;
}

carregaLivros();//Chamada função para carregar todos os livros na tela

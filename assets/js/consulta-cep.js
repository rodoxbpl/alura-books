/****** Preenchimento endereço automático através da api viacep ******/

async function buscaEndereco(cep) {
  var formErro = document.getElementById('erro-form');
  formErro.classList.remove('formulario__erro');

  var mensagemErro = document.getElementById('erro-texto');
  mensagemErro.innerHTML = "";

  var imgErro = document.getElementById('erro-img');
  imgErro.classList.remove('erro__imagem');
  
  try {
    var consulta = `https://viacep.com.br/ws/${cep}/json/`;

    var consultaCep = await fetch(consulta);
    var consultaCepConvertida = await consultaCep.json();

    if (consultaCepConvertida.erro){
      throw Error('CEP não existente!');
    }

    atualizaCampoEndereco(consultaCepConvertida);
  } catch(erro) {
    formErro.classList.add('formulario__erro');
    mensagemErro.innerHTML = '<p class="erro__texto">CEP inválido. Tente novamente!</p>'
    imgErro.classList.add('erro__imagem');
  }
}

function atualizaCampoEndereco(consultaEndereco) {

  const logradouro = document.getElementById('endereco');
  logradouro.value = consultaEndereco.logradouro;

  const bairro = document.getElementById('bairro');
  bairro.value = consultaEndereco.bairro;

  const cidade = document.getElementById('cidade');
  cidade.value = consultaEndereco.localidade;

  const uf = document.getElementById('estado');
  uf.value = consultaEndereco.uf;
}

/** chamada callback após interação com campo de cep **/

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => {
  buscaEndereco(cep.value);
});

const btnFormulario = document.getElementById('enviar');
btnFormulario.addEventListener("submit", () => {
  window.location.href = "cadastro-finalizado.html";
});

  // var consultaCep = fetch('https://viacep.com.br/ws/31970170/json/')
// .then(resposta => resposta.json())
// .then(r => {
//   if (r.erro) {
//     throw Error('Esse cep não existe')
//   } else {
//     console.log(r)}})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído'));

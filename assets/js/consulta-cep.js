/****** Preenchimento endereço automático através da api viacep ******/

async function buscaEndereco() {

    var consulta = `https://viacep.com.br/ws/${cep.value}/json/`;
  
    var consultaCep = await fetch(consulta);
    var consultaCepConvertida = await consultaCep.json();
  
    atualizaCampoEndereco(consultaCepConvertida);
  }
  
  function atualizaCampoEndereco(consultaEndereco) {
    
    logradouro.value = consultaEndereco.logradouro;
  
    const bairro = document.getElementById('bairro');
    bairro.value = consultaEndereco.bairro;
  
    const cidade = document.getElementById('cidade');
    cidade.value = consultaEndereco.localidade;
  
    const uf = document.getElementById('estado');
    uf.value = consultaEndereco.uf;
  }
  
  
  /** chamada callback após interação com campo de cep **/
  const logradouro = document.getElementById('endereco');
  const cep = document.getElementById('cep');
  
  cep.onkeydown = function (evento) {
    if (evento.code === "Tab" || evento.code === "Enter") {
      buscaEndereco();
    }
  }
  
  logradouro.addEventListener("click", () => {
    buscaEndereco();
  });

  const btnFormulario = document.getElementById('enviar');
  btnFormulario.addEventListener("submit", () => {
    window.location.href = "cadastro-finalizado.html";
  })

  // var consultaCep = fetch('https://viacep.com.br/ws/31970170/json/')
// .then(resposta => resposta.json())
// .then(r => {
//   if (r.erro) {
//     throw Error('Esse cep não existe')
//   } else {
//     console.log(r)}})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído'));

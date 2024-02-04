const inTitulo = document.getElementById('inTitulo');
const inDuracao = document.getElementById('inDuracao');
const outTitulo = document.getElementById('outTitulo');
const outResposta = document.getElementById('outResposta');
const btConverte = document.getElementById('btConverter');

function converterDuracao() {
  const titulo = inTitulo.value;
  const duracao = Number(inDuracao.value);

  // arredonda para baixo o resultado da divisão
  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  // altera o conteúdo dos parágrafos de resposta
  outTitulo.textContent = titulo;
  outResposta.textContent = `${horas} hora(s) e ${minutos} minuto(s)`;
}

btConverte.addEventListener('click', converterDuracao);

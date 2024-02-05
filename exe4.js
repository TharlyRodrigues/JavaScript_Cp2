const gkValor = document.getElementById('gkValor');
const csCliente = document.getElementById('csCliente');
const btCalculo = document.getElementById('btCalculo');
const precoFinal = document.getElementById('precoFinal');

// função de calcular o consumo do cliente
function calcularPreco() {
  // Obtendo os valores como números
  const valor = Number(gkValor.value);
  const consumo = Number(csCliente.value);

  // Realizando o cálculo
  const valorFinal = (valor / 1000) * consumo;

  // Atualizando o conteúdo do elemento 'precoFinal'
  precoFinal.textContent = `Valor a Pagar R$: ${valorFinal.toFixed(2)}`;
}

btCalculo.addEventListener('click', calcularPreco);

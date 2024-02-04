/*Elaborar um programa para uma revenda de veículos. O programa deve
ler modelo e preço do veículo. Apresentar como resposta o valor da entrada
(50%) e o saldo em 12x. A Figura 2.9 ilustra uma execução desse programa.*/

const inVeiculo = document.getElementById('inVeiculo');
const inPreco = document.getElementById('inPreco');
const outVeiculo = document.getElementById('outVeiculo');
const outEntrada = document.getElementById('outEntrada');
const outParcela = document.getElementById('outParcela');
const btVerPromocao = document.getElementById('btVerPromocao');

function monstraPromocao() {
  const veiculo = inVeiculo.value;
  const preco = Number(inPreco.value);

  // calcula valor da entrada e das parcelas
  const entrada = preco * 0.5;
  const parcela = (preco * 0.5) / 12;

  // altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = `Promoção: ${veiculo}`;
  outEntrada.textContent = `Entrada R$: ${entrada.toFixed(2)}`;
  outParcela.textContent = `+ 12 de R$: ${parcela.toFixed(2)}`;
}

btVerPromocao.addEventListener('click', monstraPromocao);

// function monstrarOla() {
//   const nome = document.getElementById('name').value;
//   document.getElementById('resposta').textContent = 'Ola ' + nome;
// }

// const mostra = document.getElementById('mostra');
// mostra.onclick = monstrarOla;

// // forma mais moderna
function monstrarOla() {
  const name = document.getElementById('name').value;
  document.getElementById('resposta').textContent = `Olá ${name}`;
}

const mostra = document.getElementById('mostra');
mostra.addEventListener('click', monstrarOla);

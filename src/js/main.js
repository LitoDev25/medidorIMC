// Capturar evento do submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso Inválido', false);
    return
  }

  if (!altura) {
    setResultado('Altura Inválida', false);
    return
  }

  const imc = getImc(peso, altura);
  const nvlImc = getNvlImc(imc);

  const msg = `Seu nivel é ${imc} (${nvlImc})`;

  setResultado(msg, true);
})

function getNvlImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade gral 1', 'Obesidade gral 2', 'Obesidade gral 3', 'Você realmente deve ser uma pena!! de tão leve.',
    'A coisa ta muito feia, procure um medico imediatamente.'];

  if (imc >= 60) {
    return nivel[7];
  }

  if (imc <= 10) {
    return nivel[6];
  }

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc <= 18.4) {
    return nivel[0];
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2; // ou imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function makeP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';

  const p = makeP();

  if (isValid) {
    p.classList.add('resultParagraph');
  }
  else {
    p.classList.add('resultParagraphError');
  }
  p.innerHTML = msg;
  result.appendChild(p)
}

const timeL = document.quarySelector('#timeL');
const timeLs = new Date();
const options = {
  timeStyle = 'short';
};

timeL.innerHTML = timeLs.toLocaleDateString('pt-BR', options);

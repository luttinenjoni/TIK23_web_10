const randomnro1 = getRandomInt(10)
const randomnro2 = 2
const kirjoitettuTulos = document.getElementById('inputnro').innerHTML
const lasku = randomnro1 / randomnro2

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

document.getElementById('laskut').innerHTML = kirjoitettuTulos
const randomnro1 = getRandomInt(10)
const randomnro2 = 2
const lasku = randomnro1 / randomnro2
const button = document.getElementById("button")
const vastaus = document.getElementById("vastaus")


button.addEventListener('click', () =>
  {
    if (vastaus.value = lasku)
      alert("Oikein")
    else
      alert("Väärin vitun nuija")
  }
)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

document.getElementById('laskut').innerHTML = randomnro1 + " / " + randomnro2 + " ="
const myVideo = document.getElementById("my-video");

window.addEventListener("load", function () {
  var hearts = document.getElementsByClassName("heart");
  for (var i = 0; i < hearts.length; i++) {
    hearts[i].classList.add("animate");
  }
});

const texto =
  "Eu te amo desde o primeiro momento em que te vi. Não posso imaginar minha vida sem você e sei que você sente o mesmo por mim. Este site é minha maneira de mostrar o quanto você é importante para mim.";
const delay = 100;

let i = 0;

function escreverTexto() {
  const div = document.getElementById("texto-animado");

  if (i < texto.length) {
    div.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escreverTexto, delay);
  }
}

escreverTexto();

const texto2 =
  "Oii coração, enfim chegou o nosso dia e eu não tenho palavras, 1 ano é muita coisa, e sabe o melhor disso? Eu espero viver cada vez mais anos ao seu lado a cada dia que passa meu amor por vc só aumenta e isso é sem palavras. Tudo que eu tenho para falar nesse momento é obrigado e que venha muitos e muitos anos eu amo você minha princesa de covinha 🥹🤍";
const delay2 = 100;

let i2 = 0;

function escreverTexto2() {
  const div = document.getElementById("texto-animado2");

  if (i2 < texto2.length) {
    div.innerHTML += texto2.charAt(i2);
    i2++;
    setTimeout(escreverTexto2, delay2);
  }
}

const video = document.querySelector("video");

video.addEventListener("canplay", () => {
  video.play();
  video.setAttribute("loop", "");
});

function playVideo() {
  myVideo.play();
}

const loveBtn = document.querySelector("#love-btn");
const noLoveBtn = document.querySelector("#no-love-btn");

noLoveBtn.addEventListener("click", () => {
  noLoveBtn.classList.add("clicked");
});

// Seleciona o botão "eu te amo"
const botaoAmor = document.getElementById("love-btn");

// Seleciona o elemento HTML que contém o texto da pergunta
const textoPergunta = document.getElementById("texto-pergunta");

// Adiciona um evento de clique ao botão "eu te amo"
botaoAmor.addEventListener("click", function () {
  // Atualiza o conteúdo do elemento HTML com o novo texto
  textoPergunta.textContent = "Eu também te amo!";
  noLoveBtn.classList.add("clicked");
  loveBtn.classList.add("clicked");
  escreverTexto2();
});

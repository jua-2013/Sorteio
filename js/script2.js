setTimeout(function () {
  var inicio = document.getElementById("inicio");
  inicio.classList.add("hidden");
  var site = document.getElementById("site");
  site.classList.add("site2");
}, 1000);

//dica 1
function dica1() {
  notie.alert({
    type: "info",
    text: "Use números da sorte pessoais: Se você tem números que têm um significado especial para você, como datas de aniversário, casamento, etc., você pode optar por incluí-los.",
    time: 8,
  });
}
document.getElementById("img_money").addEventListener("click", dica1);

//dica 2
function dica2() {
  notie.alert({
    type: "info",
    text: "Jogue de forma responsável: Não baseie suas decisões financeiras na esperança de ganhar na loteria. Planeje suas finanças de forma prudente e não conte com os ganhos da loteria para atingir seus objetivos financeiros.",
    time: 8,
  });
}
document.getElementById("img_trevo").addEventListener("click", dica2);

//dica 3
function dica3() {
  notie.alert({
    type: "info",
    text: "Apostar sempre nos mesmos números aumentam suas chances de sair milionário!",
    time: 8,
  });
}
document.getElementById("img_luminaria").addEventListener("click", dica3);

let one = document.getElementById("select_1").value;
let two = document.getElementById("select_2").value;
let three = document.getElementById("select_3").value;
const numbersAndNumbers = [...document.querySelectorAll(".number-option")];

// verificar números
function erro() {
  one = document.getElementById("select_1").value;
  two = document.getElementById("select_2").value;
  three = document.getElementById("select_3").value;

  if (one == "" || two == "" || three == "") {
    notie.alert({ type: "error", text: "Escolha todos os 3 Números" });
    return true;
  } else if (one === two || one === three || two === three) {
    notie.alert({ type: "error", text: "Escolha Números diferentes." });
    return true;
  }
}
//hidden numbers
function numbers() {
  one = document.getElementById("select_1").value;
  two = document.getElementById("select_2").value;
  three = document.getElementById("select_3").value;
  let hidden = "hidden";

  numbersAndNumbers.map((n) => {
    if (n.value === one || n.value === two || n.value === three) {
      n.classList.add(hidden);
    } else {
      n.classList.remove(hidden);
    }
  });
}
document.getElementById("select_1").addEventListener("blur", numbers);
document.getElementById("select_2").addEventListener("blur", numbers);
document.getElementById("select_3").addEventListener("blur", numbers);

let max = 20;
let min = 1;

function result() {
  one = document.getElementById("select_1").value;
  two = document.getElementById("select_2").value;
  three = document.getElementById("select_3").value;

  if (erro()) {
    return;
  }

  let resultone = Math.floor(Math.random() * (max - min + 1)) + min;
  let resulttwo = Math.floor(Math.random() * (max - min + 1)) + min;
  let resulthree = Math.floor(Math.random() * (max - min + 1)) + min;

  one = parseInt(one);
  two = parseInt(two);
  three = parseInt(three);

  while (
    resultone == resulttwo ||
    resultone == resulthree ||
    resulttwo == resultone ||
    resulttwo == resulthree ||
    resulthree == resultone ||
    resulthree == resulttwo
  ) {
    resultone = Math.floor(Math.random() * (max - min + 1)) + min;
    resulttwo = Math.floor(Math.random() * (max - min + 1)) + min;
    resulthree = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (
    (resultone === one || resultone === two || resultone === three) &&
    (resulttwo === one || resulttwo === two || resulttwo === three) &&
    (resulthree === one ||
      resulthree === two ||
      resulthree === three ||
      resulthree === four)
  ) {
    notie.alert({
      type: "success",
      text:
        "Parabéns! Seus números escolhidos foram : " +
        one +
        ", " +
        two +
        ", " +
        three +
        ", " +
        " e os Números sorteados foram :" +
        resultone +
        ", " +
        resulttwo +
        ", " +
        resulthree +
        ", " +
        ". " +
        "Você ganhou 3 milhões de Reais!",
        time: 10,
    });
  } else {
    notie.alert({
      type: "neutral",
      text:
        "Seus Números escolhidos foram: " +
        one +
        ", " +
        two +
        ", " +
        three +
        ", " +
        " e os Números sorteados foram : " +
        resultone +
        ", " +
        resulttwo +
        ", " +
        resulthree +
        ", " +
        ". " +
        "Com esse resultado você ainda não se tornou um milionário.",
        time: 10,
    });
  }
}
document.getElementById("button_submit").addEventListener("click", result);

// aparecer no site
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const target = document.querySelectorAll("[data-anima]");
const anima = "anima";

function scrollBar() {
  const scroll = window.pageYOffset + window.innerHeight * 0.75;
  target.forEach(function (element) {
    if (scroll > element.offsetTop) {
      element.classList.add(anima);
    } else {
      element.classList.remove(anima);
    }
  });
}

window.addEventListener(
  "scroll",
  debounce(() => {
    scrollBar();
  }, 100)
);

//let body = document.querySelector("body");
//let h1 = document.querySelector("h1");
//body.removeChild(h1);

//let h1 = document.querySelector("#trocarcor");
//h1.style.color = "red";
//h1.style.background = "blue";
//h1.style.heigth = "20px";

//let body = document.querySelector("body");
//body.style.background = "red";

//var h1 = document.querySelector("h1");
//var paragrafo = document.querySelector("p");

//paragrafo.innerText = h1.innerText;


//function verificarCor() {

  //  let cor = document.getElementById("cor").value;
  //  let resultado = document.getElementById("resultado");

  //  document.body.style.backgroundColor = cor;

 //   if (cor == "#ff0000" ||
  //      cor == "#ffff00" ||
  //      cor == "#0000ff"){

  //      resultado.innerHTML = "Cor primária!";

 //   }
 //   else if (cor == "#00ff00" ||
 //              cor == "#ff00ff" ||
//               cor == "#00ffff"){

 //       resultado.innerHTML = "Cor secundária!";

//    }
 //   else {
      //  resultado.innerHTML = "Essa cor não está na lista de cores primárias ou secundárias.";
 //   }
//}

//let button = document.querySelector("button");

//button.addEventListener("click",function(){
 //   console.log("cliquei")
//});
    document.querySelector("button").addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  console.log("cliquei")
});

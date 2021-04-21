let puntajesUsuaria = document.querySelector(".puntaje-usuaria p");
let puntajeComputadora = document.querySelector(".puntaje-computadora p");

let puntosUsuaria = 0;
let puntosComputadora = 0;

let eleccionComputadora = "";
let eleccionUsuaria = "";

let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let resultadoTexto = document.querySelector(".resultado");

let manoUsuaria = document.querySelector(".mano-usuaria");
let manoComputadora = document.querySelector(".mano-computadora");
let tablero = document.querySelector(".tablero");

botonPiedra.onclick = () => {
  resultadoTexto.textContent = "🤨";
  manoComputadora.src = "./assets/piedra_computadora.png";
  manoUsuaria.src = "./assets/piedra.png";

  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando");
    eleccionUsuaria = "piedra";
    manoUsuaria.src = "./assets/piedra.png";
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000);
};

botonPapel.onclick = () => {
  resultadoTexto.textContent = "🤨";
  manoComputadora.src = "./assets/piedra_computadora.png";
  manoUsuaria.src = "./assets/piedra.png";

  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando");
    eleccionUsuaria = "papel";
    manoUsuaria.src = "./assets/papel.png";
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000);
};

botonTijera.onclick = () => {
  resultadoTexto.textContent = "🤨";
  manoComputadora.src = "./assets/piedra_computadora.png";
  manoUsuaria.src = "./assets/piedra.png";

  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando");
    eleccionUsuaria = "tijera";
    manoUsuaria.src = "./assets/tijera.png";
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000);
};

const decidirPuntaje = () => {
  if (eleccionComputadora == "piedra") {
    if (eleccionUsuaria == "piedra") {
      resultadoTexto.textContent = "Empate 🙃";
    } else if (eleccionUsuaria == "papel") {
      resultadoTexto.textContent = "Ganaste 🤩";
      puntosUsuaria++;
      puntajesUsuaria.textContent = puntosUsuaria;
    } else {
      resultadoTexto.textContent = "Perdiste 😬";
      puntosComputadora++;
      puntajeComputadora.textContent = puntosComputadora;
    }
  }
  if (eleccionComputadora == "papel") {
    if (eleccionUsuaria == "papel") {
      resultadoTexto.textContent = "Empate 🙃";
    } else if (eleccionUsuaria == "tijera") {
      resultadoTexto.textContent = "Ganaste 🤩";
      puntosUsuaria++;
      puntajesUsuaria.textContent = puntosUsuaria;
    } else {
      resultadoTexto.textContent = "Perdiste 😬";
      puntosComputadora++;
      puntajeComputadora.textContent = puntosComputadora;
    }
  }
  if (eleccionComputadora == "tijera") {
    if (eleccionUsuaria == "tijera") {
      resultadoTexto.textContent = "Empate 🙃";
    } else if (eleccionUsuaria == "piedra") {
      resultadoTexto.textContent = "Ganaste 🤩";
      puntosUsuaria++;
      puntajesUsuaria.textContent = puntosUsuaria;
    } else {
      resultadoTexto.textContent = "Perdiste 😬";
      puntosComputadora++;
      puntajeComputadora.textContent = puntosComputadora;
    }
  }
};

const obtenerEleccionComputadora = () => {
  let nuevoAlAzar = Math.floor(Math.random() * 3);

  if (nuevoAlAzar == 0) {
    eleccionComputadora = "piedra";
    manoComputadora.src = "./assets/piedra_computadora.png";
  } else if (nuevoAlAzar == 1) {
    eleccionComputadora = "papel";
    manoComputadora.src = "./assets/papel_computadora.png";
  } else {
    eleccionComputadora = "tijera";
    manoComputadora.src = "./assets/tijera_computadora.png";
  }
};

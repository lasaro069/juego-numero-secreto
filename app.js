// para realizar cambios en el 'h1' del documento Html
/* let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del Número Secreto"; */

// para realizar cambios o ingresar información en la etiqueta 'p'
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Indica un número del 1 al 10";

// Creamos la variable que llamará a la función
let numeroSecreto = 0; //generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

// Creamos una función para automatizar el código
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

// creamos la función que ejecutará la etiqueta respectiva
function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

   console.log(intentos);

   if (numeroUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);

      //activar el boton 'nuevo juego' si el jugador logró adivinar el número. (El botón se activa pero no tiene función asignada)
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {

      // El ususario no acertó
      if (numeroUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El número secreto es menor');
      } else {
         asignarTextoElemento('p', 'El número secreto es mayor')
      }
      intentos++;
      limpiarCaja();
   }
   return;
}

// CREAMOS UNA FUNCIÓN PARA LIMPIAR LA CAJA
function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
   return;
}

function generarNumeroSecreto() {
   //   let numeroSecreto = Math.floor(Math.random()*10+1);
   //   return numeroSecreto;

   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   // si ya sorteamos todos los números de la lista:
   if (listaNumerosSorteados.length == numeroMaximo) {

      asignarTextoElemento = ('p', 'Ya se sortearon todos los números posibles');

   } else {
      // si el número generado está en la lista 
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();

      } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

// creamos una función con los mensajes iniciales
function condicionesIniciales() {
   asignarTextoElemento('h1', 'Juego del Número Secreto Actualizado');
   asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   console.log(numeroSecreto);
}

// creamos la función reiniciar juego
function reiniciarJuego() {
   //limpiamos la caja
   limpiarCaja();
   // indicar mensaje de intervalo de números
   condicionesIniciales();
   // Generar número aleatorio
   // inicializar el número de intentos
   //desabilitar el botón de 'nuevo juego'
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
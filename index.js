const respuestas = {
  pregunta1: "Santiago",
  pregunta2: 'Lima'
};
// crear variable puntaje con "let" ya que se irá modificando.
let puntaje = 0;

// window.onload: funcion del navegador que se ejecuta cuando se termina de cargar el html
window.onload = function() {
  // contenedores de preguntas
  const contenedorPregunta1 = document.getElementById("contenedor-pregunta1");
  const contenedorPregunta2 = document.getElementById("contenedor-pregunta2");

  // obtener elemento para mostrar puntaje
  const elementoPuntaje = document.getElementById("puntaje");

  // ocultar solo contenedor de pregunta 2
  contenedorPregunta2.style.display = 'none';

  // Pregunta 1
  const pregunta1opcion1 = document.getElementById('pregunta1opcion1');
  const pregunta1opcion2 = document.getElementById('pregunta1opcion2');
  const pregunta1opcion3 = document.getElementById('pregunta1opcion3');
  // funcion para ver si se escogio alternativa correcta
  const verificarAlternativa1 = (event) => {
    // reiniciar valor de fondo
    pregunta1opcion1.parentElement.style.background = '';
    pregunta1opcion2.parentElement.style.background = '';
    pregunta1opcion3.parentElement.style.background = '';
    // obtener el valor del radio button seleccionado
    const valor = event.currentTarget.value;
    // obtengo el nombre de la pregunta
    const pregunta = event.currentTarget.name;
    // valido si el valor de pregunta es igual a pregunta1 
    if (pregunta === "pregunta1") {
      // validar si el valor es la respuesta correcta
      if (valor === respuestas[pregunta]) {
        // alternativa correcta cambio color de elemento li a verde
        event.currentTarget.parentElement.style.background = "green";
        // sumar 100 puntos
        puntaje += 100;
      } else {
        // alternativa correcta cambio color de elemento li a rojo
        event.currentTarget.parentElement.style.background = "red";
      }

      // Actualizar puntaje en elemento html
      elementoPuntaje.innerText = "Tu puntaje es " + puntaje;

      // bloquear temporalmente opciones para que no sean clickeables
      pregunta1opcion1.disabled = true;
      pregunta1opcion2.disabled = true;
      pregunta1opcion3.disabled = true;

      // ocultar contenedor de pregunta 1 y mostrar pregunta 2 despues de 3 segundos
      setTimeout(() => {
        contenedorPregunta1.style.display = 'none';
        contenedorPregunta2.style.display = 'block';
      }, 3000);
    }
  };

  // Pregunta 2
  const pregunta2opcion1 = document.getElementById('pregunta2opcion1');
  const pregunta2opcion2 = document.getElementById('pregunta2opcion2');
  const pregunta2opcion3 = document.getElementById('pregunta2opcion3');

  const verificarAlternativa2 = (event) => {
    pregunta2opcion1.parentElement.style.background = '';
    pregunta2opcion2.parentElement.style.background = '';
    pregunta2opcion3.parentElement.style.background = '';
    const valor = event.currentTarget.value;
    const pregunta = event.currentTarget.name;

    if (pregunta === "pregunta2") {
      if (valor === respuestas[pregunta]) {
        // alternativa correcta
        event.currentTarget.parentElement.style.background = "green";
        puntaje += 100;
      } else {
        event.currentTarget.parentElement.style.background = "red";
      }

      // Actualizar puntaje
      elementoPuntaje.innerText = "Tu puntaje es " + puntaje;
      // bloquear temporalmente opciones para que no sean clickeables
      pregunta2opcion1.disabled = true;
      pregunta2opcion2.disabled = true;
      pregunta2opcion3.disabled = true;

       // ocultar contenedor de pregunta 2 despues de 3 segundos
       setTimeout(() => {
        contenedorPregunta2.style.display = 'none';
      }, 3000);
    }
  };

  // asignar eventos de click a inputs
  // pregunta 1
  pregunta1opcion1.onclick = verificarAlternativa1;
  pregunta1opcion2.onclick = verificarAlternativa1;
  pregunta1opcion3.onclick = verificarAlternativa1;
  // pregunta 2
  pregunta2opcion1.onclick = verificarAlternativa2;
  pregunta2opcion2.onclick = verificarAlternativa2;
  pregunta2opcion3.onclick = verificarAlternativa2;
}


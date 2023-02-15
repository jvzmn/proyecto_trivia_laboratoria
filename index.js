const respuestas = {
  pregunta1: "Santiago",
  pregunta2: 'Lima'
};
// window.onload:  funcion del navegador que se ejecuta cuando cargo el contenido del html
window.onload = function() {
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
      } else {
        // alternativa correcta cambio color de elemento li a rojo
        event.currentTarget.parentElement.style.background = "red";
      }
    }
  };
  // asignar la funcion verificarAlternativa1 a evento onclick
  pregunta1opcion1.onclick = verificarAlternativa1;
  pregunta1opcion2.onclick = verificarAlternativa1;
  pregunta1opcion3.onclick = verificarAlternativa1;

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
      } else {
        event.currentTarget.parentElement.style.background = "red";
      }
    }
  };

  pregunta2opcion1.onclick = verificarAlternativa2;
  pregunta2opcion2.onclick = verificarAlternativa2;
  pregunta2opcion3.onclick = verificarAlternativa2;
}


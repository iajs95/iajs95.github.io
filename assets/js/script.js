// REUTILIZO CODIGO JS PARA SOLUCION #3 Y #4.

// Se crea esta variable para dejar como defecto el color para la funcion Pintar.
const DEFAULT_COLOR = 'green';

//Se inicia la aplicacion con el color Amarillo para la Solucion #3.
let colorElejido = 'yellow';
parrafoColor(colorElejido);

// Funcion que recibe la id de los divs y el color elejido para pintar los divs.
const pintar = (id, color = DEFAULT_COLOR) => {
  document.getElementById(id).style.backgroundColor = color;
};

// Funcion que permite mostrar al usuario que color escogio, aplica solo para la Solucion #4 (index.html).
function parrafoColor(color) {
  if (document.getElementById('ele1')) { // Consulto si existe la id "ele1", para poder utilizar el mismo codigo en pintar.html.
    return;
  }

  if (color != '') {
    document.getElementById('brush').style.fill = color;
    document.getElementById('comentario').innerHTML =
      '← Acabas de seleccionar el siguiente Color.';
  } else {
    document.getElementById('brush').style.fill = DEFAULT_COLOR;
    document.getElementById('comentario').innerHTML =
      '← Tecla sin Color!, se aplica el color por Defecto.';
  }
}

document.addEventListener('click', (event) => {
  if (event.target.id != '' && colorElejido != '') {
    pintar(event.target.id, colorElejido);
  } else if (event.target.id != '') {
    pintar(event.target.id);
  }
});

document.addEventListener('keydown', (event) => {
  if (document.getElementById('ele1')) {  // Consulto si existe la id "ele1", para poder utilizar el mismo codigo en pintar.html.
    return;
  }

  const minus = event.key.toLowerCase();

  minus === 'a'
    ? ((colorElejido = '#219ebc'), parrafoColor('#219ebc'))
    : minus === 's'
    ? ((colorElejido = '#023047'), parrafoColor('#023047'))
    : minus === 'd'
    ? ((colorElejido = '#fb8500'), parrafoColor('#fb8500'))
    : ((colorElejido = ''), parrafoColor(''));
});

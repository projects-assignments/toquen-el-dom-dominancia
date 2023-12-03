const buttons = document.getElementsByClassName('button-instruments');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = '#161515'; // Cambiar el color al pasar el cursor por encima
    this.style.border = '2px solid #D99923'; // Establecer un borde con color
    this.style.color = '#fff'; // Cambiar el color del texto del botón
  });
  buttons[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#D99923'; // Restaurar el color original
    this.style.border = 'none'; // Eliminar el borde al salir
    this.style.color = 'initial'; // Restaurar el color del texto original
  });
}




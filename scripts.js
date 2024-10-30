document.getElementById("agregarCampo").addEventListener("click", function () {
  const container = document.getElementById("contenedorCampos");

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "....";
  textInput.classList.add("editable");

  const numberInput = document.createElement("input");
  numberInput.type = "text";
  numberInput.placeholder = "....";
  numberInput.classList.add("editable");

  const eliminarCampo = document.createElement("button");
  eliminarCampo.type = "button";
  eliminarCampo.textContent = "X";
  eliminarCampo.classList.add("eliminar");

  eliminarCampo.addEventListener("click", function () {
    container.removeChild(formGroup);
  });

  // Agregar los inputs al grupo
  formGroup.appendChild(textInput);
  formGroup.appendChild(numberInput);
  formGroup.appendChild(eliminarCampo);

  // Añadir el grupo al contenedor
  container.appendChild(formGroup);
});

document.getElementById("cerrarBotton").addEventListener("click", function () {
  const button1 = document.getElementById("agregarCampo");
  const button2 = document.getElementById("cerrarBotton");
  
  button1.style.display = "none";
  button2.style.display = "none";
  
  const eliminarBotones = document.querySelectorAll('.form-group .eliminar');
    eliminarBotones.forEach(function(button) {
        button.style.display = "none";
    });

});


document.getElementById("downloadImage").addEventListener("click", function () {
  const element = document.getElementById("contenedor");
  element.style.backgroundImage = "url('./imges/KonectaFilmina.jpeg')";
  element.style.backgroundSize = "100% 100%";

  // Ocultar botones antes de la captura
  const button1 = document.getElementById("agregarCampo");
  const button2 = document.getElementById("cerrarBotton");
  const downloadButton = document.getElementById("downloadImage");
  button1.style.display = "none";
  button2.style.display = "none";
  downloadButton.style.display = "none";

  html2canvas(element, {
      scale: 2, 
      backgroundColor: null
  }).then(canvas => {
      const link = document.createElement("a");
      link.download = "informeSLA.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      // Volver a mostrar los botones
      button1.style.display = "inline-block";
      button2.style.display = "inline-block";
      downloadButton.style.display = "inline-block";
  });
});

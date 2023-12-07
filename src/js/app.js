// Colores y elementos
const colors = {
    red: {
      backgroundImage: 'url("../public/img/redcar.jpg")',
      backgroundColor: 'red',
    },
    black: {
      backgroundImage: 'url("../public/img/blackcar.jpg")',
      backgroundColor: 'black',
    },
    gray: {
      backgroundImage: 'url("../public/img/graycar.jpg")',
      backgroundColor: 'gray',
    },
  };
  
  const imgCard = document.querySelector(".product-image");
  const cartButton = document.getElementById("button");
  const itemTag = document.getElementsByTagName("h3")[0];
  const mensajeContainer = document.getElementById("mensaje-container");
  const whiteButton = document.getElementById("white-button");
  
  function setColorStyles(color) {
    imgCard.style.backgroundImage = color.backgroundImage;
    cartButton.style.backgroundColor = color.backgroundColor;
    itemTag.style.backgroundColor = color.backgroundColor;
  }

  function showMessage() {
    const mensajeContainer = document.getElementById("mensaje-container");
    const whiteButton = document.getElementById("white-button");
  
    // Mostrar el mensaje
    mensajeContainer.textContent = whiteButton.textContent;
    mensajeContainer.style.display = "block";
    mensajeContainer.style.fontWeight = "bolder";
    mensajeContainer.style.fontSize = "1.5em";
    mensajeContainer.style.color = "green";
  
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
  };
  
  // Manejadores de eventos
  function handleColorButtonClick(color) {
    return function () {
      setColorStyles(colors[color]);
    };
  };

    document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".red").addEventListener('click', handleColorButtonClick('red'));
    document.querySelector(".black").addEventListener('click', handleColorButtonClick('black'));
    document.querySelector(".gray").addEventListener('click', handleColorButtonClick('gray'));
    document.getElementById("button").addEventListener('click', showMessage);
  });
  
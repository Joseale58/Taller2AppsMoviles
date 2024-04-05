//Improtamos clases js
import Product from "./Product.js";
import Cart from "./Cart.js";


//Función para agg productos
function addToList(product) {
  let product_string = JSON.stringify(product);
  let shownProducts = document.getElementById("shownProducts");
  shownProducts.innerHTML += `<div class="product">
    <img src="${product.imagen}" alt="" />
    <div class="description">
      <h3>${product.title}</h3>
      <p>$ ${product.price}</p>
    </div>
    <div class="description">
      <p>${product.description}</p>
    </div>
    <div class="buttons">
      <button class="remove" data-parametro='${product.id}'>
        <img src="https://icons.iconarchive.com/icons/hopstarter/button/72/Button-Delete-icon.png" class="icon" alt="" />
      </button>
      <button class="add" data-parametro='${product_string}'>
        <img src="https://icons.iconarchive.com/icons/hopstarter/button/72/Button-Add-icon.png" class="icon" alt="" />
      </button>
      
    </div>
  </div>`;
}

//Función para mostrar productos agregados al carrito de compras
function toGraphic() {

  if (products = JSON.parse(localStorage.getItem("product"))) {
    console.log(products);
    let added_elements = [];
    let column = document.getElementById("cart");
    column.innerHTML = `<p>Elementos añadidos: <span> ${userCart.count()} </span></p>`;
    products.forEach((product) => {
      if (product.id != null && !added_elements.includes(product.id)) {
        column.innerHTML += `<div class="product">
    <div class="description">
      <h3>${product.title}</h3>
      <p>$ ${product.price}</p>
    </div>
    <div class="description">
      <p>${userCart.count_id(product.id)}</p>
    </div>
  </div>`;
        added_elements.push(product.id);
      }
    });
  }
}

//Instancia de la clase Cart
userCart = new Cart();

//Agregamos productos a la lista
addToList({
  id: 1,
  title: "Queso",
  price: 11,
  description: "Queso Mozzarela",
  imagen:
    "https://icons.iconarchive.com/icons/aha-soft/desktop-buffet/72/Cheese-icon.png", // Ruta absoluta
});

addToList({
  id: 2,
  title: "Pollo",
  price: 7,
  description: "Pollo Asado Kokor",
  imagen:
    "https://icons.iconarchive.com/icons/aha-soft/desktop-buffet/72/Chicken-icon.png", // Ruta absoluta
});

addToList({
  id: 3,
  title: "Torta",
  price: 7,
  description: "Torta con glaceado",
  imagen:
    "https://icons.iconarchive.com/icons/aha-soft/desktop-buffet/72/Piece-of-cake-icon.png", // Ruta absoluta
});

//Mostramos productos agregados al carrito
toGraphic();


//Agregamos escuchadores de eventos a los botones, tanto para agregar como para eliminar productos
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los elementos con la clase "miBoton"
  var agregar = document.querySelectorAll(".add");

  // Itera sobre cada botón y agrega un evento de clic a cada uno
  agregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Obtiene el parámetro del atributo data-parametro del botón
      var product = boton.getAttribute("data-parametro");
      //Se agrega el producto al carrito
      userCart.addProduct(product);
      //Se actualiza la vista
      toGraphic();
    });
  });

  // Selecciona todos los elementos con la clase "miBoton"
  var retirar = document.querySelectorAll(".remove");

  // Itera sobre cada botón y agrega un evento de clic a cada uno
  retirar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Obtiene el parámetro del atributo data-parametro del botón
      var id = boton.getAttribute("data-parametro");
      //Se elimina el producto del carrito
      userCart.deleteProduct(id);
      //Se actualiza la vista
      toGraphic();
    });
  });
});
//Carrito

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let buyButton = document.querySelector(".btn-buy");
let search = document.querySelector("#buscador");
let hideContainer = document.querySelector(".container-buscador");

//Abrir el carrito

cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Cerrar el carrito

closeCart.onclick = () => {
  cart.classList.remove("active");
};

search.onclick = () => {
  hideContainer.classList.remove("hiden");
};

window.onscroll = () => {
  hideContainer.classList.add("hiden");
};
//Funcionamiento del carrito JS

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//Borrar items carrito

function ready() {
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //Cambios en la cantidad
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);

  //Agregar al carrito
  let addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

//Actualizar cantidad

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//!Agregar al carrito (Consola)
// La simulacion de la consola
// prompt en line 124
function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  let price = shopProducts.getElementsByClassName("price")[0].innerText;
  let productImg = shopProducts.getElementsByClassName("product-img")[0].src;

  addProductTo(title, price, productImg);
  updatetotal();

  console.log(title, price, productImg);
}

function addProductTo(title, price, productImg) {
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  let cartItems = document.getElementsByClassName("cart-content");
  let cartItemsNames = document.getElementsByClassName("cart-product-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    alert("Agregaste este producto a tu carrito");
    return;
  }
}

//!Actualizar el total

function updatetotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cart.getElementsByClassName("cart-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;

    total = total + price * quantity;

    //Por si tiene precio con centavos
    total = Math.round(total * 100) / 100;

    let totalPrice = (document.getElementsByClassName(
      "total-price"
    )[0].innerText = total);

    //Prompt, alert || Segunda entrega
    // La simulacion de la consola esta en la linea
    buyButton.onclick = () => {
      let cuotas = prompt("Seleccione la cantidad de cuotas: ");

      while (cuotas == null || /\D/.test(cuotas) || cuotas == "") {
        cuotas = prompt("Entre un número VÁLIDO: ");
      }

      switch (cuotas) {
        case "1":
          alert("Las cuotas disponibles son de 3, 6, y 12");
          break;

        case "2":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "3":
          alert("Compra finalizada!");
          alert("$" + totalPrice / 3);

          break;

        case "4":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "5":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "6":
          alert("Compra finalizada!");
          alert("$" + totalPrice / 6);

          break;

        case "7":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "8":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "9":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "10":
          alert("Las cuotas disponibles son de 3, 6, y 12");
          break;

        case "11":
          alert("Las cuotas disponibles son de 3, 6, y 12");

          break;

        case "12":
          alert("Compra finalizada!");
          alert("$" + totalPrice / 12);
          break;

        default:
          alert("Recuerde que el maximo de cuotas es de 12!");
      }
    };
  }
}

let zapatilla = [
  "Nike Azules",
  "Nike Negras",
  "Nike Rojas",
  "Nike Verdes",
  "Nike Gris",
  "Nike Blancas",
];

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    document.querySelectorAll(".articulos").forEach((zapatilla) => {
      console.log(zapatilla.textContent.toLowerCase().includes(e.target.value))
        ? zapatilla.classList.add("filter")
        : zapatilla.classList.remove("filter");
    });
  }
});

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

search.onmouseenter = () => {
  hideContainer.classList.remove("hiden");
};

search.onmouseleave = () => {
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
  localStorage.clear();
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

function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  let price = shopProducts.getElementsByClassName("price")[0].innerText;
  let productImg = shopProducts.getElementsByClassName("product-img")[0].src;

  addProductTo(title, price, productImg);
  updatetotal();

  let productObj = {
    producto: title,
    precio: price,
    imagen: productImg,
  };

  localStorage.setItem("title", JSON.stringify(productObj));
  localStorage.getItem(productObj);
  console.log(productObj);
}

function addProductTo(title, price, productImg) {
  const cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  let cartItems = document.getElementsByClassName("cart-content");
  let cartItemsNames = document.getElementsByClassName("cart-product-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    Swal.fire(
      "Exito",
      "Se agregró al carrito de forma correcta",
      "success",
      "#252525"
    );
    return;
  }
}

//!Revissar y arreglar/
// const cartBoxContent = `<div class="cart-box"><img src="../img/Nike-azules.jpg" alt="" class="cart-img" /> <div class="detail-box"> <div class="cart-product-title">Nike azules</div> <div class="cart-price">250$</div> <input type="number" value="1" class="cart-quantity" /> </div> <i class="bx bxs-trash-alt cart-remove"></i> </div>`;
// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox
//   .getElementsByClassName("cart-remove")[0]
//   .addEventListener("click", removeCartItem);
// cartShopBox
//   .getElementsByClassName("cart-quantity")[0]
//   .addEventListener("click", quantityChanged);

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

    //Promlt, alert || Segunda entrega
    // La simulacion de la consola esta en la linea 138
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

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    document.querySelectorAll(".articulos").forEach((zapatilla) => {
      console.log(zapatilla.textContent.toLowerCase().includes(e.target.value))
        ? zapatilla.classList.add("filter")
        : zapatilla.classList.remove("filter");
    });
  }
});

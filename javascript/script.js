//Carrito

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");
const buyButton = document.querySelector(".btn-buy");
const search = document.querySelector("#buscador");
const hideContainer = document.querySelector(".container-buscador");

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
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

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

  localStorage.setItem("producto", JSON.stringify(productObj));
  localStorage.getItem("producto");
  console.log(productObj);
}

function addProductTo(title, price, productImg) {
  const cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  let cartItems = document.getElementsByClassName("cart-content")[0];
  let cartItemsNames = document.getElementsByClassName("cart-product-title");

  const cartBoxContent = `<div class="cart-box">
    <img src="${productImg}" alt="" class="cart-img" /> 
    <div class="detail-box"> 
      <div class="cart-product-title">${title}</div> 
      <div class="cart-price">${price}</div> 
      <input type="number" value="1" class="cart-quantity" /> 
    </div> 
    <i class="bx bxs-trash-alt cart-remove"></i> 
  </div>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.appendChild(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("click", quantityChanged);

  Swal.fire({
    title: "Se agregó al carrito!",
    text: `${title}`,
    icon: "success",
    confirmButtonColor: "#252525",
  });
}

var cartItems = [];

function addProductToCart(product) {
  cartItems.push(product);
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

    // prueba si cuotas no contiene un número decimal".
    // Esto se usa para validar si el usuario ha ingresado un número válido o no,
    //  y si no lo ha hecho, se le solicita que ingrese un número válido a través
    // de un cuadro de diálogo prompt.

    buyButton.onclick = () => {
      let cuotas = prompt("Seleccione la cantidad de cuotas: ");

      while ([3, 6, 12].indexOf(Number(cuotas)) === -1) {
        cuotas = prompt(
          "Por favor, seleccione una cantidad de cuotas de 3, 6 ó 12: "
        );
      }

      const total = Math.round(totalPrice / cuotas);

      swal.fire({
        title: "Compra finalizada!",
        text: `$${total}`,
        icon: "success",
        confirmButtonColor: "#252525",
      });
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

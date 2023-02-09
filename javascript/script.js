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
  updateTotal();
}

//Actualizar cantidad

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

//!Agregar al carrito (Consola)

function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  let price = shopProducts.getElementsByClassName("price")[0].innerText;
  let productImg = shopProducts.getElementsByClassName("product-img")[0].src;

  addProductTo(title, price, productImg);
  updateTotal();

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
  fetch("/javascript/products.json")
    .then((res) => res.json())
    .then((data) => {
      const productData = data.find((item) => item["product-title"] === title);
      if (!productData) return;

      const {
        "product-title": pTitle,
        price: pPrice,
        "product-img": pImage,
      } = productData;
      const cartShopBox = document.createElement("div");
      cartShopBox.classList.add("cart-box");
      cartShopBox.dataset.price = pPrice;
      const cartItems = document.querySelector(".cart-content");
      const cartBoxContent = `
        <img src="${pImage}" alt="" class="cart-img" /> 
        <div class="detail-box"> 
          <div class="cart-product-title">${pTitle}</div> 
          <div class="cart-price">${pPrice}</div> 
          <input type="number" value="1" class="cart-quantity" /> 
        </div> 
        <i class="bx bxs-trash-alt cart-remove"></i> 
      `;

      cartShopBox.innerHTML = cartBoxContent;
      cartItems.appendChild(cartShopBox);
      const cartRemove = cartShopBox.querySelector(".cart-remove");
      const cartQuantity = cartShopBox.querySelector(".cart-quantity");
      cartRemove.addEventListener("click", removeCartItem);
      cartQuantity.addEventListener("input", quantityChanged);

      Swal.fire({
        title: "Se agregó al carrito!",
        text: `${pTitle}`,
        icon: "success",
        confirmButtonColor: "#252525",
      });

      updateTotal();
    });
}

//!Actualizar el total

function updateTotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");

  if (cartBoxes.length === 0) {
    // Si no hay elementos en el carrito, establece el precio total en 0
    document.getElementsByClassName("total-price")[0].innerText = "0";
    return;
  }

  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
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
      swal
        .fire({
          title: "Seleccione la cantidad de cuotas:",
          input: "select",
          inputOptions: {
            3: "3 cuotas",
            6: "6 cuotas",
            12: "12 cuotas",
          },
          inputPlaceholder: "Seleccione una opción",
          confirmButtonColor: "#252525",
          showCancelButton: true,
          cancelButtonColor: "#d33",
        })
        .then((result) => {
          if (result.value) {
            const cuotas = result.value;
            const total = (totalPrice / cuotas).toFixed(2);

            swal.fire({
              title: "Compra finalizada!",
              text: `$${total}`,
              icon: "success",
              confirmButtonColor: "#252525",
            });
          }
        });
    };
  }
}
const buscador = document.querySelector("#buscador");

document.addEventListener("keyup", () => {
  const buscador = document.querySelector("#buscador");
  if (buscador) {
    document.querySelectorAll(".articulos").forEach((zapatilla) => {
      zapatilla.textContent.toLowerCase().includes(buscador.value)
        ? zapatilla.classList.add("filter")
        : zapatilla.classList.remove("filter");
    });
  }
});

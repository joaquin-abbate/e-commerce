# e-commerce
Proyecto coderhouse Js.


Este código define una aplicación de carrito de compras. Es una combinación de HTML, CSS y JavaScript que permite a los usuarios agregar productos a un carrito virtual y realizar compras en línea.

La aplicación utiliza la API de Document Object Model (DOM) de JavaScript para interactuar con elementos en la página web.

En la sección de constantes al inicio, se están definiendo variables que hacen referencia a diferentes elementos de la página, como el ícono del carrito, el contenedor del carrito, el botón de cerrar carrito, el botón de comprar, etc.

Luego, se utilizan eventos onclick para abrir y cerrar el carrito. La función de búsqueda también está conectada a un evento onclick y onmouseleave para mostrar y ocultar el contenedor de búsqueda.

La función ready() se activa cuando el documento está listo y maneja el funcionamiento del carrito. La función removeCartItem() se encarga de eliminar productos del carrito, mientras que quantityChanged() actualiza la cantidad de productos en el carrito.

La función addCartClicked() se encarga de agregar productos al carrito y utiliza fetch() para obtener datos de productos de un archivo JSON externo. Los datos se guardan en el almacenamiento local del navegador para mantener la información del carrito después de que la página se cierre.

En general, este código permite a los usuarios agregar productos a un carrito, actualizar la cantidad de productos y realizar compras en línea de una manera sencilla y eficiente.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project Coderhouse JS.

This code defines a shopping cart application. It's a combination of HTML, CSS and JavaScript that allows users to add products to a virtual cart and make online purchases.

The application uses the JavaScript Document Object Model (DOM) API to interact with elements on the web page.

In the constants section at the beginning, variables are being defined that reference different elements on the page, such as the cart icon, the cart container, the close cart button, the buy button, etc.

Then, onclick events are used to open and close the cart. The search function is also connected to an onclick and onmouseleave event to show and hide the search container.

The ready() function is activated when the document is ready and handles the cart functionality. The removeCartItem() function takes care of removing products from the cart, while quantityChanged() updates the number of products in the cart.

The addCartClicked() function is responsible for adding products to the cart and uses fetch() to obtain product data from an external JSON file. The data is stored in the browser's local storage to maintain the cart information after the page is closed.

In general, this code allows users to add products to a cart, update the number of products and make online purchases in a simple and efficient way.

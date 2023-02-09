# e-commerce
Proyecto coderhouse Js
Este código define una aplicación de carrito de compras. Es una combinación de HTML, CSS y JavaScript que permite a los usuarios agregar productos a un carrito virtual y realizar compras en línea.

La aplicación utiliza la API de Document Object Model (DOM) de JavaScript para interactuar con elementos en la página web.

En la sección de constantes al inicio, se están definiendo variables que hacen referencia a diferentes elementos de la página, como el ícono del carrito, el contenedor del carrito, el botón de cerrar carrito, el botón de comprar, etc.

Luego, se utilizan eventos onclick para abrir y cerrar el carrito. La función de búsqueda también está conectada a un evento onclick y onmouseleave para mostrar y ocultar el contenedor de búsqueda.

La función ready() se activa cuando el documento está listo y maneja el funcionamiento del carrito. La función removeCartItem() se encarga de eliminar productos del carrito, mientras que quantityChanged() actualiza la cantidad de productos en el carrito.

La función addCartClicked() se encarga de agregar productos al carrito y utiliza fetch() para obtener datos de productos de un archivo JSON externo. Los datos se guardan en el almacenamiento local del navegador para mantener la información del carrito después de que la página se cierre.

En general, este código permite a los usuarios agregar productos a un carrito, actualizar la cantidad de productos y realizar compras en línea de una manera sencilla y eficiente.

# Proyecto Coderhouse
 Este proyecto simula una tienda de tecnología.

 ## Navegación
    En la parte superior podemos ver los links que nos llevan a distintas partes de la tienda y renderizan distintos componentes como el `Home, productos(y sus categorías) y Contact(para ponernos en contacto con el dueño de la page)` y también} nuestro `<cartWidget/>` que en un futuro nos permitirá visualizar de mejor manera nuestro carrito. 
     En la parte siguiente nos encontramos con distintos ítems que nos renderizan nuestro `<ItemListContainer>` que mediante el mismo se ven nuestros `<Item />` mostrandonos cada productos desde nuestra base de datos, que es un Json, en este caso. En el `<ItemListContainer/>` utilizamos un useEffect() para poder hacer animacion de 'Cargando' para el renderizado de los <Item/>. 

 ## ItemDetailContainer/ItemDetail
    Dentro de cada `<Item>` nos encontramos un button con un textContent que dice 'ver detalle', nos da la opción de poder ver mas detallado nuestros `<Item/>`, nos renderiza nuestro `<ItemDetailContainer/>` que toma el 'id' de cada producto mediante un 'useParams()', esto hace que nos renderice el componente `<ItemDetail/>` mostrando nuestros datos mas detallados de cada producto. En este mismo nos encontramos al `<ItemCount/>`.

 ## ItemCount
    Se encuentra dentro de nuestro `<ItemDetail>`. Este mismo nos permite controlar nuestro stock desde la base de datos para en un futuro poder agregar productos a nuestro ` <ContentCart/>`.

 ##CartContext
   Este reúne toda la información del carrito, la cantidad de productos seleccionados, el total de la compra, detalla información del carrito, ofrece la opcion de borrar productos añadidos o también vaciar el mismo. 
   Todos los procesos están atravesados por el contexto de este mismo

 ##Cart 
   En el mismo se encuentra el icono de CartWidget. Por cada producto agregado muestra la cantidad de productos que se encuentran en el carrito, además el mismo posee un icono que nos lleva directamente al carrito con los productos que agregamos. 
   Posee la opción de poder terminar la compra y realizar el el pedido de la misma. También tenemos una opción para poder volver a "Atrás" para poder seguir agregando productos a nuestro carrito.

   ##Firebase
   Los productos que aparecen en nuestra aplicación web están cargados en firebase, con su respectiva información. En el mismo se detalla: Nombre, Imagen, Detalle, Precio, Stock y un ID propio generado por Firebase.

 ## Finalizar compra o Checkout
   Al poner finalizar compra con los productos seleccionados (sino no aparece la opción) nos lleva a un formulario que tiene para completar datos de cada cliente con campos obligatorios. Cuando se presiona el botón de enviar genera un orden con los productos seleccionados, detallando la información de cada compra con la información del cliente. Esto se produce mediante Firebase que nos deja generar una orden con esta información, generando un array y guardando la información de la misma en la base de datos.

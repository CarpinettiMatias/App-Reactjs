# Proyecto Coderhouse
 Este proyecto simula una tienda de tecnología.

 ## Navegación
    En la parte superior podemos ver los links que nos llevan a distintas partes de la tienda y renderizan distintos componentes como el `Home, productos(y sus categorías) y Contact(para ponernos en contacto con el dueño de la page)` y también} nuestro `<cartWidget/>` que en un futuro nos permitirá visualizar de mejor manera nuestro carrito. 
     En la parte siguiente nos encontramos con distintos ítems que nos renderizan nuestro `<ItemListContainer>` que mediante el mismo se ven nuestros `<Item />` mostrandonos cada productos desde nuestra base de datos, que es un Json, en este caso. En el `<ItemListContainer/>` utilizamos un useEffect() para poder hacer animacion de 'Cargando' para el renderizado de los <Item/>. 

 ## ItemDetailContainer/ItemDetail
    Dentro de cada `<Item>` nos encontramos un button con un textContent que dice 'ver detalle', nos da la opción de poder ver mas detallado nuestros `<Item/>`, nos renderiza nuestro `<ItemDetailContainer/>` que toma el 'id' de cada producto mediante un 'useParams()', esto hace que nos renderice el componente `<ItemDetail/>` mostrando nuestros datos mas detallados de cada producto. En este mismo nos encontramos al `<ItemCount/>`.

 ## ItemCount
    Se encuentra dentro de nuestro `<ItemDetail>`. Este mismo nos permite controlar nuestro stock desde la base de datos para en un futuro poder agregar productos a nuestro ` <ContentCart/>`.

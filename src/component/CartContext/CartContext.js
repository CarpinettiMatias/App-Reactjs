import React,{ useState, createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ( {children} ) =>{

    const [ cart, setCart ]= useState([]);

    const addCart = (item) => {
      setCart([...cart, item]);
    };

    const removeCart = (id) => {
      setCart( cart.filter(prod => prod.id !== id));
    };

    const deleteCart = () => {
      setCart([]);
    };

    const totalQuantity = () => {
      return cart.reduce((acc, prod) => acc + prod.counter, 0);
    };

    const totalShop = () =>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0 );
    };

    const isInCart = (id) => {
      return cart.some( prod => prod.id === id);
    };

    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            removeCart,
            deleteCart,
            totalQuantity,
            totalShop,
            isInCart
          }}>
              {children}
        </CartContext.Provider>
    );
};

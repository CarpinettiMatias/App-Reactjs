import React from 'react'
import img from '../CartWidget/Cart.png';


const CartWidget = (props) => {


    return (
        <div className='CartWidget'>
             <h2><img src={img} alt="Cart" width='30px'/></h2>
        </div>
    )
};

export default CartWidget;
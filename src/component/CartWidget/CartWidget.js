import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../CartContext/CartContext';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity, cart } = useContext(CartContext);

    return (
            <div className='CartWidget'>
                <Icon disabled name='cart' className="circular inverted users icon"/>
                    <p className={cart.length === 0 ? 'hidden' : " " } style={{height: '20px',
                                                                                width:'20px',
                                                                                backgroundColor:'#ab2a3e',
                                                                                borderRadius:'15px',
                                                                                pointerEvents:'auto'}}>
                        <Link className='number' to='/cart'>
                        {totalQuantity()}
                        </Link>
                    </p>
            </div>
    );
};
export default CartWidget;

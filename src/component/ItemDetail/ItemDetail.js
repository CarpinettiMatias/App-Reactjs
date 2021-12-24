import React,{ useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, detail, price, stock}) => {


    const { addCart, isInCart } = useContext(CartContext);


    const navigate = useNavigate();

    const [counter, setCounter] = useState(0);
    //const [ viewAdd, setViewAdd ] = useState(false);
    
    const handleOut = () => {
        //Vuelve una navegacion anterior
        navigate(-1)
    }

    const handleAdd = () => {
        if(counter > 0){
            addCart({
                id,
                name,
                img,
                price,
                counter
                });
        };
    };
    return (
        <>
        <div className='ItemDetail' key={id}>
            <div className='contentImg'>
                    <button className='btn btn-secondary' style={{width:'40px', borderRadius:'15px'}} onClick={handleOut}>
                    <div class="visible content">
                        <i class="angle left icon"></i>
                    </div>
                </button>
                <img src={img} alt={name}/>
            </div>
            <div className='item'>
                <h1>{name}</h1>
                <p>{detail}</p>
                <p>USD ${price}</p>
            {
                !isInCart(id)
                ?  <ItemCount
                    stock={stock}
                    counter={counter}
                    setCounter={setCounter}
                    onAdd={handleAdd}/>
                : <>
                    <Link to='/Cart' className='btn btn-secondary' style={{width:'200px', borderRadius:'5px', margin:'2px'}}>Ver Mi Carrito</Link>
                    <button className='btn btn-secondary' 
                            style={{width:'60px', borderRadius:'5px', margin:'2px'}} 
                            onClick={handleOut}>
                                Atras
                                </button>
                  </>


            }
            </div>
        </div>
        </>
    );
};

export default ItemDetail;

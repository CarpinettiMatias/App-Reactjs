import React from 'react';

//css
import './ItemCount.css';

const ItemCount = ({stock, counter, setCounter, onAdd}) => {

    const addQuantity = () => (stock > counter) ? setCounter(counter + 1) : alert('No hay mas de este producto');
    const subtractQuantity = () => (counter > 0) ? setCounter(counter - 1) : console.log('No hay -1 productos');

    return (
        <div className='ItemCount'>
                <div className='counter'>
                    <button onClick={subtractQuantity} 
                            className={counter === 0 ? 'btn btn-outline-danger' : 'btn btn-secondary'}
                            disabled={counter === 0}
                            style={{width:'40px',
                                    borderRadius:'15px',
                                    boxShadow:'1px 1px 2px gray'}}>
                            <div class="hidden content"></div>
                            <div class="visible content">
                                 <i class="minus icon"></i>
                            </div>
                    </button>
                <p>{counter}</p>
                    <button onClick={addQuantity} className='btn btn-secondary'
                            disabled={counter === stock}
                            style={{width:'40px',
                                    borderRadius:'15px',
                                    boxShadow:'1px 1px 2px gray'}}>
                           <div class="hidden content"></div>
                            <div class="visible content">
                                <i class="plus icon"></i>
                            </div>
                    </button>
                    <button onClick={onAdd} 
                            className='btn btn-secondary'
                            disabled={counter === 0}
                            style={{width:'80px',
                                    borderRadius:'15px',
                                    boxShadow:'1px 1px 2px gray'}}>
                            <div class="hidden content"></div>
                            <div class="visible content">
                                <i class="shopping cart icon"></i>
                            </div>
                    </button>
                </div>
        </div>
    );
};

export default ItemCount;

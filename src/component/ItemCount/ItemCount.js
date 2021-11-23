import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';

//css
import './ItemCount.css';

const ItemCount = ({stock , initial}) => {

    const [counter, setCounter] = useState(initial);
    //Saque los brakets porque me volvian los valores string
    const addQuantity = () => (stock > counter) ? setCounter(counter + 1) : alert('No hay mas de este producto');
    const subtractQuantity = () => (counter > 1) ? setCounter(counter - 1) : alert('No hay -1 productos');

    const onAdd = () => {alert(`Tenes ${counter} en el carrito`)};

    return (
        <div className='ItemCount'>
            <h1>Productos</h1>
                <div className='counter'>
                    <Button onClick={subtractQuantity} className="ui inverted pink button"> - </Button>
                    <p>{counter}</p>
                    <Button onClick={addQuantity} className="ui inverted pink button"> + </Button>
                </div>
            <Button onClick={onAdd} className="ui inverted pink button">Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;

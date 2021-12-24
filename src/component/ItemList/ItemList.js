
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Carrusel from '../Carrusel/Carrusel'
import  Item  from '../Item/Item';


const ItemList = ({product = []}) => {


    return (
        <Container className='text-center' >
            <Carrusel/>
            <h3 className='text-center' style={{fontSize:'30px',
                                                margin:'20px'}}>Productos</h3>
        <Row>
            {product.map(prod => <Item prod={prod.id} {...prod}/>) }
        </Row>


        </Container>
    );
};

export default ItemList;

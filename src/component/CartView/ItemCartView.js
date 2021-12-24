import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import {IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Card, Col, Image } from 'react-bootstrap';




const ItemCartView = ({id, name, img,  price, counter}) => {

    const { removeCart } = useContext(CartContext)

    return (
            <div>
                <Container>
                    <Card style={{ width: '18rem' ,
                                    margin:'10px'}}>
                        <Card.Body>
                            <Col xs={6} md={4}>
                                <Image src={img} thumbnail />
                            </Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Cantidad: {counter}</Card.Subtitle>
                            <Card.Text>Precio: USD ${price}</Card.Text>
                        </Card.Body>
                        <IconButton color="primary" aria-label="delete" onClick={() => {removeCart(id)}}>
                            <DeleteIcon />
                    </IconButton>
                    </Card>
                </Container>
            </div>

    );
};

export default ItemCartView;

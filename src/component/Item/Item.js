import React from 'react';
import { Card, Badge } from "react-bootstrap";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

function Item (props) {
    const { name, img, stock } = props.props;

    return (
        <div className='col-sm-6 col-md-3'>
            <Card>
                <Card.Img variant='top' src={img} width='60%'/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.text>
                        <div style={{ textAlign:'center'}}>
                            <Badge bg='success'>Stock: {stock}</Badge>
                        </div>
                    </Card.text>
                    <ItemDetailContainer props={props.props} />
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item;

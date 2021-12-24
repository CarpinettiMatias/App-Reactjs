
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Item = ({name, img, price, id}) => {


    return (
        <Card key={id} className='card m-3' style={{width:'20rem'}}>
            <Image src={img} style={{width:'400px'}} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>${ price}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button variant="outlined" to={`/detail/${id}`}   size="small">
                <Link to={`/detail/${id}`} className='btn btn-'>Ver Detalle</Link>
            </Button>
            </Card.Content>
        </Card>
    );
};

export default Item;

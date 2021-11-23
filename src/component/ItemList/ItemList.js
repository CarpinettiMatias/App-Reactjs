import React from 'react';
import { Spinner } from 'react-bootstrap';
import Item from '../Item/Item'


function ItemList({items}) {


    return (
        <>
            {items.length ? (
            items.map( (elem, idx) => <Item props={elem} key={idx}/>) 
            ) : (
                <Spinner animation='border' variant='primary' />
        )}
        </>
    );
};
 export default ItemList;
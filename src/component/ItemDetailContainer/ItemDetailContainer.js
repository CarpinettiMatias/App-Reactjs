import React, { useState } from 'react';
import { Modal, Button } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = (props) => {
    const [show, setShow] = useState (false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Button variant='warning' onClick={handleShow} style={{width:'100%'}}>
            Show Detail
        </Button>
        <Modal show={show} onHide={handleClose}>
            <ItemDetail props={props.props} />
        </Modal>
        </>
    );
};

export default ItemDetailContainer;

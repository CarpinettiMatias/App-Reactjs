import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { Row, Col } from "react-bootstrap";

import Data from "../Data/Data.json"

function ItemListContainer() {
    const [ product, setProduct ] = useState(0);


    useEffect(() => {
        const ackData = new Promise ((resolve, reject) => {
            setTimeout(function () {
                resolve(Data);

            }, 2000);
        });

        ackData.then((response) => {
            setProduct(response)
        });
    }, []);

    return (
        <>
            <Row className='Item-list-container'>
                <Col md={12} className='d-flex justify-content-center'>
                    <ItemList items={product} />
                </Col>
            </Row>
        </>
    );
};

export default ItemListContainer;

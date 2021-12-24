import { doc, getDoc } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { BD } from '../../firebase/firebaseConfig';


const ItemDetailContainer = () => {
    const [ item, setItem ] = useState();
    const [ loading, setLoading ] = useState(false);

    const { detailId } = useParams();

    console.log(detailId);

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(BD, 'product', detailId)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                });
            })
            .finally(() => {
                setLoading(false)
            })



    },[detailId]);


    return (


        <>
        {
            loading
            ? <div class="ui active inverted dimmer">
                <div class="ui large text loader">Cargando</div>
             </div>
            : <ItemDetail {...item}/>
        }

        </>
    );
};

export default ItemDetailContainer;
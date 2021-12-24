import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { BD } from '../firebase/firebaseConfig'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    const [ loading, setLoading ] = useState(false);
    const [ product, setProduct ] = useState([]);

     const {catId} = useParams()


    useEffect(() => {

        setLoading(true);

        const productRef = collection(BD, 'product');

        const q = catId
                        ? query(productRef, where('category' , '==' , catId))
                        : productRef ;

        getDocs(q)
            .then((collection) => {
              const items = collection.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data()
              }));
              console.log(items);
              setProduct(items);
            })
            .finally(() => {
                setLoading(false);
            });


    }, [catId]);

    return (
        <>
            {
                loading
                        ?  <div class="ui active inverted dimmer">
                            <div class="ui large text loader">Cargando</div>
                           </div>
                        : <ItemList product={product}/>
            }
        </>
    );
};

export default ItemListContainer;
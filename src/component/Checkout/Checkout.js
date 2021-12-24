import { collection, Timestamp, addDoc, WriteBatch, query, where, documentId, getDocs, writeBatch } from 'firebase/firestore/lite';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../CartContext/CartContext';
import { BD } from '../firebase/firebaseConfig';
import { valueDataForm } from '../helper/valueDataForm';

const Checkout = () => {

    const { cart, totalShop, deleteCart } = useContext(CartContext)

    const [ values, setValues ] = useState ({
        nombre: '',
        apellido: '',
        email:''
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
       e.preventDefault()

            if(!valueDataForm(values)){ return }

        const order = {
            buyer: {...values},
                items: cart,
                total: totalShop(),
                date: Timestamp.fromDate( new Date() )
            }

            const batch = writeBatch(BD);
            const orderRef = collection(BD,'orders');
            const productRef = collection( BD, 'product');
            const q = query(productRef, where(documentId(), 'in', cart.map(el => el.id)));
            const outOfStock = [];
            const product = await getDocs(q);

            product.docs.forEach((doc) => {
                const itemTUpDate = cart.find((prod) => prod.id === doc.id)

                if(doc.data().stock >= itemTUpDate.counter) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - itemTUpDate.counter
                    })
                }else{
                    outOfStock.push(itemTUpDate)
                }
            })
            if(outOfStock.length === 0){
                addDoc(orderRef, order)
                    .then((res) =>{
                        batch.commit()

                        Swal.fire({
                            icon: 'success',
                            title: 'Su orden ha sido un exito',
                            text: `Su numero de orden es: ${res.id}`
                        })
                        deleteCart()
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'No hay stock de los siguientes productos:',
                    text: outOfStock.map(el => el.name).join(',')
                })
            }

    }

    return (
        <>
            {cart.length === 0
                ?  <Navigate to='/' />

                : <div className='container my-5'>
                    <h2>Resumen de Compra:</h2>
                    <hr />

                    <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        name='nombre'
                        value={values.nombre}
                        className='form-control my-2'
                        type="text"
                        placeholder='nombre' 
                    />
                    {values.nombre.length < 3 && <span>Ingrese bien el nombre</span>}
                    <input
                        onChange={handleInputChange}
                        name='apellido'
                        value={values.apellido}
                        className='form-control my-2'
                        type="text"
                        placeholder='apellido'
                    />
                    <input
                        onChange={handleInputChange}
                        name='email'
                        value={values.email}
                        className='form-control my-2'
                        type="email"
                        placeholder='email'
                    />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                    </form>
                </div>
            }
        </>
    );
};

export default Checkout;

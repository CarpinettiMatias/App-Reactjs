import React, { useState } from 'react';

const Form = () => {
    const [ values, setValues ] = useState ({
        nombre: '',
        apellido: '',
        email:''
    });

    const handleInputChange = (e) => {
        console.log(e.target.name);

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    };




    return (
        <form className='container m-5' onSubmit={handleSubmit}>
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
    );
};

export default Form;

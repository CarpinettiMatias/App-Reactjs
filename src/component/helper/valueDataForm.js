import Swal from 'sweetalert2';


export const valueDataForm = (values) => {

    if(values.nombre.length < 4){
        Swal.fire({
            icon: 'error',
            title: 'Nombre invalido'
        })
        return false
    }
    if(values.apellido.length < 4){
        Swal.fire({
            icon: 'error',
            title: 'apellido invalido'
        })
        return false
    }
    if(values.email.length < 7){
        Swal.fire({
            icon: 'error',
            title: 'email invalido'
        })
        return false
    };

    return true

};
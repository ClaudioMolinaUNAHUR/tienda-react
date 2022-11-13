import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

//este Context creado va a ser llamado x los componentes en forma de hook 
//const {funciones destruc} =useContext(UserContext)
export const CarroContext = createContext(); //crea un Context (de acceso global)

// creamos logica para el Provider que va a envolver a la APP
const CarritoProvider = ({children}) => {

    const catMen = "men's clothing"
    const catWomen = "women's clothing"

    const [carrito, setCarrito] = useState(
        JSON.parse(localStorage.getItem('carrito')) || []
    )


    const agregarItem = (item) => { //Trae el arreglo anterior y agrega un elemento
        setCarrito((old) => [...old,item]); // no hace falta usar la variable, trae el cambio anterior
    };

    const sumarCantidad = (item) =>{
        const carritoEditado = carrito.map( prod =>(
            item.id === prod.id ? {...prod, cantidad: prod.cantidad +=1 } : prod
        ))
        setCarrito(carritoEditado)
    }

    const eliminarProducto = (id) =>{

        const items = carrito.filter( producto =>
            producto.id !== id);
        
        setCarrito(items);
    }
       
    return (
        <CarroContext.Provider value={{setCarrito, sumarCantidad, eliminarProducto, agregarItem, carrito, catMen, catWomen}}> {/* se define que valores se van a proveer, x eso es Provider. Se pasa un Objeto con sus funciones */}
            {children} {/* valor recibidos x props descructurado provistos por value de Provider*/}
        </CarroContext.Provider>
    )
}

export default CarritoProvider
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useContext } from 'react';
import {useSearchParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch'
import Items from '../components/Items';
import {CarroContext} from '../context/CarritoProvider';

const Search = () => {

    const {catMen , catWomen} = useContext(CarroContext)
    
    let [searchParams, setSearchParams] = useSearchParams()

    const {data, error, loading} = useFetch(`https://fakestoreapi.com/products`)
        
    if(loading){
        return (<h2 className="margin-top container w-75 mb-5">Loading...</h2>);
    };
    if(error !== ''){
        return (<h2 className="margin-top container w-75 mb-5">{error}...</h2>);    
    };   
    
    const vacio = ""
    
    const handleChange = e => { //captura datos de input en tiempo real
        e.preventDefault()
        let buscar = e.target.value; //value de input
        if(buscar){
            setSearchParams({buscar}); //guardamos como objeto dentro
        }else{
            setSearchParams({});
        };
    };


    return (
        <>
        <form className='margin-top busqueda mx-auto'>
        <div className="input-group mb-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filtro</button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" href="#" value={vacio} onClick={handleChange}>Todo</button></li>
                        <li><button className="dropdown-item" href="#" value={catWomen} onClick={handleChange}>Mujer</button></li>
                        <li><button className="dropdown-item" href="#" value={catMen} onClick={handleChange}>Hombre</button></li>
                    </ul>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Busca lo que necesitas'
                        value={searchParams.get('buscar') || ''} //*si escribis directo en params de url y lo escribe en el input 
                        onChange={handleChange} //si escribis en input, se guarda en setSearchParams, para luego ser usado con get
                    />
                </div>

            </form>
            <div className='container d-flex flex-column align-items-center'>
            {
            data.filter( item =>{
                let buscar = searchParams.get('buscar') //obtener datos de parametos con esa key
                if(!buscar){ //si esta vacio, no hay busqueda, entonces pinta todo el data traido de la api
                    return true
                }else if(buscar === "men's clothing"){
                    return item.category === "men's clothing"
                }else if(buscar === "women's clothing"){
                    return item.category === "women's clothing"
                }
                let title = item.title.toLowerCase() //un dato de fetch para comparar
                return title.startsWith(buscar.toLowerCase()) //si ese dato coincide en sus primeras letras con la busqueda de params
                //va a filtrar solo las coincidencias que empiecen, para despues mapearlas
                }).map( item => (
                    <div 
                        className='mb-4'
                        key={item.id}>
                        <Items
                            data={data}
                            item={item}
                        />                        
                    </div>
            ))}
            </div>
        </>
    )
}

export default Search
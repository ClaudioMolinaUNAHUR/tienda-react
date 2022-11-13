/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {CarroContext} from '../context/CarritoProvider'
const Header = () => {
    
    const {catMen, catWomen} = useContext(CarroContext)
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container d-flex">
                    <NavLink className="navbar-brand font-600 flex-grow-1" to={"/"}>Supreme</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse self-item-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sección
                            </a>
                        <ul className="dropdown-menu bg-white ">
                            <li><Link className="dropdown-item fw-semibold" to={`search/?buscar=${catWomen}`}>Mujer</Link></li>
                            <li><Link className="dropdown-item fw-semibold" to={`search/?buscar=${catMen}`}>Hombre</Link></li>                   
                        </ul>
                        </li>                    
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/carrito"}>Carrito</NavLink>
                        </li>        
                    </ul> 
                    </div>
                </div>
            </nav>
            
        </>
  )
}

export default Header
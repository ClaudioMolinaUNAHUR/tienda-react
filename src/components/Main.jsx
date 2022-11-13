import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CarroContext} from '../context/CarritoProvider'
import Card from './Card'

const Main = () => {
    const {catMen, catWomen} = useContext(CarroContext)
    return (
      <>
          <div className="cabecera">
              <p className='sub-titulo'>En esta Temporada</p>
              <h1 className='titulo fw-bold'>70% Descuento</h1>
          </div>
          <div className="container d-flex justify-content-center align-center p-3 my-5">
                <Link to={`search/?buscar=${catWomen}`}>
                  <Card
                    titulo={"Women's clothes"}
                    url={"https://w0.peakpx.com/wallpaper/877/536/HD-wallpaper-women-black-clothes-asian.jpg"} />
                </Link>
                <Link to={`search/?buscar=${catMen}`}>
                  <Card
                    titulo={"Men's clothes"}
                    url={"https://www.somosmamas.com.ar/wp-content/uploads/2020/12/outfit-casual-hombre-13.jpg"} />
                </Link>
          </div>
      </>
    )
}

export default Main
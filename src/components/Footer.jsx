import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <>
      <footer className='bg-secondary text-light'>
        <article>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="carrito">Carrito</Link></li>
                <li><Link to="search">Buscar</Link></li>
            </ul>
        </article>
        <article>
            <ul>
                <li>Seguinos en:</li>
                <li>
                    <div className="d-flex">
                        <a className="redes" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img className="img-red" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" alt=""/></a>
                        <a className="redes"href="https://www.youtube.com/"  target="_blank" rel="noreferrer"><img className="img-red" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt=""/></a>
                    </div> 
                </li>
            </ul>
        </article>
    </footer>
    </>
  );
};

export default Footer;
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router"; //marca donde van a aparecer las rutas anidadas

import Header from "./components/Header";
import Footer from "./components/Footer";
import { CarroContext } from "./context/CarritoProvider";

const App = () => {
  const { setCarrito, carrito } = useContext(CarroContext);

  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      setCarrito(JSON.parse(localStorage.getItem("carrito")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <>
      <Header />
      <div className="container-fuild">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;

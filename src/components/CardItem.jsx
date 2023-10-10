import React, { useEffect } from "react";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { CarroContext } from "../context/CarritoProvider";

const CardItem = ({ item, data }) => {
  const { title, id, price, description, image } = item;

  const { agregarItem, sumarCantidad } = useContext(CarroContext);

  const [exito, setSeAgrego] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSeAgrego(false);
    }, 2000);
  }, [exito]);

  const seleccionarProducto = (id) => {
    const producto = data.find((item) => item.id === id);
    setSeAgrego(true);
    if (!producto.cantidad && producto.cantidad !== 1) {
      producto.cantidad = 1;
      agregarItem(producto);
      return;
    }
    sumarCantidad(producto);
  };

  return (
    <>
      <div className="card mb-1 items">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={image}
              className="img-contain p-2 rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title font-600">{title}</h5>
              <p className="descripcion">
                <small>{description.substring(0, 50) + "..."}</small>
              </p>
              <p>${price}</p>
            </div>
            <div className="d-flex aling-items-center">
              <Button
                onClick={() => seleccionarProducto(id)}
                className="mx-3 mb-4 d-block"
                variant="primary"
              >
                Agregar al carrito
              </Button>{" "}
              <div className="mx-3 mb-1 agregado">
                {exito && "Agregado al Carrito"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;

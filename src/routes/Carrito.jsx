import React from "react";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { CarroContext } from "../context/CarritoProvider";

const Carrito = () => {
  const { setCarrito, eliminarProducto, carrito } = useContext(CarroContext);

  const aumentar = (id) => {
    const carritoEditado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item);
    setCarrito(carritoEditado);
  };
  const disminuir = (id) => {
    const carritoEditado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) } : item
    );
    setCarrito(carritoEditado);
  };

  return (
    <>
      <Table className="margin-top" bordered>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Item</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={uuidv4()}>
              <td className="d-flex justify-content-around align-items-center">
                {item.cantidad}
                <div>
                  <Button
                    variant="outline-primary signos"
                    onClick={() => aumentar(item.id)}
                  >
                    +
                  </Button>{" "}
                  <Button
                    variant="outline-danger signos"
                    onClick={() => disminuir(item.id)}
                  >
                    -
                  </Button>{" "}
                </div>
              </td>
              <td>{item.title.substring(0, 20) + "..."}</td>
              <td>${item.price}</td>
              <td>
                <Button
                  className="font-600"
                  variant="light"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td colSpan={3}>
              $
              {carrito
                .reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.cantidad, 0).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </Table>
      <div className="d-flex justify-content-center mb-2">
        <Button variant="success w-75 d-inline-block mx-auto">
          Iniciar Compra
        </Button>{" "}
      </div>
    </>
  );
};

export default Carrito;

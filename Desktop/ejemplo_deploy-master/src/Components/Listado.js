import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from 'react-bootstrap';
import nada from '../Imagen/nada.png'
import bote from '../Imagen/bote.png'

const Listado = (props) => {
  return (
    <div className="Carrito">
      <h4>Mi Carrito</h4>
      {props.lista.length === 0 ? (
        <p><img src={nada} className="App-nada" width="75" height="80" alt="vacio" /></p>
      ) : (

        <div>
          <div className="CarritoProductos">
            <p>
              Total:${props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
              <div onClick={()=>props.eliminarCarrito()} ><img src={bote} className="App-bote" width="45" height="50" alt="logo" /></div>
            </p>
          </div>

          <Table striped bordered style={{ width: "50%" , verticalAlign: 'middle' }}>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Código</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.lista.map((p, index) => (
                <tr key={index}>
                  <td>{p.cantidad}</td>
                  <td>{p.codigo}</td>
                  <td>{p.descripcion}</td>
                  <td>${p.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                  <td>${(p.cantidad * p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                  <td><Button onClick={() => props.eliminar(p, index)} variant="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Listado;
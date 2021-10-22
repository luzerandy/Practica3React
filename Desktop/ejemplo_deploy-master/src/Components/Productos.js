import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';

const Productos = (props) => {
  return (
    <div className="Productos">
      <h4>Productos</h4>
       <Table striped bordered style={{ width: "50%", verticalAlign: 'middle'}}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.ProductosLista.map((e, index) => (
            <tr key={index}>
              <td>{e.codigo}</td>
              <td>{e.descripcion}</td>
              <td>
                <img src={e.url} width="45" height="40" alt="no img"/>
              </td>
              <td>${e.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </td><td><Button onClick={() => props.agregar(e)} variant="success">Agregar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Productos;

import React from "react";
import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../css/MainContact.css";

const MainContact = () => {
  const consultas = [
    {
      id: 1,
      nombre: "asda",
      email: "asdas",
      telefono: 351276543,
      consulta: "sasdas",
    },
    {
      id: 2,
      nombre: "a34342323sda",
      email: "a2323s",
      telefono: 351223233,
      consulta: "sasdas",
    },
  ];

  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState(""); //array//
  const [pedidos, setPedidos] = useState(consultas);

  const agregarConsulta = (e) => {
    e.preventDefault();
    setPedidos([...pedidos, { id, nombre, email, telefono, consulta }]);
    alert("me contactare contigo a la brevedad");
    e.target.reset();
  };

  const deleteConsulta = (id) => {
    console.log("borro el id: " + id);
    const resultado = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(resultado);
  };

  return (
    <div className="contact">
      <br />
      <br />
      <h3 className="text-center">Contactanos</h3>
      <br />
      <br />
      <Form className="text-center " onSubmit={agregarConsulta}>
        <Form.Group style={{ width: "60%", margin: "auto" }}>
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setId(e.target.value)}
            required
          />
          <br />
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <br />
          <Form.Label>Consulta</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setConsulta(e.target.value)}
            required
          />
          <br />
          <Button className="btn btn-primary" type="submit">
            enviar mensaje
          </Button>
        </Form.Group>
      </Form>
      <br />
      <br />
      <Table class="styled-table">
        <thead>
          <tr class="active-row">
            <th>Id</th>
            <th>Nombre </th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Consulta</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.nombre}</td>
              <td>{pedido.email}</td>
              <td>{pedido.telefono}</td>
              <td>{pedido.consulta}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteConsulta(pedido.id)}
                >
                  eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MainContact;

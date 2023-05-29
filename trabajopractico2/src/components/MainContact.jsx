import {Fragment, useState } from 'react'
import React from 'react'
import "../css/MainContact.css"

    const MainContact = () => {
    
    
        const [datos, setDatos] = useState({
            nombre: '',
            apellido: ''
        })
    
        const handleInputChange = (event) => {
         
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        }
    
        const enviarDatos = (event) => {
            event.preventDefault();
            console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
            alert("me contactare contigo a la brevedad");
            event.target.reset()
            
        }
    
        return (
            <Fragment >
                <h1>Formulario</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                        <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                <ul>
                    <li>{datos.nombre}</li>
                    <li>{datos.apellido}</li>
                    <li>{datos.email}</li>
                    <li>{datos.telefono}</li>
                </ul>
            </Fragment>
        );
    }
     
    



export default MainContact
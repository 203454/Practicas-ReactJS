import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../models/contact.class';


const ContactoComponente = ({ contacto }) => {

    const [conectadoState, setconectadoState] = useState(contacto.conectado);

    const offline = () => {
        setconectadoState(false)
    }

    const online = () => {
        setconectadoState(true)
    }

    return (
        <div>
            <h1>El contacto es:</h1>
            <h2>NOMBRE: {contacto.nombre + " "+contacto.apellido}</h2>
            <h2>EMAIL: {contacto.email} </h2>
            <h2>STATUS: {`${conectadoState}`} </h2>

            <button onClick={offline}>offline</button>
            <button onClick={online}>online</button>

        </div>
    );
};


ContactoComponente.propTypes = {
    contacto: PropTypes.instanceOf(contact)
};


export default ContactoComponente;

import React from 'react'
import PropTypes from 'prop-types'
import { contact } from '../../models/contact.class';
import ContactoComponente from '../pure/ContactoComponente';

function Contactos() {

  const contactDefault = new contact("Name", "Last name", "email", false)
  const contact1 = new contact("Cristiano", "Ronaldo", "cronald@mail.com", false)
  const contact2 = new contact("Lionel", "messi", "leo@mail.com", true)
  const contact3 = new contact("Roberto", "Carlos", "rcar@mail.com", false)


  return (
    <div>
      <h1>Contactos</h1>
      <div>
  
        <ContactoComponente contacto={contactDefault}></ContactoComponente>
        <ContactoComponente contacto={contact1}></ContactoComponente>
        <ContactoComponente contacto={contact2}></ContactoComponente>
        <ContactoComponente contacto={contact3}></ContactoComponente>

      </div>
    </div>
  )
}


export default Contactos

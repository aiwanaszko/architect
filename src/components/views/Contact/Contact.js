import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

const Contact = () => (
  <div className='container'>
  <div className='contact'>
    <h2>Formularz kontaktowy</h2>
    <h5>Imie</h5>
    <input type='text' />
    <h5>Nazwisko</h5>
    <input type='text' />
    <h5>Adres e-mail</h5>
    <input type='text' />
    <h5>Tresc zapytania</h5>
    <input type='text' />
    <div class='button'>Wyslij</div>
    </div>
  </div>
);

export default Contact;

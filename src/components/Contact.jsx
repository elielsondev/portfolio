import React from 'react';
import data from '../API';
import PropTypes from 'prop-types';

import '../App.css';

function Contact({ language }) {
  return (
    <section className='Contact'>
      <h1>
        {data[language].contact}
      </h1>
    </section>
  )
};

Contact.propTypes = {
  language: PropTypes.number.isRequired,
}

export default Contact;

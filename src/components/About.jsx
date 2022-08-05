import React from 'react';
import data from '../API';
import PropTypes from 'prop-types';

import '../App.css'

function About({ language }) {
  return (
    <section className='About'>
      <h1>
        { data[language].about }
      </h1>
    </section>
  )
};

About.propTypes = {
  language: PropTypes.number.isRequired,
}

export default About;
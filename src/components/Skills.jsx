import React from 'react';
import data from '../API';
import PropTypes from 'prop-types';

import '../App.css';

function Skills({ language }) {
  return (
    <section className='Skills'>
      <h1>
        { data[language].skills }
      </h1>
    </section>
  )
};

Skills.propTypes = {
  language: PropTypes.number.isRequired,
}

export default Skills;

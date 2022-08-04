import React from 'react';
import data from '../API';
import PropTypes from 'prop-types';

import '../App.css';

function Welcome({ language }) {
  return (
    <section className='Welcome'>
      <div>
        <h3>
          {data[language].welcome}
        </h3>
        <h1>
          {data[language].name}
        </h1>
        <h2>
          {data[language].profession}
        </h2>
      </div>

      <div>
        <img 
          src={data[language].profilePicture}
          alt={data[language].name}
        />
      </div>
    </section>
  )
}

Welcome.propTypes = {
  language: PropTypes.number.isRequired
}

export default Welcome;

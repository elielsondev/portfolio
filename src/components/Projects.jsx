import React from 'react';
import data from '../API';
import PropTypes from 'prop-types';

import '../App';

function Projects({ language }) {
  return (
    <section className='Projects'>
      <h1>
        {data[language].projects}
      </h1>
    </section>
  )
};

Projects.propTypes = {
  language: PropTypes.number.isRequired,
}

export default Projects;

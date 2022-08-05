import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function Footer({ language }) {
  return (
    <footer className='Footer'>
      Footer
    </footer>
  )
};

Footer.propTypes = {
  language: PropTypes.number.isRequired,
}

export default Footer;

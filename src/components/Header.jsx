import React from 'react';
import data from '../API';
import PropTypes from 'prop-types';

import '../App.css';

function Header({ language, setLanguage }) {

  const portuguese = () => {
    setLanguage(0);
  };

  const english = () => {
    setLanguage(1);
  };

  const spanish = () => {
    setLanguage(2);
  };
  
  return (
    <header className='Header'>
      <section>
        <img
          src={data[0].flag}
          alt={data[0].language}
          onClick = { () => portuguese() }
          width={30}
          height={20}
        />
        <img
          src={data[1].flag}
          alt={data[1].language}
          onClick = { () => english() }
          width={30}
          height={20}
        />
        <img
          src={data[2].flag}
          alt={data[2].language}
          onClick = { () => spanish() }
          width={30}
          height={20}
        />
      </section>

      <h4>Elielson Nascimento</h4>

      <section>
        <nav>
          <a href="a">
            {data[language].about}
          </a>
          <a href="a">
            {data[language].skills}
          </a>
          <a href="a">
            {data[language].projects}
          </a>
          <a href="a">
            {data[language].contact}
          </a>
        </nav>    
      </section>
    </header>
  )
}

Header.propTypes = {
  language: PropTypes.number.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default Header;
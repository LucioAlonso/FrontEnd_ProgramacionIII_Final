import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Button_Yellow.css';

const Button_Yellow = ({text}) => {
  return (
        <div>
          <button className='button_yellow'>
            {text}
          </button>
        </div>
  );
}

export default Button_Yellow;
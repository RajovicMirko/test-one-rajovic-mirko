import './Button.scss';
import React from 'react';

function Button({ addClass, disabled, onClick }) {
  return <button
    className={`${addClass} ${disabled ? 'disabled' : ''}`}
    disabled={disabled}
    onClick={onClick}
  />
};

export default Button;

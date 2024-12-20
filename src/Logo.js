import React from 'react';
import './Logo.css';

function Logo({ imgSrc }) {
  return (
    <a href="/" className="logo">
      <img src={imgSrc} alt="Logo" />
    </a>
  );
}

export default Logo;

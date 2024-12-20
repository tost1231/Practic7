import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

function Menu({ list }) {
  return (
    <ul className="menu">
      {list.map((item, index) => (
        <MenuItem key={index} text={item.text} url={item.url} />
      ))}
    </ul>
  );
}

export default Menu;

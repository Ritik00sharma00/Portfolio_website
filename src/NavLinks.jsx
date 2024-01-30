import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <Link className='Navlist' to={props.linkname} style={{ textDecoration: 'none' }}>
      <li className='NavItem'>{props.text}</li>
    </Link>
  );
};

export default NavLinks;

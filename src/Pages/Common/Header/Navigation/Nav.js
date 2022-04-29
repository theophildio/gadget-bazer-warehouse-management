import React from 'react';
import CustomLink from './CustomLink/CustomLink';

const Nav = () => {
  return (
    <nav>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to='/inventory'>Manage Inventory</CustomLink>
    </nav>
  );
};

export default Nav;
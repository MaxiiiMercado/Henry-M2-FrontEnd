import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <header>
      <img src={Logo} alt="Logo Henry"/>
      <SearchBar onSearch={onSearch}/>
    </header>
  );
};

export default Nav;

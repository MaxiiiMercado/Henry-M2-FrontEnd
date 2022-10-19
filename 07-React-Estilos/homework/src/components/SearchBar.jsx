import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={styles.SearchContainer}>
      <input type="text" name="inputCiudad" placeholder="Ciudad..." />
      <button onClick={() => onSearch('Buscando ciudad')}>Agregar</button>
    </div>
  )
};

import React from 'react';
import styles from './Card.module.css';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={styles.cardContainer}>
      <span>
        <button onClick={onClose}>X</button>
      </span>
      <h3>{name}</h3>
      <div className={styles.tempContainer}>
        <div>
          <h4>Min</h4>
          <h4>{min}</h4>
        </div>
        <div>
          <h4>Max</h4>
          <h4>{max}</h4>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Clima" />
        </div>
      </div>
    </div>
  )
};

import React from 'react';

export default function Card({ max, min, name, img, onClose }) {
    // acá va tu código
    return (
        <div>
            <button onClick={onClose}>X</button>
            <h3>{name}</h3>
            <div>
                <div>
                    <h4>Min</h4>
                    <h4>{min}</h4>
                </div>
                <div>
                    <h4>Max</h4>
                    <h4>{max}</h4>
                </div>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Clima" />
            </div>
        </div>
    )
};

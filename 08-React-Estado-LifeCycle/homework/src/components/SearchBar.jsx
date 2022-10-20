import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("")

  const changeCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => changeCity(e)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}

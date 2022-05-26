import React, { useState, useEffect } from 'react';
import axios from "axios";
import './data.css';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setData(response.data.results));
  }, []);

  console.log('data', data[1]);

  return (
    <div className="cardWrapper">
      {data.map((data) => (
        <div className="card" key={data.id}>
          <h4>Name: {data.name}</h4>
          <p>Species: {data.species}</p>
          <img src={data.url} alt="img" />
        </div>
      ))}
    </div>
  );
}

export default Data;

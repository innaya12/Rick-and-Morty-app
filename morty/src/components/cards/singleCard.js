import React, { useState, useEffect } from 'react';
import axios from "axios";
import './style.css';

const SingleCard = (id) => {
  const [dataById, setDataById] = useState({});

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setDataById(response.data.results[id]));
  }, []);

  console.log('dataById', dataById);

  return (
    <div className="cardWrapper">
        <div className="card" key={data.id}>
            <h4>{dataById.name}</h4>
            <p>Species: {dataById.species}</p>
            <img src={dataById.image} alt="img" />
            <p>Status: {dataById.status}</p>
        </div>
    </div>
  );
}

export default SingleCard;

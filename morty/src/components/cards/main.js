import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'; 
import './style.css';

const Main = (props) => {
  const [data, setData] = useState([]);
  const [number, setId] = useState(7);


  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => setData(response.data.results));
  }, []);

  const imageClick = (id) => {
    setId(id);
  }

  return (
    <div className="cardWrapper">
      {data.map((data) => (
        <div className="card" key={data.id}>
          <h4>{data.name}</h4>
          <p>Species: {data.species}</p>
          <div className="container">
            <Link 
              to={ '/character' } 
              state= {{ id: number }}>
              <img className="image" src={data.image} alt="Avatar" onClick={() => imageClick(data.id)} />
            </Link>
            <div className="overlay">Status: {data.status}</div>
          </div>
          <p>Location - {data.location.name}</p>
        </div>
        ))}
    </div>
  );
}

export default Main;

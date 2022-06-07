import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './style.css';

const SingleCard = (props) => {
  let Location = useLocation();
  const [character, setCharacterById] = useState();
  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${Location.state.id}`)
    .then((response) => setCharacterById(response.data));
  },[]);

  return (
    <div className="cardWrapper">
        <h1>singleCard</h1>
        {typeof character !== 'undefined' &&
          <div className="card">
              <h4>{character.name}</h4>
              <p>Species: {character.species}</p>
              <img src={character.image} alt="img" />
              <p>Status: {character.status}</p>
          </div>
        }
    </div>
  );
}

export default SingleCard;

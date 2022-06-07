import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './style.css';

const SingleCard = () => {
  let Location = useLocation();
  const [character, setCharacterById] = useState();

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${Location.state.id}`)
    .then((response) => setCharacterById(response.data));
  },[]);

  return (
    <div className="cardWrapper">
      {typeof character !== 'undefined' &&
        <div className="animationDiv">
          <h1>{character.name}</h1>
          <p><b>Species:</b> {character.species}</p>
          <img src={character.image} alt="img" className="singleImage"/>
          <p><b>Status:</b> {character.status}</p>
        </div>
      }
    </div>
  );
}

export default SingleCard;

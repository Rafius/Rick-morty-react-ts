import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import fetchApi from "../../../utils/fetch-api";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchApi("https://rickandmortyapi.com/api/character").then(
      ({ results }) => {
        setCharacters(results);
      }
    );
  }, []);

  return (
    <div className="Characters">
      {characters.map(({ id, status, name, image }) => (
        <Link className="Character" key={id} to={`/character/${id}`}>
          <img loading="lazy" src={image}></img>
        </Link>
      ))}
    </div>
  );
};

export default Characters;

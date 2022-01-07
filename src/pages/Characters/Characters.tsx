import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import fetchApi from "../../../utils/fetch-api";
import "./Characters.css";
import { CharactersType } from "./CharactersTypes";

const Characters = () => {
  const [characters, setCharacters] = useState<CharactersType[]>([]);
  useEffect(() => {
    fetchApi("https://rickandmortyapi.com/api/character").then(
      ({ results }) => {
        setCharacters(results);
      }
    );
  }, []);

  return (
    <div className="Characters">
      {characters.map(({ id, status, name, image, gender }) => (
        <Link className="Character" key={id} to={`/character/${id}`}>
          <img loading="lazy" src={image}></img>
          {name} {gender}
          <span className={`Character-status ${status}`}>{status}</span>
        </Link>
      ))}
      {!characters && <div>Loading...</div>}
    </div>
  );
};

export default Characters;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import fetchApi from "../../../utils/fetch-api";
import { CharactersType } from "../Characters/CharactersTypes";
import "./Character.css";

const Character = () => {
  const [character, setCharacter] = useState<CharactersType>();
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data: CharactersType) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Character-Container">
      <img src={character?.image}></img>
      Character {character?.name}
    </div>
  );
};

export default Character;

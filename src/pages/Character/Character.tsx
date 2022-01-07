import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import fetchApi from "../../../utils/fetch-api";
import "./Character.css";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}
const Character = () => {
  const [character, setCharacter] = useState<Character | undefined>();
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`https://rickandmortyapi.com/api/character/${id}`).then((data) => {
      setCharacter(data);
    });
  }, []);

  console.log(character);

  return (
    <div>
      Character {character?.name}
      <img src={character?.image}></img>
    </div>
  );
};

export default Character;

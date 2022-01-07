import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CharactersType } from "../../types/CharactersTypes";
import fetchApi from "../../utils/fetch-api";
import "./CharacterInfo.css";

const CharacterInfo = () => {
  const [characterInfo, setCharacterInfo] = useState<CharactersType>();
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data: CharactersType) => {
        setCharacterInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Character-Info">
      <img src={characterInfo?.image}></img>
      {characterInfo?.name}
    </div>
  );
};

export default CharacterInfo;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CharacterType } from "../../types/CharactersTypes";
import fetchApi from "../../utils/fetch-api";
import "./CharacterInfo.css";

const CharacterInfo = () => {
  const [characterInfo, setCharacterInfo] = useState<CharacterType>();
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`https://rickandmortyapi.com/api/character/${id}`).then(
      (data: CharacterType) => {
        setCharacterInfo(data);
      }
    );
  }, []);

  return (
    <div className="Character-Info">
      <img src={characterInfo?.image}></img>
      {characterInfo?.name}
    </div>
  );
};

export default CharacterInfo;

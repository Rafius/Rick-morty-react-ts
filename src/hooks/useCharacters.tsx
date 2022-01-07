import { useState, useEffect } from "react";
import { CharactersType } from "../types/CharactersTypes";

import fetchApi from "../utils/fetch-api";

const useCharacters = () => {
  const [characters, setCharacters] = useState<CharactersType[]>([]);

  useEffect(() => {
    fetchApi("https://rickandmortyapi.com/api/character").then(
      ({ results }) => {
        setCharacters(results);
      }
    );
  }, []);

  return { characters };
};

export default useCharacters;

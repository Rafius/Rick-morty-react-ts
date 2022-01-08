import { useState, useEffect } from "react";
import { CharacterType, CharacterInfo } from "../types/CharactersTypes";

const useFilter = (results: CharacterType[]) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  results = results.filter((character: CharacterType) =>
    character.name.toLowerCase().includes(value)
  );

  return {
    value,
    results,
    handleInputChange
  };
};

export default useFilter;

import { useState, useEffect } from "react";
import { CharacterInfo } from "../types/CharactersTypes";

import fetchApi from "../utils/fetch-api";

const useCharacters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterInfo>({
    info: {
      count: 0,
      pages: 0,
      next: "",
      prev: ""
    },
    results: []
  });

  const handlePaginationClick = (e: any) => {
    setCurrentPage(parseInt(e.target.innerText));
  };

  const {
    info: { pages }
  } = characters;

  const paginationButtons = () => {
    const delta = 1;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    let result = [];

    result = Array.from({ length: pages }, (_, k) => k + 1).filter((i) => {
      if (i === 1 || i === pages) return true;
      return i && i >= left && i < right;
    });

    return result;
  };

  useEffect(() => {
    fetchApi(
      `https://rickandmortyapi.com/api/character?page=${currentPage}`
    ).then((data) => {
      setCharacters(data);
    });
  }, [currentPage]);

  return {
    characters,
    currentPage,
    paginationButtons,
    handlePaginationClick
  };
};

export default useCharacters;

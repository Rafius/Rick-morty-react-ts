import "./Characters.css";
import Character from "../../components/Character";
import { CharacterType } from "../../types/CharactersTypes";
import useCharacters from "../../hooks/useCharacters";
import Pagination from "../../components/Pagination";

const Characters = () => {
  const { characters, currentPage, handlePaginationClick, paginationButtons } =
    useCharacters();

  return (
    <div>
      <Pagination
        paginationButtons={paginationButtons}
        handlePaginationClick={handlePaginationClick}
        currentPage={currentPage}
      />
      <div className="Characters">
        {characters.results.map((character: CharacterType) => (
          <Character key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;

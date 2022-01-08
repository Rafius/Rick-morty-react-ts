import "./Characters.css";
import Character from "../../components/Character";
import { CharacterType } from "../../types/CharactersTypes";
import useCharacters from "../../hooks/useCharacters";
import Pagination from "../../components/Pagination";
import Input from "../../components/Input";
import useFilter from "../../hooks/useFilter";

const Characters = () => {
  const { characters, currentPage, handlePaginationClick, paginationButtons } =
    useCharacters();

  const { value, handleInputChange, results } = useFilter(characters.results);

  return (
    <div>
      <Input value={value} handleInputChange={handleInputChange} />
      <Pagination
        paginationButtons={paginationButtons}
        handlePaginationClick={handlePaginationClick}
        currentPage={currentPage}
      />
      <div className="Characters">
        {results?.map((character: CharacterType) => (
          <Character key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;

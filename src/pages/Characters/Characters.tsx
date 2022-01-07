import "./Characters.css";
import Character from "../../components/Character";
import { CharactersType } from "../../types/CharactersTypes";
import useCharacters from "../../hooks/useCharacters";

const Characters = () => {
  const { characters } = useCharacters();

  return (
    <div className="Characters">
      {characters.map((character: CharactersType) => (
        <Character {...character} />
      ))}
    </div>
  );
};

export default Characters;

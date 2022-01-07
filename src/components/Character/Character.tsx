import { Link } from "react-router-dom";

import { CharactersType } from "../../types/CharactersTypes";
import "./Character.css";

const CharacterInfo = ({ id, image, name, status }: CharactersType) => (
  <Link className="Character" key={id} to={`/character-info/${id}`}>
    <img className="Character-img" loading="lazy" src={image}></img>
    <div className="Character-Name">{name}</div>
    <span className={`Character-status ${status}`}>{status}</span>
  </Link>
);

export default CharacterInfo;

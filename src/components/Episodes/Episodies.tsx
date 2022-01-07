import { useState, useEffect } from "react";
import fetchApi from "../../utils/fetch-api";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetchApi("https://rickandmortyapi.com/api/episode").then(({ results }) => {
      setEpisodes(results);
    });
  }, []);

  return (
    <ul>
      {episodes.map(({ id, episode, name }) => (
        <li key={id}>
          {episode} {""}
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Episodes;

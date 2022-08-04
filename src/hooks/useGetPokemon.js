import { useEffect, useState } from 'react'
const useGetPokemon = () => {
  const [count, setCount] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + count
      );
      const data = await response.json();
      setPokemon(data);
    };
    getPosts();
  }, [count]);
  return {
    count,
    setCount,
    pokemon,
  };
};
export { useGetPokemon };

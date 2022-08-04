import { useId, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import CardPokemon from "../components/CardPokemon";
import ButtonComponent from "../components/ButtonComponent";
import CartButton from "../components/CartButton";

function Home() {
  const [next, setNext] = useState(0);
  const { data, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=12&offset=" + next
  );
const id=useId()
  return (
    <div className="w-full h-screen grid place-items-center  relative ">
      <div className="w-3/4 grid grid-cols-4 gap-3  flex-wrap">
        {loading ? (
          <h1>cargando pokemons</h1>
        ) : (
          data &&
          data.results.map((pokemon,index) => (
            <CardPokemon key={pokemon.name} id={index+id} {...pokemon} />
          ))
        )}
      </div>
      <div className="flex justify-between">
      <ButtonComponent label="previous" action={() =>{
        next > 0 && setNext(next - 12)
      }} />
        <ButtonComponent label="Next" action={() => setNext(next + 12)} />
      </div>
      <CartButton/>
    </div>
  );
}

export default Home;

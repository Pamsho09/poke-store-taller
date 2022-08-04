import React from "react";
import { useFetch } from "../hooks/useFetch";
import useCartStore from "../store/cartStore";
import ButtonComponent from "./ButtonComponent";

function CardPokemon(props) {
  const { url, name, id } = props;
  const { data, loading } = useFetch(url);
  const { addToCart } = useCartStore((state) => state);
  return (
    <div className="w-full rounded-xl p-2 flex flex-col items-center shadow-xl relative">
      {loading ? (
        <h1>cargando pokemon</h1>
      ) : (
        data &&
        data.sprites &&
        data.sprites.front_default && (
          <img
            src={data.sprites.front_default}
            alt="pokemon"
            className="w-40"
          />
        )
      )}
      <span className="font-bold text-sm absolute top-3 left-3">{name}</span>
      <div className="w-full flex justify-between">
        <ButtonComponent
          label="Add"
          action={() => addToCart({ ...data, id })}
        />
        <span className="font-bold text-base text-gray-500">
          ${data && data.base_experience}
        </span>
      </div>
    </div>
  );
}

export default CardPokemon;

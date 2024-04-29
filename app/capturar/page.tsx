'use client'

import { useState } from "react";
import { usePokemonStore } from "../store/pokemon-store";
import Link from "next/link";
import Pokemon from "../data/pokemon-data";

export default function Capturar() {
  const pokemons = usePokemonStore(state => state);
  const [currentId, setCurrentId] = useState(1);

  const handleCapture = () => {
    const pokemon = pokemons.getPokemonById(currentId);

    if (pokemon && pokemon.captured) {
      pokemons.releasePokemon(currentId);
    } else {
      pokemons.capturePokemon(currentId);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex">
        <Link href="/">
          <button>Pokedex</button>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="me-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Previous</button>
        </div>
        <div className={`flex flex-col justify-center text-center bg-capturar h-[80vh] w-[50vw] bg-cover rounded-xl`}>
          <div className="text-4xl font-bold text-white my-5">{pokemons.getPokemonById(currentId)?.name}</div>
          <div className="flex flex-row flex-1">
            <div className="flex h-fit p-12">
              <img src={pokemons.getPokemonById(currentId)?.image.src} alt='' className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
          </div>
          <div className="flex w-full justify-center my-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCapture}>
              {pokemons.getPokemonById(currentId)?.captured ? 'Free' : 'Catch'}
            </button>
          </div>
        </div>
        <div className="ms-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Next</button>
        </div>
      </div>
    </div>
  )
}
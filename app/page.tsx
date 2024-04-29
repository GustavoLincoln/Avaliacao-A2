'use client'

import React, { useState } from "react";
import Link from "next/link";
import PokemonCard from "./components/pokemon-card";
import { usePokemonStore } from "./store/pokemon-store";
import SearchBar from "./components/search-bar";
import pokeballImage from '/public/assets/pokebola.png';

export default function Index() {
  const pokemons = usePokemonStore(state => state);

  const capturePokemon = (id: number) => {
    pokemons.capturePokemon(id)
  };

  const releasePokemon = (id: number) => {
    pokemons.releasePokemon(id)
  };

  return (
    <>
      <div className="grid-cols-12">
        <h1>Hello, trainer!</h1>
        <div className="flex justify-between">
          <h2>Caught Pokémons: {pokemons.capturados.length}</h2>
          <Link href="/capturar">
            <button className="relative flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              <img src={pokeballImage.src} alt="Pokébola" className="grayscale-00 w-4 h-4 mr-2" />
              Catch
            </button>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Pokemons</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {pokemons.pokemons.map((pokemon, index) => (
                <div key={index} className="mb-4">
                  <PokemonCard
                    key={index}
                    pokemon={pokemon}
                    capturePokemon={capturePokemon}
                    releasePokemon={releasePokemon}
                    capturado={pokemons.capturados.includes(pokemon.id)}
                  />
                  <Link href={`/pokemon/${pokemon.id}`}>
                    <button className="hover:font-bold">See details</button>
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}



'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePokemonStore } from "../store/pokemon-store";
import PokemonCard from "./pokemon-card";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const pokemons = usePokemonStore((state) => state.pokemons);

  const filteredPokemons = pokemons.filter((pokemon) => {
    if (!searchTerm) {
      return false;
    }
    if (pokemon.id.toString().includes(searchTerm)) {
      return true;
    }
    if (
      pokemon.types.some((type) =>
        type.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ) {
      return true;
    }
    if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  });

  const handleSearchInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20" >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Pokemon by ID, Type or Name"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>

      {filteredPokemons.length > 0 && (
        <div className="search-results bg-gray-400 rounded-lg p-5 mt-3 text-white">
          {filteredPokemons.map((pokemon) => (
            <div key={pokemon.id} className="search-result">
              <div>
                <div className={`aspect-h-1 aspect-w-1 w-full p-3 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ${pokemon.captured ? 'captured' : ''}`}>
                  <div className="static flex justify-end top-2 right-2 text-gray-500 font-bold">00{pokemon.id}</div>
                  <img src={pokemon.image.src} alt='' className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  <h1 className="mt-4 text-xl text-gray-700">{pokemon.name}</h1>
                  <div className='columns-3'>
                    {pokemon.types.map((type, index) => (
                      <div key={index} className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${type.color} py-1.5 px-3 font-sans text-xs font-bold uppercase text-white`}>
                        <span className="">{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link href={`/pokemon/${pokemon.id}`}>
                <button className="hover:text-black">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

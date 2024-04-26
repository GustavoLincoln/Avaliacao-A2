// 'use client'

// import Link from "next/link";
// import PokemonCard from "./components/page";
// import pokemonData from "./data/pokemon-data";

// export default function Index() {

//   // return <Link href={"/home"}>AQUI</Link>

//   return <>
//     <div className="grid-cols-12">
//       {/* <Image alt='pokebola' src={pokebola} className="h-full w-4 object-cover object-center group-hover:opacity-75" /> */}
//       <h1>Olá, página do Home!</h1>
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <h1 className="sr-only">Pokemons</h1>
//           <label className="inline-flex items-center cursor-pointer">
//             <input type="checkbox" value="" className="sr-only peer" />
//               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
//           </label>

//           {<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//             {pokemonData.map((pokemon, index) => (
//               <PokemonCard key={index} {...pokemon} />
//             ))}
//           </div>}
//         </div>
//       </div>
//     </div>
//   </>
// }

import React from "react";
import Link from "next/link";
import PokemonCard from "./components/page"; // Importe o componente do card do Pokémon
import pokemonData from "./data/pokemon-data"; // Importe os dados dos Pokémon

export default function Index() {
  return (
    <>
      <div className="grid-cols-12">
        <h1>Olá, página do Home!</h1>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

            <h1 className="sr-only">Pokemons</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {pokemonData.map((pokemon, index) => (
              <div key={index} className="mb-4">
                <PokemonCard key={index} pokemon={pokemon} />
                {/* <Link href={`/pokemon/${pokemon.id}`} passHref>
                <div className="cursor-pointer text-blue-600">Ver detalhes</div>
                </Link> */}
              </div>
            ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


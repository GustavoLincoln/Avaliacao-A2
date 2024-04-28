'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePokemonStore } from '@/app/store/pokemon-store';
import { Pokemon } from '@/app/data/pokemon-data';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const PokemonDetailsPage = () => {
  const { id } = useParams<{id: string }>() as {id: string};
  
  const [pokemon, setPokemon] = useState<Pokemon | null>(null); // Estado para armazenar os dados do Pokémon
  const getPokemonById = usePokemonStore((state) => state.getPokemonById); // Função para buscar os dados do Pokémon pelo ID

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }

      try {
        const data = getPokemonById(parseInt(id as string));
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
    return () => {
      setPokemon(null);
    };
  }, [id, getPokemonById]);

  if (!id || !pokemon) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className="mt-6 flex items-center justify-center">
        <div className="">
          <div className="aspect-h-1 aspect-w-1 w-full p-3 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <div className="static flex justify-end top-2 right-2 text-gray-500 font-bold">00{id}</div>
            <img src={pokemon.image.src} alt={pokemon.name} className="h-full w-full object-cover object-center group-hover:opacity-75" />
            <h1 className="mt-4 text-xl text-gray-700">{pokemon.name}</h1>
            <div className='columns-3'>
              {pokemon.types.map((type, index) => (
                <div key={index} className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${type.color} py-1.5 px-3 font-sans text-xs font-bold uppercase text-white`}>
                  <span className="">{type.name}</span>
                </div>
              ))}
            </div>
            <div className='flex justify-between mt-4'>
              <Link href={`/pokemon/${pokemon.previous}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Anterior
                </button>
              </Link>
              <Link href={`/pokemon/${pokemon.next}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Proximo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailsPage;

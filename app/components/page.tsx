import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Pokemon } from '../data/pokemon-data';
import Link from 'next/link';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, image, types } = pokemon;
  return (
    // <a href="/home" className="group">
    <>
      <div className="aspect-h-1 aspect-w-1 w-full p-3 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image src={image} alt={name} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        <div className="static flex justify-end top-2 right-2 text-gray-500 font-bold">00{id}</div>
      </div>
      <h1 className="mt-4 text-xl text-gray-700">{name}</h1>
      <div className='columns-3'>
        {types.map((type, index) => (
          <div key={index} className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${type.color} py-1.5 px-3 font-sans text-xs font-bold uppercase text-white`}>
            <span className="">{type.name}</span>
          </div>
        ))}
      </div>
      <div>
        <Link href={`/pokemon/${pokemon.id}`} passHref>
          <button>Ver detalhes</button>
        </Link>
      </div>
    </>
  );
}

export default PokemonCard;
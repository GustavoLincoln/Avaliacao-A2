'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Pokemon } from '../data/pokemon-data';
import pokeballImage from '/public/assets/pokebola.png';

interface PokemonCardProps {
  pokemon: Pokemon;
  capturePokemon: (id: number) => void;
  releasePokemon: (id: number) => void;
  capturado: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, capturePokemon, releasePokemon, capturado }) => {
  const { id, name, image, types } = pokemon;

  const handleCapture = () => {
    if (capturado) {
      releasePokemon(id);
    } else {
      capturePokemon(id);
    }    
  };

  return (
    <>
      <div className={`aspect-h-1 aspect-w-1 w-full p-3 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ${capturado ? 'captured' : ''}`}>
        <div className="static flex justify-end top-2 right-2 text-gray-500 font-bold">00{id}</div>
        <Image src={image} alt={name} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        <h1 className="mt-4 text-xl text-gray-700">{name}</h1>
        <div className='columns-3'>
          {types.map((type, index) => (
            <div key={index} className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${type.color} py-1.5 px-3 font-sans text-xs font-bold uppercase text-white`}>
              <span className="">{type.name}</span>
            </div>
          ))}
        </div>
        <div>
          <button onClick={handleCapture} className="relative flex items-center">
            <Image src={pokeballImage} alt="Pokébola" className="grayscale w-4 h-4 mr-2" />
            {capturado ? 'Free' : 'Catch'}
          </button>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;


import { StaticImageData } from "next/image";
import charmander from '../assets/charmander.png';
import bulbasaur from '../assets/bulbasaur.png';
import ivysaur from '../assets/ivysaur.png';
import venusaur from '../assets/venusaur.png';
import charmeleon from '../assets/charmeleon.png';
import charizard from '../assets/charizard.png';
import squirtle from '../assets/squirtle.png';
import wartortle from '../assets/wartortle.png';
import blastoise from '../assets/blastoise.png';

export interface Pokemon {
  id: number;
  name: string;
  image: StaticImageData;
  types: { name: string; color: string }[];
  previous: number;
  next: number;
}

const pokemonData: Pokemon[] = [
  { id: 1, name: 'Bulbasaur', image: bulbasaur, types: [{ name: 'GRASS', color: 'bg-lime-700'}, { name: 'POISON', color: 'bg-purple-700'}], previous: 0, next: 2 },
  { id: 2, name: 'Ivysaur', image: ivysaur, types: [{ name: 'GRASS', color: 'bg-lime-700'}, { name: 'POISON', color: 'bg-purple-700'}], previous: 1, next: 3 },
  { id: 3, name: 'Venusaur', image: venusaur, types: [{ name: 'GRASS', color: 'bg-lime-700'}, { name: 'POISON', color: 'bg-purple-700'}], previous: 2, next: 4 },
  { id: 4, name: 'Charmander', image: charmander, types: [{ name: 'FIRE', color: 'bg-red-600'}], previous: 3, next: 5 },
  { id: 5, name: 'Charmeleon', image: charmeleon, types: [{ name: 'FIRE', color: 'bg-red-600'}], previous: 4, next: 6 },
  { id: 6, name: 'Charizard', image: charizard, types: [{ name: 'FIRE', color: 'bg-red-600'}, { name: 'FLYING', color: 'bg-sky-300'}], previous: 5, next: 7 },
  { id: 7, name: 'Squirtle', image: squirtle, types: [{ name: 'WATER', color: 'bg-blue-500' }], previous: 6, next: 8 },
  { id: 8, name: 'Wartortle', image: wartortle, types: [{ name: 'WATER', color: 'bg-blue-500' }], previous: 7, next: 9},
  { id: 9, name: 'Blastoise', image: blastoise, types: [{ name: 'WATER', color: 'bg-blue-500' }], previous: 8, next: 10},
];

export default pokemonData;
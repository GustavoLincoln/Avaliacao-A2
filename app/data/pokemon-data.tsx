import { StaticImageData } from "next/image";
import charmander from '/public/assets/charmander.png';
import bulbasaur from '/public/assets/bulbasaur.png';
import ivysaur from '/public/assets/ivysaur.png';
import venusaur from '/public/assets/venusaur.png';
import charmeleon from '/public/assets/charmeleon.png';
import charizard from '/public/assets/charizard.png';
import squirtle from '/public/assets/squirtle.png';
import wartortle from '/public/assets/wartortle.png';
import blastoise from '/public/assets/blastoise.png';

export interface Pokemon {
  id: number;
  color: string;
  name: string;
  description: string;
  image: StaticImageData;
  types: { name: string; color: string }[];
  captured: boolean;
  previous: number;
  next: number;
}

const pokemonData: Pokemon[] = [
  { 
    id: 1,
    color: 'bg-green-200', 
    name: 'Bulbasaur',
    description: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of the three first partner Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.',
    image: bulbasaur,
    types: [{ name: 'GRASS', color: 'bg-lime-700'}, { name: 'POISON', color: 'bg-purple-700'}],
    captured: false,
    previous: 0,
    next: 2 
  },
  { 
    id: 2,
    color: 'bg-green-200', 
    name: 'Ivysaur', 
    description: 'Ivysaur (Japanese: フシギソウ Fushigisou) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves from Bulbasaur starting at level 16 and evolves into Venusaur starting at level 32.',
    image: ivysaur, 
    types: [{ name: 'GRASS', color: 'bg-lime-700'}, { name: 'POISON', color: 'bg-purple-700'}], 
    captured: false, 
    previous: 1, 
    next: 3 
  },
  { 
    id: 3,
    color: 'bg-green-200', name: 'Venusaur', 
    description: 'Venusaur (Japanese: フシギバナ Fushigibana) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves from Ivysaur starting at level 32. It is the final form of Bulbasaur. Venusaur has two forms: Mega Venusaur and Gigantamax Venusaur. It can Mega Evolve into Mega Venusaur using the Venusaurite, and can Gigantamax into Gigantamax Venusaur if it has the Gigantamax Factor. Gigantamax Venusaur was introduced in The Isle of Armor. Venusaur is the game mascot of Pokémon Green and its remake Pokémon LeafGreen, appearing on the box art of both games.',
    image: venusaur, 
    types: [{ name: 'GRASS', color: 'bg-lime-700'}, { name: 'POISON', color: 'bg-purple-700'}], 
    captured: false, 
    previous: 2, 
    next: 4 
  },
  { 
    id: 4,
    color: 'bg-orange-200', 
    name: 'Charmander', 
    description: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36. Along with Bulbasaur and Squirtle, Charmander is one of the three first partner Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.',
    image: charmander, 
    types: [{ name: 'FIRE', color: 'bg-red-600'}], 
    captured: false, 
    previous: 3, 
    next: 5 
  },
  { 
    id: 5,
    color: 'bg-orange-200', 
    name: 'Charmeleon', 
    description: 'Charmeleon (Japanese: リザード Lizardo) is a Fire-type Pokémon introduced in Generation I. It evolves from Charmander starting at level 16 and evolves into Charizard starting at level 36.',
    image: charmeleon, 
    types: [{ name: 'FIRE', color: 'bg-red-600'}], 
    captured: false, 
    previous: 4, 
    next: 6 
  },
  { 
    id: 6,
    color: 'bg-orange-200', 
    name: 'Charizard', 
    description: 'Charizard (Japanese: リザードン Lizardon) is a dual-type Fire/Flying Pokémon introduced in Generation I. It evolves from Charmeleon starting at level 36. It is the final form of Charmander. Charizard has three forms: Mega Charizard X, Mega Charizard Y, and Gigantamax Charizard. It can Mega Evolve into Mega Charizard X using the Charizardite X and Mega Charizard Y using the Charizardite Y, and can Gigantamax into Gigantamax Charizard if it has the Gigantamax Factor. Charizard is the game mascot of Pokémon Red and its remake Pokémon FireRed, appearing on the boxart of both games. Along with Pikachu, Talonflame, and Decidueye, Charizard is one of the four partner Pokémon available through the Unite Licenses in Pokémon UNITE as of version 1.12.1.2.',
    image: charizard, 
    types: [{ name: 'FIRE', color: 'bg-red-600'}, { name: 'FLYING', color: 'bg-sky-300'}], 
    captured: false, 
    previous: 5, 
    next: 7 
  },
  { 
    id: 7,
    color: 'bg-blue-200', 
    name: 'Squirtle', 
    description: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of the three first partner Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.',
    image: squirtle, 
    types: [{ name: 'WATER', color: 'bg-blue-500' }], 
    captured: false, 
    previous: 6, 
    next: 8 
  },
  { 
    id: 8,
    color: 'bg-blue-200', 
    name: 'Wartortle', 
    description: 'Wartortle (Japanese: カメール Kameil) is a Water-type Pokémon introduced in Generation I. It evolves from Squirtle starting at level 16 and evolves into Blastoise starting at level 36.',
    image: wartortle, 
    types: [{ name: 'WATER', color: 'bg-blue-500' }], 
    captured: false, 
    previous: 7, 
    next: 9
  },
  { 
    id: 9,
    color: 'bg-blue-200', 
    name: 'Blastoise', 
    description: 'Blastoise (Japanese: カメックス Kamex) is a Water-type Pokémon introduced in Generation I. It evolves from Wartortle starting at level 36. It is the final form of Squirtle. Blastoise has two forms: Mega Blastoise and Gigantamax Blastoise. It can Mega Evolve into Mega Blastoise using the Blastoisinite, and can Gigantamax into Gigantamax Blastoise if it has the Gigantamax Factor. Gigantamax Blastoise was introduced in The Isle of Armor. Blastoise is the game mascot of the Japanese and international versions of Pokémon Blue, appearing on the boxart of both games.',
    image: blastoise, 
    types: [{ name: 'WATER', color: 'bg-blue-500' }], 
    captured: false, 
    previous: 8, 
    next: 10},
];

export default pokemonData;
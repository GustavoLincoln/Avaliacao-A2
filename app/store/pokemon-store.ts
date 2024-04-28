import { create } from 'zustand';
import pokemonData, { Pokemon } from '../data/pokemon-data';

interface PokemonState {
  capturados: number[];
  pokemons: Pokemon[];
  capturePokemon: (id: number) => void;
  releasePokemon: (id: number) => void;
  getPokemonById: (id: number) => Pokemon | null;
}

export const usePokemonStore = create<PokemonState>((set) => ({
  capturados: [],
  pokemons: pokemonData,
  capturePokemon: (id) => set((state) => ({
    capturados: [...state.capturados, id],
    pokemons: state.pokemons.map(pokemon =>
      pokemon.id === id ? { ...pokemon, captured: true } : pokemon
    )
  })),
  releasePokemon: (id: number) => set((state) => ({
    capturados: state.capturados.filter(i => i !== id),
    pokemons: state.pokemons.map(pokemon =>
      pokemon.id === id ? { ...pokemon, captured: false } : pokemon
    )
  })),
  getPokemonById: (id: number) => {
    const pokemon = pokemonData.find((p) => p.id === id);
    return pokemon || null;
  },
}));

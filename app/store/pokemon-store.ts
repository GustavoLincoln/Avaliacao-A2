import create from 'zustand';
import pokemonData from '../data/pokemon-data';
import { StaticImageData } from 'next/image';

export interface Pokemon {
  id: number;
  name: string;
  image: StaticImageData; // Alterado para string para armazenar o caminho da imagem
  types: { name: string; color: string }[];
  previous: number;
  next: number;
}

interface PokemonStore {
  pokemonList: Pokemon[];
  setSelectedPokemon: (pokemonId: number) => void;
  selectedPokemon: Pokemon | null;
}

const usePokemonStore = create<PokemonStore>((set) => ({
  pokemonList: [], // Lista de Pokémon inicialmente vazia
  setSelectedPokemon: (pokemonId: number) => {
    set((state) => ({
      selectedPokemon: state.pokemonList.find((pokemon) => pokemon.id === pokemonId) || null,
    }));
  },
  selectedPokemon: null,
}));

// Carregar os dados dos Pokémon para a store
usePokemonStore.setState({ pokemonList: pokemonData });

export default usePokemonStore;

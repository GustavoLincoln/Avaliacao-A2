'use client'

import { useState } from "react";
import { usePokemonStore } from "../store/pokemon-store";
import Link from "next/link";

export default function Capturar() {
    const pokemons = usePokemonStore(state => state); 
    const [currentId, setCurrentId] = useState(1);

    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="flex">
                <Link href="/">
                <button>Pokedex</button>
                </Link>
            </div>
            <div className="flex flex-col bg-capturar h-[80vh] w-[50vw] bg-cover">
                <div>{pokemons.getPokemonById(currentId)?.name}</div>
                <div className="flex flex-row flex-1">
                    <div>Voltar</div>
                    <div>
                        imagem
                    </div>
                    <div>Proximo</div>
                </div>
                <div><button onClick={() => pokemons.capturePokemon(currentId)}>Capturar</button></div>
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import pokebolaColorida from './pokebola-colorida.png'; // Importe sua imagem colorida
import pokebolaPb from './pokebola-pb.png'; // Importe sua imagem preto e branca

const PokebolaButton = () => {
  const [ativado, setAtivado] = useState(false);

  // Função para alternar entre ativado e desativado
  const alternarAtivacao = () => {
    setAtivado(!ativado);
  };

  return (
    <button className={`relative w-16 h-16 focus:outline-none transition-colors ${ativado ? 'filter-none' : 'filter-grayscale'}`} onClick={alternarAtivacao} >
      <img src={ativado ? pokebolaColorida : pokebolaPb} alt="Pokebola" className="w-full h-full object-contain" />
    </button>
  );
};

export default PokebolaButton;

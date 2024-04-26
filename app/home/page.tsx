import { useRouter } from 'next/router';
import Link from 'next/link';

function PokemonDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id)

  // Use o ID para buscar e exibir os detalhes do Pokemon

  return (
    <div>
      <h1>Detalhes do Pokemon {id}</h1>
      {/* Exiba os detalhes do Pokemon aqui */}
      <Link href="/outra-rota">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

export default PokemonDetailPage;

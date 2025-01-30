import { useSerieDb } from "@hooks/queries";
import { useState } from "react";
import { Button } from "@atoms/Button";
import { SerieCard } from "@molecules/SerieCard/SerieCard";

export function Series() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, refetch, isFetching } = useSerieDb(page);

  if (isLoading) {
    // On peut afficher un skeleton ou juste "Chargement..."
    return <div>Chargement...</div>;
  }

  if (isFetching) {
    return <div>Chargement...</div>;
  }

  if (isError) {
    return <div>Erreur: {String(error)}</div>;
  }

  return (
    <main>
      <h2>Listes de séries</h2>
      <h3>Page { page }</h3>
      <button onClick={() => refetch()}>Rafraîchir</button>
      <ul>
        {data?.map((serie: any) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </ul>
        <Button label="Précédent" className="pagebutton" onClick={() => setPage(page-1)} disabled={ page === 1 }/>
        <Button label="Suivant" className="pagebutton" onClick={() => setPage(page+1)}/>
    </main>
  );
}
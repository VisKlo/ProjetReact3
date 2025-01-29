import { useSerieDb } from "@hooks/queries";
import { useState } from "react";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";

export function Series() {
    const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, refetch } = useSerieDb(page);

  if (isLoading) {
    // On peut afficher un skeleton ou juste "Chargement..."
    return <div>Chargement...</div>;
  }

  if (isError) {
    return <div>Erreur: {String(error)}</div>;
  }

  return (
    <div>
      <h2>Listes de séries</h2>
      <button onClick={() => refetch()}>Rafraîchir</button>
      <ul>
        {data?.map((serieDb: any) => (
          <li key={serieDb.id}>
            <Link to={`/serie/${serieDb.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${serieDb.poster_path}`} alt={serieDb.title} />
            </Link>
            <Button label="Favori" className="FavButton" />
          </li>
        ))}
      </ul>
        <Button label="Précédent" className="pagebutton" onClick={() => setPage(page-1)} disabled={ page === 1 }/>
        <Button label="Suivant" className="pagebutton" onClick={() => setPage(page+1)}/>
    </div>
  );
}
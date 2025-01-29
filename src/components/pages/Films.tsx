import { useMovieDb } from "@hooks/queries";
import { useState } from "react";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";
import { useFavoritesFilmsStore } from "@store/useFavFilms";

export function Films() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, refetch } = useMovieDb(page);
  const { addFavFilm, removeFavFilm, isFavFilm } = useFavoritesFilmsStore();

  if (isLoading) {
    // On peut afficher un skeleton ou juste "Chargement..."
    return <div>Chargement...</div>;
  }

  if (isError) {
    return <div>Erreur: {String(error)}</div>;
  }

  return (
    <div>
      <h2>Listes de films</h2>
      <button onClick={() => refetch()}>Rafraîchir</button>
      <ul>
        {data?.map((movieDb: any) => (
          <li key={movieDb.id}>
            <Link to={`/film/${movieDb.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${movieDb.poster_path}`} alt={movieDb.title} />
            </Link>
            <Button label="Favori" className="FavButton" onClick={() => isFavFilm(movieDb.id) ? removeFavFilm(movieDb.id) : addFavFilm(movieDb.id)} />
          </li>
        ))}
      </ul>
        <Button label="Précédent" className="pagebutton" onClick={() => setPage(page-1)} disabled={ page === 1 }/>
        <Button label="Suivant" className="pagebutton" onClick={() => setPage(page+1)}/>
    </div>
  );
}
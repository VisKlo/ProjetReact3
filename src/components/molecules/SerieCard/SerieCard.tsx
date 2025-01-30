import { ISerieProps } from "./SerieCard.Props";
import { Link } from "react-router-dom";
import { Button } from "@atoms/Button";
import { useFavoritesSerieStore } from "@store/useFavSeries";
import { useDeleteSerie } from "@hooks/mutation";

export const SerieCard: React.FC<ISerieProps> = ({ serie, page }) => {
  const { addFavSerie } = useFavoritesSerieStore();
  const { mutate: deleteMutate } = useDeleteSerie(page);

  return (
    <li className="movie-card" key={serie.id}>
      <Link to={`/serie/${serie.id}`} className="movie-link">
        <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.title} className="movie-image" />
      </Link>
      <div className="movie-actions">
        <Button label="Favori" className="fav-button" onClick={() => addFavSerie(serie)} />
        <Button label="Supprimer" className="delete-button" onClick={() => deleteMutate(serie.id)} />
      </div>
    </li>
  );
}
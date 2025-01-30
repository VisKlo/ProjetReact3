import { IMovieProps } from "./MovieCard.Props";
import { Link } from "react-router-dom";
import { Button } from "@atoms/Button";
import { useFavoritesFilmsStore } from "@store/useFavFilms";
import { useDeleteMovie } from "@hooks/mutation";

export const MovieCard: React.FC<IMovieProps> = ({ movie, page }) => {
    const { addFavFilm } = useFavoritesFilmsStore();
    const { mutate: deleteMutate } = useDeleteMovie(page);
  
    return (
      <li key={movie.id}>
        <Link to={`/film/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        </Link>
        <Button label="Favori" className="FavButton" onClick={() => addFavFilm(movie)} />
        <Button label="Supprimer" className="DeleteButton" onClick={() => deleteMutate(movie.id)} />
      </li>
    );
}
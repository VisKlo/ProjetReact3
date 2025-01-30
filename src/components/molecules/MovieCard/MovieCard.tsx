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
            <Link to={`/film/${movie.id}`} className="movie-link">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-image" />
            </Link>
            <div className="movie-actions">
                <Button label="Favori" className="fav-button" onClick={() => addFavFilm(movie)} />
                <Button label="Supprimer" className="delete-button" onClick={() => deleteMutate(movie.id)} />
            </div>
        </li>
    );
}

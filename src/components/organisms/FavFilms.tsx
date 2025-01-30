import { useFavoritesFilmsStore } from "@store/useFavFilms";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";

export function FavFilms() {
    const { favoritesFilm, removeFavFilm } = useFavoritesFilmsStore();

    return (
        <section>
            <h2>Mes films favoris</h2>
            { favoritesFilm.length === 0 ? (
                <p>Aucun favori</p>
            ) : (
                <ul>
                    { favoritesFilm.map((film: any) => (
                        <li key={film.id}>
                            <Link to={`/film/${film.id}`}>
                                { film.title }
                             </Link>
                            <Button label="Retirer" className="favbutton" onClick={() => removeFavFilm(film.id)}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
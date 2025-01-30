import { useFavoritesFilmsStore } from "@store/useFavFilms";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";

export function FavFilms() {
    const { favoritesFilm, removeFavFilm } = useFavoritesFilmsStore();

    return (
        <section className="favorites">
            <h2>Mes films favoris</h2>
            {favoritesFilm.length === 0 ? (
                <p className="no-favorites">Aucun favori</p>
            ) : (
                <ul className="fav-list">
                    {favoritesFilm.map((film: any) => (
                        <li key={film.id} className="fav-item">
                            <Link to={`/film/${film.id}`} className="fav-link">
                                {film.title}
                            </Link>
                            <Button label="Retirer" className="remove-fav-btn" onClick={() => removeFavFilm(film.id)} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

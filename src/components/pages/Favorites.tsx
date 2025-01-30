import { useFavoritesFilmsStore } from "@store/useFavFilms";
import { useFavoritesSerieStore } from "@store/useFavSeries";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";

export function Favorites() {
    const { favoritesFilm, removeFavFilm } = useFavoritesFilmsStore();
    const { favoritesSerie, removeFavSerie } = useFavoritesSerieStore();

    return (
        <main>
            <div>
                <h2>Mes films favoris</h2>
                { favoritesFilm.length === 0 ? (
                    <p>Aucun favori</p>
                ) : (
                    <ul>
                        { favoritesFilm.map((film: any) => (
                            <li key={film.id}>
                                <Link to={`/serie/${film.id}`}>
                                    { film.title }
                                </Link>
                                <Button label="Retirer" className="favbutton" onClick={() => removeFavFilm(film.id)}/>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <h2>Mes séries favoris</h2>
                { favoritesSerie.length === 0 ? (
                    <p>Aucun favori</p>
                ) : (
                    <ul>
                        { favoritesSerie.map((serie: any) => (
                            <li key={serie.id}>
                                <Link to={`/serie/${serie.id}`}>
                                    { serie.name }
                                </Link>
                                <Button label="Retirer" className="favbutton" onClick={() => removeFavSerie(serie.id)}/>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}
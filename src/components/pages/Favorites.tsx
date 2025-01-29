import { useFavoritesFilmsStore } from "@store/useFavFilms";
import { Button } from "@atoms/Button";

export function Favorites() {
    const { favoritesFilm, removeFavFilm } = useFavoritesFilmsStore();
    console.log(favoritesFilm)

    return (
        <div>
            <h2>Mes favoris</h2>
            { favoritesFilm.length === 0 ? (
                <p>Aucun favori</p>
            ) : (
                <ul>
                    { favoritesFilm.map((film: any) => (
                        <li key={film.id}>
                            { film.title }
                            <Button label="Retirer" className="favbutton" onClick={() => removeFavFilm(film.id)}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
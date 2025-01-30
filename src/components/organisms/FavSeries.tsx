import { useFavoritesSerieStore } from "@store/useFavSeries";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";

export function FavSeries() {
    const { favoritesSerie, removeFavSerie } = useFavoritesSerieStore();

    return (
        <section className="favorites">
            <h2>Mes séries favoris</h2>
            {favoritesSerie.length === 0 ? (
                <p className="no-favorites">Aucun favori</p>
            ) : (
                <ul className="fav-list">
                    {favoritesSerie.map((serie: any) => (
                        <li key={serie.id} className="fav-item">
                            <Link to={`/serie/${serie.id}`} className="fav-link">
                                {serie.name}
                            </Link>
                            <Button label="Retirer" className="remove-fav-btn" onClick={() => removeFavSerie(serie.id)} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

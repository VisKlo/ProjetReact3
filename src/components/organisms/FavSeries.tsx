import { useFavoritesSerieStore } from "@store/useFavSeries";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";

export function FavSeries() {
    const { favoritesSerie, removeFavSerie } = useFavoritesSerieStore();

    return (
        <section>
            <h2>Mes séries favoris</h2>
            {favoritesSerie.length === 0 ? (
                <p>Aucun favori</p>
            ) : (
                <ul>
                    {favoritesSerie.map((serie: any) => (
                        <li key={serie.id}>
                            <Link to={`/serie/${serie.id}`}>
                                {serie.name}
                            </Link>
                            <Button label="Retirer" className="favbutton" onClick={() => removeFavSerie(serie.id)} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
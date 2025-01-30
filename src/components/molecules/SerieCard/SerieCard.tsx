import { ISerieProps } from "./SerieCard.Props";
import { Link } from "react-router-dom";
import { Button } from "@atoms/Button";
import { useFavoritesSerieStore } from "@store/useFavSeries";
import { useDeleteSerie } from "@hooks/mutation";

export const SerieCard: React.FC<ISerieProps> = ({ serie, page }) => {
    const { addFavSerie } = useFavoritesSerieStore();
    const { mutate: deleteMutate } = useDeleteSerie(page);
  
    return (
      <li>
        <Link to={`/serie/${serie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.title} />
        </Link>
        <Button label="Favori" className="FavButton" onClick={() => addFavSerie(serie)} />
        <Button label="Supprimer" className="DeleteButton" onClick={() => deleteMutate(serie.id)} />
      </li>
    );
}
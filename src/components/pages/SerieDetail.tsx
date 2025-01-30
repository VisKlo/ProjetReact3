import { useParams } from "react-router-dom";
import { useDetailSerie } from "@hooks/queries";

export function SerieDetail() {
    const { serieId } = useParams();
    const { data, isLoading, isError, error } = useDetailSerie(Number(serieId));

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (isError) {
        return <div>Erreur: {String(error)}</div>;
    }

    return (
        <main>
            <h2>{data?.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`} alt={data?.name} />
            <p>{data?.overview}</p>
            <p>Date de sortie: {data?.first_air_date}</p>
        </main>
    );
}
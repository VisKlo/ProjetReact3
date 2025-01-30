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
        <main className="descr">
            <h2 className="serie-title">{data?.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`} alt={data?.name} className="serie-poster" />
            <p className="serie-overview">{data?.overview}</p>
            <p className="release-date">Date de sortie: {data?.first_air_date}</p>
        </main>
    );
}
import { useParams } from "react-router-dom";
import { useDetailMovie } from "@hooks/queries";

export function FilmDetail() {
    const { movieId } = useParams();
    const { data, isLoading, isError, error } = useDetailMovie(Number(movieId));

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (isError) {
        return <div>Erreur: {String(error)}</div>;
    }

    return (
        <main>
            <h2>{data?.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`} alt={data?.title} />
            <p>{data?.overview}</p>
            <p>Date de sortie: {data?.release_date}</p>
        </main>
    );
}
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
        <main className="descr">
            <h2 className="movie-title">{data?.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`} alt={data?.title} className="movie-poster" />
            <p className="movie-overview">{data?.overview}</p>
            <p className="release-date">Date de sortie: {data?.release_date}</p>
        </main>
    );
}
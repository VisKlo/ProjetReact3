import { useMovieDb, useSearchMovies } from "@hooks/queries";
import { useState } from "react";
import { Button } from "@atoms/Button";
import { useEffect } from "react";
import { MovieCard } from "@molecules/MovieCard/MovieCard";
import { SearchBar } from "@molecules/SearchBar/SearchBar";

export function Films() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { data: defaultMovies, isLoading, isError, error, refetch, isFetching } = useMovieDb(page);
  const { data: searchResults, isLoading: isSearching } = useSearchMovies(query);

  const moviesToDisplay = query ? searchResults : defaultMovies;

  const handleRefresh = () => {
    setPage(1);
    refetch();
  };

  useEffect(() => {
    if (query === "") {
      refetch();
    }
  }, [query, refetch]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  if (isLoading || isSearching || isFetching) {
    return <div>Chargement...</div>;
  }

  if (isError) {
    return <div>Erreur: {String(error)}</div>;
  }

  return (
    <div>
      <h2>Liste des films</h2>
      <SearchBar onSearch={handleSearch} />
      <h3 className="page-info">Page {page}</h3>
      <Button
        label="Rafraîchir"
        className="refresh-button"
        onClick={() => { setQuery(""); handleRefresh() }}
      />
      <ul className="dflex liste">
        {moviesToDisplay?.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} page={page} />
        ))}
      </ul>
      <div className="pagination">
        <Button label="Précédent" onClick={() => setPage(page - 1)} disabled={page === 1} />
        <Button label="Suivant" onClick={() => setPage(page + 1)} />
      </div>
    </div>
  );
}

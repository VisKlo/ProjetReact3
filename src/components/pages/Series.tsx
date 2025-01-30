import { useSerieDb, useSearchSeries } from "@hooks/queries";
import { useState, useEffect } from "react";
import { Button } from "@atoms/Button";
import { SerieCard } from "@molecules/SerieCard/SerieCard";
import { SearchBar } from "@molecules/SearchBar/SearchBar";

export function Series() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { data: defaultMovies, isLoading, isError, error, refetch, isFetching } = useSerieDb(page);
  const { data: searchResults, isLoading: isSearching } = useSearchSeries(query);

  const seriesToDisplay = query ? searchResults : defaultMovies;

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

  if (isFetching) {
    return <div>Chargement...</div>;
  }

  if (isError) {
    return <div>Erreur: {String(error)}</div>;
  }

  return (
    <main>
      <h2>Listes de séries</h2>
      <SearchBar onSearch={handleSearch} />
      <h3 className="page-info">Page {page}</h3>
      <Button label="Rafraichir" className="refresh-button" onClick={() => { setQuery(""); handleRefresh() }} />
      <ul className="dflex liste">
        {seriesToDisplay?.map((serie: any) => (
          <SerieCard key={serie.id} serie={serie} page={page} />
        ))}
      </ul>
      <div className="pagination">
        <Button label="Précédent" className="pagebutton" onClick={() => setPage(page - 1)} disabled={page === 1} />
        <Button label="Suivant" className="pagebutton" onClick={() => setPage(page + 1)} />
      </div>
    </main>
  );
}
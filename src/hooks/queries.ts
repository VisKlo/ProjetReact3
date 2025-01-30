import { useQuery } from "@tanstack/react-query";
import { fetchMovieDb } from "@api/MovieDbApi";
import { fetchSerieDb } from "@api/MovieDbApi";
import { searchMovies } from "@api/MovieDbApi";

export function useMovieDb(page: number) {
    return useQuery({
        queryKey: ["movies", page],
        queryFn: () => fetchMovieDb(page)
    });
};

export function useSerieDb(page: number) {
    return useQuery({
        queryKey: ["series", page],
        queryFn: () => fetchSerieDb(page)
    });
};

export const useSearchMovies = (query: string) => {
    return useQuery({
      queryKey: ["searchMovies", query],
      queryFn: () => searchMovies(query),
    });
  };

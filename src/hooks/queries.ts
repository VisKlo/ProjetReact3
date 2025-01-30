import { useQuery } from "@tanstack/react-query";
import { fetchMovieDb, fetchSerieDb, searchMovies, searchSeries, fetchMovieDetail, fetchSerieDetail } from "@api/MovieDbApi";

export function useMovieDb(page: number) {
    return useQuery({
        queryKey: ["movies", page],
        queryFn: () => fetchMovieDb(page)
    });
};

export const useSearchMovies = (query: string) => {
    return useQuery({
      queryKey: ["searchMovies", query],
      queryFn: () => searchMovies(query),
    });
};

export const useDetailMovie = (id: number) => {
    return useQuery({
        queryKey: ["detailMovie", id],
        queryFn: () => fetchMovieDetail(id)
    })
};

export function useSerieDb(page: number) {
    return useQuery({
        queryKey: ["series", page],
        queryFn: () => fetchSerieDb(page)
    });
};

export const useSearchSeries = (query: string) => {
    return useQuery({
      queryKey: ["searchSeries", query],
      queryFn: () => searchSeries(query),
    });
};

export const useDetailSerie = (id: number) => {
    return useQuery({
        queryKey: ["detailSerie", id],
        queryFn: () => fetchSerieDetail(id)
    })
};

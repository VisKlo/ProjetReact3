import { useQuery } from "@tanstack/react-query";
import { fetchMovieDb } from "@api/MovieDbApi";
import { fetchSerieDb } from "@api/MovieDbApi";

export function useMovieDb(page: number) {
    return useQuery({
        queryKey: ["movieDb", page],
        queryFn: () => fetchMovieDb(page)
    });
};

export function useSerieDb(page: number) {
    return useQuery({
        queryKey: ["serieDb", page],
        queryFn: () => fetchSerieDb(page)
    });
};
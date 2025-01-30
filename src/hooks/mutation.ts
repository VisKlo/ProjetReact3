import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie, deleteSerie } from "@api/MovieDbApi";

export function useDeleteMovie(page: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteMovie,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["movies", page] })
        }
    })
}

export function useDeleteSerie(page: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteSerie,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["series", page] })
        }
    })
}
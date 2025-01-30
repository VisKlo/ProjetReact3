import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie, deleteSerie } from "@api/MovieDbApi";

export function useDeleteMovie() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteMovie,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["movies"] })
        }
    })
}

export function useDeleteSerie() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteSerie,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["series"] })
        }
    })
}
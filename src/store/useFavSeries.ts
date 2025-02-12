import { create } from "zustand";

interface FavSerie {
    favoritesSerie: any[];
    addFavSerie: (Serie: any) => void;
    removeFavSerie: (id: number) => void;
    isFavSerie: (id: number) => boolean;
}

export const useFavoritesSerieStore = create<FavSerie>((set, get) => ({
  favoritesSerie: [],

  // Ajouter un Serie
  addFavSerie: (serie) =>
    set((state) => {
      const updatedFavorites = [...state.favoritesSerie];
      if (!updatedFavorites.some((fav) => fav.id === serie.id)) {
        updatedFavorites.push(serie);
      }
      return { favoritesSerie: updatedFavorites };
    }),

  // Retirer un Serie
  removeFavSerie: (id) =>
    set((state) => {
      const updatedFavorites = state.favoritesSerie.filter((fav) => fav.id !== id);
      return { favoritesSerie: updatedFavorites };
    }),
  
    isFavSerie: (id) => get().favoritesSerie.some((fav) => fav.id === id),
}));
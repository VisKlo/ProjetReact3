import { create } from "zustand";

interface FavSerie {
    favoritesSerie: any[];
    addFavSerie: (Serie: any) => void;
    removeFavSerie: (id: number) => void;
    isFavSerie: (id: number) => boolean;
}

export const useFavoritesSerieStore = create<FavSerie>((set, get) => ({
  favoritesSerie: (() => {
    try {
      const storedFavorites = localStorage.getItem("favoritesSerie");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Erreur lors de la récupération des favoris", error);
      return [];
    }
  })(),

  // Ajouter un Serie
  addFavSerie: (Serie) =>
    set((state) => {
      const updatedFavorites = [...state.favoritesSerie]; // stocke tout les Serie favoirs
      
      if (!updatedFavorites.some((fav) => fav.id === Serie.id)) { // verifie si le Serie est deja en favori
        updatedFavorites.push(Serie);
        localStorage.setItem("favoritesSerie", JSON.stringify(updatedFavorites));
      }
      return { favoritesSerie: updatedFavorites };
    }),

  // Retirer un Serie
  removeFavSerie: (id) =>
    set((state) => {
      const updatedFavorites = state.favoritesSerie.filter((fav) => fav.id !== id);
      localStorage.setItem("favoritesSerie", JSON.stringify(updatedFavorites));
      return { favoritesSerie: updatedFavorites };
    }),
  
    isFavSerie: (id) => get().favoritesSerie.some((fav) => fav.id === id),
}));
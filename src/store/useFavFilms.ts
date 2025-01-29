import { create } from "zustand";

interface FavFilms {
    favoritesFilm: any[];
    addFavFilm: (id: number) => void;
    removeFavFilm: (id: number) => void;
    isFavFilm: (id: number) => boolean;
}

export const useFavoritesFilmsStore = create<FavFilms>((set, get) => ({
    favoritesFilm: JSON.parse(localStorage.getItem("favoritesFilm") || "[]"),
  
    addFavFilm: (item) => {
      const updatedFavorites = [...get().favoritesFilm, item];
      set({ favoritesFilm: updatedFavorites });
      localStorage.setItem("favoritesFilm", JSON.stringify(updatedFavorites));
    },
  
    removeFavFilm: (id) => {
      const updatedFavorites = get().favoritesFilm.filter((fav) => fav.id !== id);
      set({ favoritesFilm: updatedFavorites });
      localStorage.setItem("favoritesFilm", JSON.stringify(updatedFavorites));
    },
  
    isFavFilm: (id) => get().favoritesFilm.some((fav) => fav.id === id),
}));
import { create } from "zustand";

interface FavFilms {
    favoritesFilm: any[];
    addFavFilm: (film: any) => void;
    removeFavFilm: (id: number) => void;
    isFavFilm: (id: number) => boolean;
}

export const useFavoritesFilmsStore = create<FavFilms>((set, get) => ({
  favoritesFilm: [],

  // Ajouter un film
  addFavFilm: (film) =>
    set((state) => {
      const updatedFavorites = [...state.favoritesFilm]; // stocke tout les film favoirs
      if (!updatedFavorites.some((fav) => fav.id === film.id)) { // verifie si le film est deja en favori
        updatedFavorites.push(film);
      }
      return { favoritesFilm: updatedFavorites };
    }),

  // Retirer un film
  removeFavFilm: (id) =>
    set((state) => {
      const updatedFavorites = state.favoritesFilm.filter((fav) => fav.id !== id); // récupére les films qui n'ont pas l'id a supprimer
      return { favoritesFilm: updatedFavorites };
    }),
  
    isFavFilm: (id) => get().favoritesFilm.some((fav) => fav.id === id), // verifie si un film est deja en favori

    
}));
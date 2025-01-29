import axios from "axios";
const token = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieDb = async (page: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&language=fr&page=${page}`);
    return response.data.results;
}

export const fetchSerieDb = async (page: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${token}&language=fr&page=${page}`);
    return response.data.results;
}
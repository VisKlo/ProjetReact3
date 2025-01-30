import axios from "axios";
const token = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieDb = async (page: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&language=fr&page=${page}`);
    return response.data.results;
}

export const deleteMovie = async (id: number) => {
    const response = await axios.delete(`https://api.themoviedb.org/3/movie/${id}`);
    return response.data.results;
}

export const searchMovies = async (query: string) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${query}&language=fr`);
    return response.data.results;
}

export const fetchMovieDetail = async (id: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${token}&language=fr`);
    return response.data;
}


export const fetchSerieDb = async (page: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${token}&language=fr&page=${page}`);
    return response.data.results;
}

export const deleteSerie = async (id: number) => {
    const response = await axios.delete(`https://api.themoviedb.org/3/tv/${id}`);
    return response.data.results;
}

export const searchSeries = async (query: string) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${token}&query=${query}&language=fr`);
    return response.data.results;
}

export const fetchSerieDetail = async (id: number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${token}&language=fr`);
    return response.data;
}
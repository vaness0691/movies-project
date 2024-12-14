const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (page: number, withGenres: number[]) => {
  try {
    const url = withGenres.length > 0 ? `https://api.themoviedb.org/3/discover/movie?api_key=${VITE_API_KEY}&page=${page}&with_genres=${withGenres}`: `https://api.themoviedb.org/3/discover/movie?api_key=${VITE_API_KEY}&page=${page}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching configuration:', error);
  }
};

export const fetchConfig = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${VITE_API_KEY}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching configuration:', error);
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${VITE_API_KEY}&language=en`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching configuration:', error);
  }
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "380e8ad7f0f80c51998d3a276ce17ba6";
export const apiStart = "https://api.themoviedb.org/3/movie";
export const imgStart = "https://image.tmdb.org/t/p/original";
export const movieAPI = {
  getMovieList: (type) => `${apiStart}/${type}?api_key=${apiKey}`,
  getMoviePage: (nextPage) =>
    `${apiStart}/popular?api_key=${apiKey}&page=${nextPage}`,
  getSearch: (filterDebounce, nextPage) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`,
};

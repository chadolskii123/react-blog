import fetch from 'node-fetch';

export const getMovies = async (ctx, next) => {
  const { limit, rating } = ctx.query;
  console.log(limit, rating);
  let REQUEST_URL = `https://yts.mx/api/v2/list_movies.json?`;
  if (limit) {
    REQUEST_URL += `limit=${limit}&`;
  }
  if (rating) {
    REQUEST_URL += `rating=${rating}`;
  }
  console.log(REQUEST_URL);
  const movies = await fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);

  if (!movies) {
    ctx.status = 400;
    return;
  }
  ctx.body = movies;
  return next();
};

export const getMovie = (id) => {
  const DETAIL_API_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  return fetch(DETAIL_API_URL)
    .then((res) => res.json())
    .then((json) => json.data.movie);
};

export const getSuggestions = (id) => {
  const SUGGEST_API_URL = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`;
  return fetch(SUGGEST_API_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

import Router from 'koa-router';
import * as moviesCtrl from './movie.ctrl';

const movies = new Router();

movies.get('/', moviesCtrl.getMovies);

export default movies;

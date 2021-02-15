import Router from 'koa-router';
import posts from './posts';
import auth from './auth';
import movies from './movies';
import todos from './todos/index';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/movies', movies.routes());
api.use('/todos', todos.routes());
export default api;

import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkedLoggedIn from '../../lib/checkedLoggedIn';

const posts = new Router();

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

posts.get('/', postsCtrl.list);
posts.post('/', checkedLoggedIn, postsCtrl.write);

const post = new Router();

post.get('/', postsCtrl.read);
post.delete('/', checkedLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkedLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;

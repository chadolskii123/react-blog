import Router from 'koa-router';
import * as todosCtrl from './todos.ctrl';
import checkedLoggedIn from '../../lib/checkedLoggedIn';

const todos = new Router();

todos.get('/', checkedLoggedIn, todosCtrl.list);
todos.post('/', checkedLoggedIn, todosCtrl.write);

todos.delete('/:id', checkedLoggedIn, todosCtrl.remove);
todos.put('/:id', checkedLoggedIn, todosCtrl.update);
todos.patch('/:id', checkedLoggedIn, todosCtrl.finish);

export default todos;

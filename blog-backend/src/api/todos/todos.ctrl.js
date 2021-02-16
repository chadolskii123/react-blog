import Todo from '../../models/todo';
import Joi from 'joi';

export const write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title } = ctx.request.body;
  const todo = new Todo({
    title,
    finishStatus: false,
    user: ctx.state.user,
  });
  try {
    await todo.save();
    ctx.body = todo;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  const { username } = ctx.state.user;
  const query = {
    ...(username ? { 'user.username': username } : {}),
  };
  try {
    const todos = await Todo.find(query);
    ctx.body = todos;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Todo.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async (ctx) => {
  const { id } = ctx.params;
  const schema = Joi.object().keys({
    title: Joi.string(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const nextData = { ...ctx.request.body };
  try {
    const todo = await Todo.findByIdAndUpdate(id, nextData, {
      new: true,
    }).exec();
    if (!todo) {
      ctx.status = 404;
      return;
    }
    ctx.body = todo;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const finish = async (ctx) => {
  const { id } = ctx.params;
  try {
    const todo = await Todo.findById(id);
    const newStatus = !todo.finishStatus;
    todo
      .updateOne({
        finishStatus: newStatus,
      })
      .exec();

    ctx.body = 'updated';
  } catch (e) {
    ctx.throw(500, e);
  }
};

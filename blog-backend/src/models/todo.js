import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String,
  finishStatus: Boolean,
  dueDate: {
    type: Date,
    default: Date.now() - 1000,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;

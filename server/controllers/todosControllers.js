
import { Db, ObjectId } from 'mongodb';
export const getTodos = async (req, res) => {
  let db = req.db;
  let todos = await db.collection('todos').find().toArray();
  res.json(todos);
};

export const postTodos = async (req, res) => {
  let db = req.db;
  let todo = req.body;
  await db.collection('todos').insertOne(todo);
  res.json(todo);
};

export const deleteTodos = async (req, res) => {
  let db = req.db;
  let { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  try {
    await db.collection('todos').deleteOne({ _id: new ObjectId(id) });
    return res.json({ message: 'Todo deleted successfully', id });
  } catch (error) {
    console.error('Delete Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const updateTodos = async (req, res) => {
  let db = req.db;
  let id = req.params.id;
  let todo = req.body;
  await db.collection('todos').updateOne({ _id: new ObjectId(id) }, { $set: todo });
  res.json(todo);
}
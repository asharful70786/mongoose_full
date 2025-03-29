import express from 'express';
import filesRouter from './router/todos.js';
import connectDb from './db.js';
import cors from 'cors';
try {

  let db = await connectDb();
  const app = express();
  app.use(express.json());
  app.use(cors())
  app.use((req, res, next) => {
    req.db = db;
    next();
  })

  app.use('/todos', filesRouter);


  app.listen(3000, () => {
    console.log('Example app listening on port 4000!');

  });

} catch (error) {
  res.status(500).send(error.message);
}
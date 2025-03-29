import express from 'express';

import{ deleteTodos, getTodos, postTodos, updateTodos} from '../controllers/todosControllers.js';


export let router = express.Router();

router.get('/', getTodos);

router.post('/',postTodos);

router.delete('/:id',deleteTodos);


router.put('/:id', updateTodos);


export default router;

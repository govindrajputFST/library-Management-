import express from 'express';
import {findBook , createBook, updateBook, deleteBook} from '../controllers/libraryController.mjs';
const router =express.Router();
router.get('/books',findBook);
router.post('/addbooks',createBook);
router .delete('/deleteBook/:id',deleteBook)
router.post('/updateBook/:id',updateBook)
export default router;
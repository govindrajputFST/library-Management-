import express from 'express';
import {findBook , createBook} from '../controllers/libraryController.mjs';
const router =express.Router();
router.get('/books',findBook);
router.post('/addbooks',createBook);
export default router;
import express from 'express';
const router = express.Router();
import { createPost } from '../controller/firstController'; 

router.post('/first', createPost);
export default router;
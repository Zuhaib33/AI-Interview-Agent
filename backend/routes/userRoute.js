import express from 'express';
import  userAuth  from '../middleware/isAuth.js';
import { getUser } from '../controllers/userController.js';

const useRouter = express.Router();

useRouter.get('/currentUser', userAuth, getUser);

export default useRouter;
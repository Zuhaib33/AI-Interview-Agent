import express from 'express';
import  userAuth  from '../middleware/isAuth.js';
import { getUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/currentUser', userAuth, getUser);

export default userRouter;
import express from 'express';
const router = express.Router();

import * as UserController from "../controllers/user.controller.js";
import { validateUserData } from '../middlewares/user.validation';

router.router('/')
    .post(validateUserData, UserController.createUser)
router.route('/login')
    .post()
router.route('/me/orders')
    .get(UserController.getUserOrders)

export default router
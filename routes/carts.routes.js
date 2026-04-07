import express from 'express';
const router = express.Router();

import * as CartsController from "../controllers/carts.controller";
import {} from "../middlewares/carts.validation";

router.route('/')
    .get()
router.route('/items')
    .post()
router.route('items/:itemId')
    .patch()
    .delete()
router.route('checkout')
    .post()
import express from "express";
import authMiddleWare from "../middleware/auth.js";
import { placeOrder, veerifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", veerifyOrder);

export default orderRouter;
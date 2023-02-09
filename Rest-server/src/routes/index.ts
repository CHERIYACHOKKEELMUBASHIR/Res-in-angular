import express from 'express'
import productControler from './products'



const router=express.Router();

router.use("/product",productControler);

export default router;
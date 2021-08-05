import express from 'express';
import {getThumbNails} from './test_controller'

const router=express.Router();

router.get('/getThumbNails',getThumbNails);

export default router;
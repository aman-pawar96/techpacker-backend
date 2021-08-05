import express from 'express';
import testRoutes from '../api/Test/test_route'

const router = express.Router();

router.use('/test',testRoutes);

export default router;
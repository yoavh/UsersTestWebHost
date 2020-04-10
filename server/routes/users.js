import { Router } from 'express';
import logger from '../utils/logger';
const router = Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  logger.info('users');
  res.send('respond with a resource');
});

export default router;

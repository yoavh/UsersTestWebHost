import { Router } from 'express';
import logger from '../utils/logger';
const router = Router();

/* GET users listing. */
router.get('/', (req, res) => {
  logger.info('users');
  res.send('respond with a resource');
});

export default router;

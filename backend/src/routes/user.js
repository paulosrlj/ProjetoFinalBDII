import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = Router();

router.post('/', UserController.store);
router.get('/:email', UserController.show);
router.get('/', UserController.index);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

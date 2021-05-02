import express from 'express';
import ctrl from '../controllers/student.controller';

const router = express.Router();

router.route('/students')
    .get(ctrl.list)
    .post(ctrl.create);

    router.route('/students/:id')
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.remove);

export default router;
import express from 'express';
import { send } from '../mailer'

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
})

export default router;
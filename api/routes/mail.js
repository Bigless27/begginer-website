import express from 'express';
import { sendContactForm } from '../mailer'

const router = express.Router();

router.post('/', (req, res) => {
    sendContactForm(req.body);
    res.status(200).send("hello");

})

export default router;
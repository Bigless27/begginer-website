import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import mail from './routes/mail';

dotenv.config();
const app = express();

app.use(bodyParser.json());


app.use('/api/mail', mail);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log('Running on localhost:8080'));
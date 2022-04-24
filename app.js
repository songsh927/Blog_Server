import express from "express";
import morgan from "morgan";

import authRouter from './route/auth.js';
import boardRouter from './route/board.js'

const app = express();

app.use(morgan);
app.use('/auth', authRouter);
app.use('/board',boardRouter);

app.use((req,res,next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

const server = app.listen(8080);

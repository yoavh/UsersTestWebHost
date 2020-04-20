import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
// import morgan from 'morgan';

import usersRouter from './routes/users';

const app = express();
// app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../public')));

app.use('/users', usersRouter);

export default app;

import express      from 'express';
import path         from 'path';
import cookieParser from 'cookie-parser';
import logger       from 'morgan';
import indexRouter  from './routes/index';
import usersRouter  from './routes/users';

const app = express();

app.use(logger('dev'))
   .use(express.json())
   .use(express.urlencoded({extended: false}))
   .use(cookieParser())
   .use(express.static(path.join(__dirname, '../public')))
   .use('/', indexRouter)
   .use('/users', usersRouter)

export default app;

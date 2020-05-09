import express      from 'express';
import path         from 'path';
import cookieParser from 'cookie-parser';
import logger       from 'morgan';
import indexRouter  from './routes/index';
import usersRouter  from './routes/users';

const app = express();

app.use(logger('dev'))
   // can get POST request params
   .use(express.json())
   // the URL-encoded data will instead be parsed with the querystring library
   .use(express.urlencoded({extended: false}))
   // get cookie
   .use(cookieParser())
   // load files from public
   .use(express.static(path.join(__dirname, '../public')))
   // Routes
   .use('/', indexRouter)
   .use('/users', usersRouter)

export default app;

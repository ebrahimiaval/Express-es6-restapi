import express                                     from 'express';
import cookieParser                                from 'cookie-parser';
import logger                                      from 'morgan';
import cors                                        from "cors";
import {IS_DEVELOPMENT, PUBLIC_PATH, SITE_ADDRESS} from "./setup/constant";
import indexRouter                                 from "./routes/indexRouter";
import userRouter                                  from "./routes/userRouter";



const app = express();

app.use(logger('dev'))
   // cross origin
   .use(cors({origin: IS_DEVELOPMENT ? '*' : SITE_ADDRESS, optionsSuccessStatus: 200}))
   // can get POST request params
   .use(express.json())
   // the URL-encoded data will instead be parsed with the querystring library
   .use(express.urlencoded({extended: false}))
   // get cookie
   .use(cookieParser())
   // load files from public
   .use(express.static(PUBLIC_PATH))
   // Routes
   .use('/', indexRouter)
   .use('/users', userRouter)



export default app;

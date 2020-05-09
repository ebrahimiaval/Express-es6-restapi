import {Router} from 'express';
import signin   from "../controller/user/signin";
import signup   from "../controller/user/signup";


export default Router()
    .post('/signin', signin)
    .post('/signup', signup)


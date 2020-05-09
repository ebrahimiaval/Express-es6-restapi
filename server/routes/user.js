import {Router} from 'express';
import Signin   from "../controller/User/Signin";
import Signup   from "../controller/User/Signup";


export default Router()
    .post('/signin', Signin)
    .post('/signup', Signup)


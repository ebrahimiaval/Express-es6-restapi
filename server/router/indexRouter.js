import {Router} from 'express';
import Home     from "../controller/Index/Home";

export default Router().get('/home', Home);;

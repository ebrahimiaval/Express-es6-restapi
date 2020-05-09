import {Router} from 'express';
import home     from "../controller/index/home";

export default Router().get('/home', home);;

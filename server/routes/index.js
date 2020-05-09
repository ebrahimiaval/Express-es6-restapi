import {Router} from 'express';

const router = Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.send('home result');
});

export default router;

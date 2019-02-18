import {Router} from 'express';
import {getUsers,storeUser,deleteAllUsers, loginUser} from '../controllers/user';
const router = new Router();

router.get('/',getUsers);

router.post('/',storeUser);

router.get('/delete',deleteAllUsers);

router.post('/login', loginUser);
module.exports = router;
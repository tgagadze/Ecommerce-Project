import {Router} from 'express';
import {getProducts, storeProduct, updateProduct} from '../controllers/product';

const router = new Router();



router.get('/',getProducts);

router.post('/add', storeProduct);

router.patch('/add/:id',updateProduct);

module.exports = router;
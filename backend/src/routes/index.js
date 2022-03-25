const { Router } = require('express');

 const productRoutes = require('./product');
 const labelRoutes = require('./label');


const router = new Router();

 router.use('/product', productRoutes);
 router.use('/label', labelRoutes);


module.exports = router;
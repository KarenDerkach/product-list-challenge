const { Router } = require('express');

const router = new Router();

//VALIDACIONES
// const validationFiles = require('../../middlewares/validations/validationFiles');


const {
createProduct,
getProduct,
deleteProduct,
deleteLabel

 
} = require('../controllers/productControllers');

router.post('/newproduct', createProduct);
router.get('/', getProduct);
router.delete('/:id', deleteProduct);
router.delete('/label/:labelName', deleteLabel)





module.exports = router;
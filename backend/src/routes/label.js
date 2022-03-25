const { Router } = require('express');

const router = new Router();

//VALIDACIONES
// const validationFiles = require('../../middlewares/validations/validationFiles');


const {
createLabel,
//deleteLabel,
getLabel,
 
} = require('../controllers/labelControllers');

router.post('/newlabel', createLabel);
 //router.delete('/:id', deleteLabel)
router.get('/', getLabel);


module.exports = router;
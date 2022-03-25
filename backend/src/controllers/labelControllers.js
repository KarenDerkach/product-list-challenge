const Label = require('../models/Label');
const Product = require('../models/Product');



//publicar producto

const createLabel = async (req, res) => {
    const { label} = req.body;

    try {
        // label.forEach(async (elem) => {
        //     const [label , created] = await Label.findOrCreate({
        //         where: {
        //             label: elem
        //         }
        //     })
        //     return res.status(200).send(label)
        // })
        const createLabel = await Label.bulkCreate(label.map(elem => ({
            label: elem

        })))
       // console.log("LABEL CREADA EN BACK",createLabel)
        return res.status(200).json(
            createLabel
        );

        
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

// const deleteLabel = async (req, res) =>{
//     const { id} = req.params;
//     try {
//         const label = await Label.findByPk(id);
//         if (!label) {
//             return res.status(404).json({ msg: 'Not found' });
//           }
//         await label.destroy();
       
//         return res.status(200).send({
//             success: true,
//             message: 'Etiqueta eliminada correctamente',
//         });
//     }
//     catch (error) {
//         return res.status(500).json({
//             success: false,
//             error: error.message,
//         });
// }
// }
const getLabel = async (req, res) => {
    try {
        const labels = await Label.findAll({
            include: [
                {
                    model: Product,
                    as: 'product',
                    attributes: ['id', 'name'],
                },
            ],
        });
        return res.status(200).send(labels)
        
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

module.exports = {
    createLabel,
    //deleteLabel,
    getLabel
};
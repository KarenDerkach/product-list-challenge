const Label = require('../models/Label');
const Product= require('../models/Product');


//publicar producto

const createProduct = async (req, res) => {
    const { name, label} = req.body;

    try {
        const newProduct = await Product.create({
            name,
        });

        console.log( "LABEL DE PRODUCTOS CREADO ", label)

        //Metodo para q las etiquetas no esten repetidas
        // label.forEach(async (elem) => {
        //     const [label , created] = await Label.findOrCreate({
        //         where: {
        //             label: elem
        //         }
        //     })
        //     newProduct.addLabel(label)
        // })

        //Crea etiquetas para cada producto independientemente de si ya esta creada o no
        Label.bulkCreate(label.map(elem => ({ 
            label: elem,
            product_id: newProduct.id
        })))
        return res.status(200).send(newProduct)
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

const getProduct = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Label,
                    as: 'label',
                    attributes: ['label' ,'id' ],
                   
                },
            ],
           
        });
        return res.status(200).send(products)
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ msg: 'Not found' });
          }
       
        await Label.destroy({
            where: {
                product_id: id
            }
        })
        await product.destroy();
        return res.status(200).send({
            success: true,
            message: 'Producto eliminado correctamente',
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}


//CREAR RUTA QUE ELIMINE LAS ETIQUETAS DE LOS PRODUCTOS -- LA RUTA DE ELIMINAR ARRAY DE ETIQUETAS NO SE PUEDE PORQEUE ELIMINA LAS ETIQUETAS GENERALES

//DEBO LLEGSR HASTA EL ARREGLO DE LABEL Y PODER RECORRER SUS ELEMENTOS Y VER Q COINCIDA CON EL ID QUE SE PASA POR PARAMETRO
const deleteLabel = async (req, res) =>{
    const {labelName} = req.params;
    try {
       
        
        const label = await Product.findAll({
            where: {
               label: label.map(elem => ({
                     label: elem === labelName
               }))
            }
            });
        if (!label) {
            return res.status(404).json({ msg: 'Not found' });
          }
        await label.destroy();
       
        return res.status(200).send({
            success: true,
            message: 'Etiqueta eliminada correctamente',
        });
    }
    catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message,
        });
}
}


module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
deleteLabel

};

import Product from '../model/poduct';

export const getProducts = async (req,res) =>{
    try{
        const products = await Product.find({}).exec();
        res.status(200).json(products);
    }
    catch(error){
        console.log(error);
        res.status(400).json({message: 'couldnt get products'})
    }
};

export const storeProduct = async (req,res) =>{
    try{
        let product = await Product.create(req.body.productDetails)
        res.status(200).send(product);
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:'couldnt add product'})
    }
}

export const updateProduct = async(req,res)=>{
    try{
        console.log('id: ',req.params.id);
        console.log('odl: ',req.body.updateDetails.oldPrice);
        console.log('new: ',req.body.updateDetails.currentPrice);
        await Product.update({_id: req.params.id},{$set:{oldPrice:req.body.updateDetails.oldPrice, currentPrice: req.body.updateDetails.currentPrice}}).exec();
        
     
        res.status(200).json({
            message: "Product Updated Succesfully"
            
        });

    }
    catch(error){
        res.status(400).json({
            message: "Couldn't Update The Product",
            error: error,
        });
    }
}
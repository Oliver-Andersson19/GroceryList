import productModel from "../models/productModel.js";

async function getProducts(req, res) {
    try {
      const userId = req.userId
  
      const productsList = await productModel.getProductsList(userId);
    
      res.status(200).json(productsList)

    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
}

async function deleteProduct(req, res) {
  try {
    const userId = req.userId
    const productId = req.params.productId;

    const result = await productModel.deleteProduct(userId, productId);
  
    res.status(200).json(result)

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}


  
export default { getProducts, deleteProduct };

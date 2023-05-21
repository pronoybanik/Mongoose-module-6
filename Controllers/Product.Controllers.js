const Product = require("../Models/Product")
const { updateProductService, getAllProductService, createProductService, bulkUpdateProductBuIdService, bulkDeleteProductBuIdService } = require("../service/Product.Service")

exports.getProducts = async (req, res, next) => {
  try {

    const products = await getAllProductService()

    res.status(200).json({
      status: "success",
      data: products
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Data is note defind',
      error: error.message
    })
  }
}

exports.createProduct = async (req, res, next) => {
  // save and create method
  try {
    // create method..
    const result = await createProductService(req.body)

    // save method...
    // const product = new Product(req.body);
    // const result = await product.save();

    res.status(200).json({
      status: 'success',
      message: 'Data inserted successfully',
      data: result
    });

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Data is note inserted',
      error: error.message
    })
  }
}

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body)

    res.status(200).json({
      status: "success",
      message: "successfully update the productData ",
      data: result
    })

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'data is not update',
      error: error.message
    })
  }
};

exports.bulkUpdateProductById = async (req, res, next) => {
  try {
    const result = await bulkUpdateProductBuIdService(req.body)

    res.status(200).json({
      status: "success",
      message: "successfully update the productData ",
      data: result
    })

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'data is not update',
      error: error.message
    })
  }
};


// ek sathe ek er odhik data delete korake ba update korake bulk delete ba update bole
exports.bulkDeleteProductById = async (req, res, next) => {
  try {
    // const { id } = res.params
    const result = await bulkDeleteProductBuIdService(req.body.ids)

    res.status(200).json({
      status: "success",
      message: "successfully delete the productData ",
      data: result
    })

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'data is not delete',
      error: error.message
    })
  }
};
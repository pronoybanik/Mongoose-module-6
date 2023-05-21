const Product = require("../Models/Product")

exports.getAllProductService = async () => {
    const products = await Product.find({})
    return products;
};

exports.createProductService = async (data) => {
    const result = await Product.create(data);
    return result;
};


exports.updateProductService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true })

    //## -> anther updateOne method
    // const product = await Product.findById(productId);
    // const result = await product.set(data).save();

    return result;
};

exports.bulkUpdateProductBuIdService = async (data) => {
    // update fast method 
    // const result = await Product.updateMany({ _id: data.ids }, data.data)

    // second update method
    const products = []
    data.ids.forEach(product => {
        products.push(Product.updateMany({ _id: product.id }, product.data))
    });

    const result = await Promise.all(products);
    return result;
};
exports.bulkDeleteProductBuIdService = async (ids) => {
    // delete fast method 
    const result = await Product.deleteMany({ _id: ids })
    return result;
};
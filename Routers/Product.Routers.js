const express = require("express");
const router = express.Router();
const ProductControllers = require("../Controllers/Product.Controllers");



router.route("/")
    .get(ProductControllers.getProducts)
    .post(ProductControllers.createProduct)

router.route("/bulkUpdate").patch(ProductControllers.bulkUpdateProductById)
router.route("/bulkDelete").delete(ProductControllers.bulkDeleteProductById)

router.route("/:id").patch(ProductControllers.updateProduct)

module.exports = router
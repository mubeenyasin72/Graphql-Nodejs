const productsmodel = require("./products.model");
module.exports = {
  Query: {
    products: () => {
      return productsmodel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsmodel.getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsmodel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsmodel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsmodel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};

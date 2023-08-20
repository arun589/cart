const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    price:price,
    description:description,
    imageurl:imageUrl
  }) .then(result=>{console.log('created');
  res.redirect('/admin/products')
})
  .catch(err=>console.log(err));
  
};
exports.getEditProduct = (req, res, next) => {
  const editmode=req.query.edit;
  if(!editmode){
    return res.redirect('/');
  }
  const prodid=req.params.productId;
  Product.findByPk(prodid).then(product=>
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/edit-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      editing:editmode,
      product:product
     })
  )
  .catch(err=>console.log(err));
  
};
exports.postEditProduct=(req,res,next)=>{
  const prodid=req.body.productId;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.findByPk(prodid).then(product=>{
    product.title=title;
    product.imageurl=imageUrl;
    product.price=price;
    product.description=description;
    return product.save();
  })
  .then(result=>{
    console.log("updated");
    res.redirect('/');
  })
  .catch(err=>console.log(err));
};
exports.deleteProductById=(req,res,next)=>{
  const prodid=req.params.productId;
  Product.findByPk(prodid)
  .then(product=>{
    return product.destroy()
  })
  .then(result=>{console.log('deleted');
  res.redirect('/admin/products')
})
  .catch(err=>console.log(err));
 
}

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'All Products',
      path: '/admin/products'
    });
  })
 .catch(err=>console.log(err));
};







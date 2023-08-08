const db=require('../util/database');
const cart = require('./cart');


module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
  return db.execute('INSERT INTO PRODUCT (title,price,description,imageurl) VALUES (?,?,?,?)',
   [this.title,this.price,this.description,this.imageUrl])
  }

  static fetchAll(cb) {
    return db.execute('select * from product');
  
  }

  static findById(id, cb) {
    return db.execute('select * from product where product.id=(?)',[id])
  }
  static delete(id){
   return db.execute('delete from product where id=(?)',[id])
  }
};

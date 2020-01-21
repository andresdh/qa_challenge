class Product {
    get productTitle() {
      return $("//span[@id='productTitle']")
    }
  }
  
  module.exports = new Product()
  
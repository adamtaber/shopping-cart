
const productsArray = [
  {id: 1, name: "item 1", price: 2.99},
  {id: 2, name: "item 2", price: 5.99},
  {id: 3, name: "item 3", price: 25.99}
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);
  return productData;
}

export { productsArray, getProductData };
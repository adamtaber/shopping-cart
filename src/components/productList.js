
const productsArray = [
  {id: 1, name: "sandwich", price: 2.99},
  {id: 2, name: "pencil case", price: 5.99},
  {id: 3, name: "bowling ball", price: 25.99},
  {id: 4, name: "baseball bat", price: 30.99},
  {id: 5, name: "handbag", price: 200.55},
  {id: 6, name: "toothbrush", price: 3.99}
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);
  return productData;
}

export { productsArray, getProductData };
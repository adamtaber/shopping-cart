import Navbar from './Navbar';

const Shop = () => {
  const shopItems = [
    {id: 1, name: "item 1", price: 2},
    {id: 2, name: "item 2", price: 5},
    {id: 3, name: "item 3", price: 25}
  ]

  return (
    <div>
      <Navbar />
      {shopItems.map(item => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <form>
              <label> Qty:
                <input type="number" />
              </label>
              <button type='submit'>Add to Cart</button>
            </form>
          </div>
        )
      })}

      {/* <div>
        <p>{shopItems[0].name}</p>
        <p>${shopItems[0].price}</p>
        <label> Qty:
          <input type="number" />
        </label>
      </div> */}
    </div>
  )
}

export default Shop;
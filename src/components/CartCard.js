import { useCart } from "../context/CartContext"
import "./CardCart.css"

export const CartCard = ({product}) => {
const {removeFromCart} = useCart()

const {name, price, image} = product

  return (
    <div className="cartCard">
    <img src={image} alt={image} />
    <p className="productName">{name}</p>
    <p className="productPrice">${price}</p>
    <button onClick={()=> removeFromCart(product)}>Remove</button>
    </div>
  )
}

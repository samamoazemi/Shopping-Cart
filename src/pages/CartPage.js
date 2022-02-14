import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {

    const { cart, total } = useCart();

    const dispatch = useCartActions();

    if(!cart.length)
    return(
        <Layout>
            <main>
               <h2>cart is empty !</h2>
            </main>
        </Layout>
    )

    const incHandler = (cartIem) => {
        dispatch({ type: "ADD_TO_CART", payload: cartIem });
    }

    const decHandler = (cartIem) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: cartIem });
    }

    return ( 
        <Layout>
            <main className="container">
              <section className="cartCenter">
                <section className="cartItemList">
                    {cart.map((item) => {
                        return(
                         <div className="cartItem">
                            <div className="itemImage">
                                <img src={item.image} alt={item.name}></img>
                            </div>
                            <div>{item.name}</div>
                            <div>{item.offPrice * item.quantity}</div>
                            <div className="btnGroup">
                                <button onClick={() => incHandler(item)}>+</button>
                                <button>{item.quantity}</button>
                                <button onClick={() => decHandler(item)}>-</button>
                            </div>
                         </div>
                        )
                    })}
                </section>
                <CartSummery cart={cart} total={total} />
              </section>
            </main>
        </Layout>
     );
}
 
export default CartPage;

const CartSummery = ({ total, cart }) => {

    const originalTotalPrice = cart.length
     ? cart.reduce((acc,curr) => acc + curr.quantity * curr.price, 0)
     : 0;
   
    return (
      <section className="cartSummery">
         <h2>Cart Summery</h2>
         <div className="summeryItem">
             <p>original total price</p>
             <p>{originalTotalPrice} $</p>
         </div>
         <div className="summeryItem">
             <p>cart discount</p>
             <p>{originalTotalPrice - total} $</p>
         </div>
         <div className="summeryItem net">
             <p>net price</p>
             <p>{total} $</p>
         </div>
         <Link to="checkout">
           <button className="checkoutBtn">
             Go to checkout{" "}
           </button>
         </Link>
      </section>
    )
}
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {

    const { cart } = useCart();

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
                            <div>{item.price * item.quantity}</div>
                            <div>
                                <button onClick={() => incHandler(item)}>Add</button>
                                <button>{item.quantity}</button>
                                <button onClick={() => decHandler(item)}>remove</button>
                            </div>
                         </div>
                        )
                    })}
                </section>
                <section className="cartSummery">cart summery</section>
              </section>
            </main>
        </Layout>
     );
}
 
export default CartPage;
import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {

    const { cart } = useCart();

    if(!cart.length)
    return(
        <Layout>
            <main>
               <h2>cart is empty !</h2>
            </main>
        </Layout>
    )

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
                                <button>Add</button>
                                <button>{item.quantity}</button>
                                <button>remove</button>
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
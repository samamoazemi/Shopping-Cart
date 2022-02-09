import Layout from "../Layout/Layout";
import * as data from "../data";

const HomePage = () => {
    console.log(data);
    const addProductHandler = (product) => {
        console.log(product);
    }

    return ( 
        <Layout>
          <main className="container">
            <section className="productList">
              {data.products.map((product) => {
                return(
                 <section className="product">
                   <div className="productImg">
                     <img src={product.image} alt={product.name}></img>
                   </div>
                   <div className="productDesc">
                     <p>{product.name}</p>
                     <p>$ {product.price}</p>
                     <button onClick={()=>addProductHandler(product)} className="btn primary">
                         Add to cart
                     </button>
                  </div>
                 </section>
                )
              })}
            </section>
            </main>
        </Layout>

     );
}
 
export default HomePage;
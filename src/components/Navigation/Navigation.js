import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {

  const { cart } = useCart();

    return ( 
        <header className="mainNavigatin">
            <nav>
              <ul>
                <li>
                  <NavLink to="/" activeClassName="activeLink" exact>
                      Home
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li className="cartLink">
                  <NavLink to="/cart" activeClassName="activeLink">
                      Cart
                  </NavLink>
                  <span>{cart.length}</span>
                </li>
                <li className="loginLink">
                  <NavLink to="/login" activeClassName="activeLink">
                    login/signup
                  </NavLink>
                </li>
              </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;
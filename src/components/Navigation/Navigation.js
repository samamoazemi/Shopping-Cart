import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {

  const { cart } = useCart();

  const userData = useAuth();

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
                  <NavLink to={userData ? "/profile" : "/login"} activeClassName="activeLink">
                    {userData ? "profile" : " login / signup"}
                  </NavLink>
                </li>
              </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;
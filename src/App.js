import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from './pages/CartPage';
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  return (
    <Router>
      <CartProvider>
        <ToastContainer />
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;

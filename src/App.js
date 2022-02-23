import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from './pages/CartPage';
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthProvider from './Providers/AuthProvider';


function App() {
  return (
    <Router>
      <AuthProvider>
      <CartProvider>
        <ToastContainer />
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/" component={HomePage} exact />
          </Switch>
      </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

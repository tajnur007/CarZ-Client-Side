import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Contact from './pages/contact/Contact/Contact';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
import ExploreCars from './pages/exploreCars/ExploreCars/ExploreCars';
import Login from './pages/login/Login/Login';
import Register from './pages/register/Register/Register';
import MyOrders from './pages/dashboard/MyOrders/MyOrders';
import Pay from './pages/dashboard/Pay/Pay';
import Review from './pages/dashboard/Review/Review';
import AddProduct from './pages/dashboard/AddProduct/AddProduct';
import MakeAdmin from './pages/dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './pages/dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './pages/dashboard/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add-product">
            <AddProduct />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/explore-cars">
            <ExploreCars />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/make-admin">
            <MakeAdmin />
          </Route>
          <Route exact path="/manage-all-orders">
            <ManageAllOrders />
          </Route>
          <Route exact path="/manage-products">
            <ManageProducts />
          </Route>
          <Route exact path="/my-orders">
            <MyOrders />
          </Route>
          <Route exact path="/pay">
            <Pay />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

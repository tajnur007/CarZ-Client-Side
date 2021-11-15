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
import PrivateRoute from './pages/shared/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/add-product">
              <AddProduct />
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/explore-cars">
              <ExploreCars />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/make-admin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute exact path="/manage-all-orders">
              <ManageAllOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/manage-products">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute exact path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/pay">
              <Pay />
            </PrivateRoute>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/review">
              <Review />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

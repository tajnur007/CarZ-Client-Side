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
import AdminPrivateRoute from './pages/shared/AdminPrivateRoute/AdminPrivateRoute';
import Purchase from './pages/purchase/Purchase/Purchase';

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
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/explore-cars">
              <ExploreCars />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/purchase">
              <Purchase />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/pay">
              <Pay />
            </PrivateRoute>
            <PrivateRoute exact path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/review">
              <Review />
            </PrivateRoute>
            <AdminPrivateRoute exact path="/add-product">
              <AddProduct />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/make-admin">
              <MakeAdmin />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/manage-all-orders">
              <ManageAllOrders />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/manage-products">
              <ManageProducts />
            </AdminPrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

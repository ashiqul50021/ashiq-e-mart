// import logo from './logo.svg';
import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Navbar from './components/HomePage/Navbar/Navbar';
import Footer from './components/HomePage/Footer/Footer';
import AllProducts from './components/Products/AllProducts/AllProducts';
import Login from './components/LoginPage/Login/Login';
import Register from './components/LoginPage/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/LoginPage/PrivateRoute/PrivateRoute';
import AddProducts from './components/AdminPanel/AddProducts/AddProducts';
import PurchasePage from './components/UserPanel/PurchasePage/PurchasePage';
import Dashboard from './components/DashBoard/Dashboard/Dashboard';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import  NotFound  from './components/NotFound/NotFound';


function App() {
  return (
    <AuthProvider>
      <Router>
    <Navbar/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
           <Home/>
          </Route>
          <Route exact path="/allproducts">
            <AllProducts/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/purchase/:productId">
            <PurchasePage/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route exact path="/addproducts">
            <AddProducts/>
          </Route>
          <Route exact path="/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;

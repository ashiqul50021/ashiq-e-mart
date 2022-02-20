import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AdminPanel/AddProducts/AddProducts';
import AdminRoute from '../../LoginPage/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Manageallorders from '../Manageallorder/Manageallorders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import Purchases from '../Purchases/Purchases';
import Reviews from '../Reviews/Reviews';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-dark text-white">
            <h3 className="text-center">DASHBOARD</h3>
            <hr />
            <ul className="navbar-nav text-center">
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}`}>Dashboard</Link>
              </li><hr />
           {admin &&
           <div>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/makeAdmin`}>Make Admin</Link>
              </li><hr />
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/addproducts`}>Add A Product</Link>
              </li><hr />
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/manageallorder`}>Manage All Order</Link>
              </li><hr />
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/manageproducts`}>Manage All Products</Link>
              </li><hr />
           </div>

           }
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/purchases`}>My Orders</Link>
              </li><hr />
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/review`}>Give a Review</Link>
              </li><hr />
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`${url}/pay`}>payment</Link>
              </li>
            </ul>
            {/* <Link to={`${url}`}><button color="inherit">Dashboard</button></Link><hr /> */}
            {/* <Link to={`${url}/makeAdmin`}><button color="inherit">Make Admin</button></Link><hr /> */}

          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <DashboardHome></DashboardHome>
              </Route>
              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <Route exact path={`${path}/purchases`}>
                <Purchases></Purchases>
              </Route>
              <Route exact path={`${path}/review`}>
                <Reviews></Reviews>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <AdminRoute exact path={`${path}/addproducts`}>
                <AddProducts></AddProducts>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageallorder`}>
                <Manageallorders></Manageallorders>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
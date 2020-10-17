import React, { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import OrderForm from './Components/Dashboard/OrderForm/OrderForm';
import Review from './Components/Dashboard/Review/Review';
import ServiceByCard from './Components/Dashboard/ServiceByCard/ServiceByCard';
import ServiceTableData from './Components/Dashboard/ServiceTableData/ServiceTableData';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order">
            <OrderForm></OrderForm>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
              <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/serviceDataCard">
            <ServiceByCard></ServiceByCard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/serviceTableData">
            <ServiceTableData></ServiceTableData>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

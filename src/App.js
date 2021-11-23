
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute  path="/appointment">
          <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route  path="/login">
          <Login></Login>
          </Route>
          <Route  path="/register">
          <Register></Register>
          </Route>
        </Switch>
      </Router>
     
      </AuthProvider>
    </div>
  );
}

export default App;

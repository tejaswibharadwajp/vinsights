import 'rsuite/dist/rsuite.min.css';
import './App.css';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientRecordsPage from "./components/PatientRecordsPage/PatientRecordsPage";
import PatientDetails from "./components/PatientDetails/PatientDetails";
import React from "react";
import logoImage from './icons/logo.png';
function App() {
  return (
    <div className="App">
        {!(window.location.pathname === '/' || window.location.pathname === '/login') &&
            <div className={'headerContainer'}>
                <img onClick={() => {window.location.replace('/home')}} className={'headerImage'} src={logoImage}/>
            </div>}
        <Router>
            <Switch>
                <Route path={"/"} exact={true} component={LoginScreen} />
                <Route path={"/login"} exact={true} component={LoginScreen} />
                <Route path={"/patientrecords"} exact={true} component={PatientRecordsPage} />
                <Route path={"/home"} exact={true} component={Dashboard} />
                <Route path={"/patientDetails"} component={PatientDetails} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;

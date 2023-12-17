import logo from './logo.svg';
import 'rsuite/dist/rsuite.min.css';
import './App.css';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientRecordsPage from "./components/PatientRecordsPage/PatientRecordsPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path={"/"} exact={true} component={LoginScreen} />
                <Route path={"/login"} exact={true} component={LoginScreen} />
                <Route path={"/patientrecords"} exact={true} component={PatientRecordsPage} />
                <Route path={"/home"} exact={true} component={Dashboard} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;

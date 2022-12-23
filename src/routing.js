import { Routes,Route,Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Kyc from "./templates/kyc";
import Login from "./templates/login";
import Users from "./templates/users";
import Report from "./templates/report";
import Support from "./templates/support";
import Deposit from "./templates/deposit";
import Withdraw from "./templates/withdraw";
import Token from "./templates/token";
export default function Routing() {

  let session =  sessionStorage.getItem('token')
  
  return (
      <Routes>
        <Route exact path="/" element={ session === null ?<Login /> : <Navigate to="/" />}/>
        <Route exact path="/dashboard" element={ <Dashboard/> }/>
        <Route exact path="/user" element={ <Users /> }></Route>
        <Route exact path="/kyc" element={ <Kyc /> }></Route>
        <Route exact path="/report" element={ <Report /> }></Route>
        <Route exact path="/support" element={ <Support /> }></Route>
        <Route exact path="/deposit" element={ <Deposit /> }></Route>
        <Route exact path="/withdraw" element={ <Withdraw /> }></Route>
        <Route exact path="/token" element={ <Token /> }></Route>
      </Routes>
  );
}
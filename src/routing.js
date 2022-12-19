import { Routes,Route,Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Kyc from "./templates/kyc";
import Login from "./templates/login";
import Users from "./templates/users";
export default function Routing() {

  let session =  sessionStorage.getItem('token')
  
  return (
      <Routes>
        <Route exact path="/" element={ session === null ?<Login /> : <Navigate to="/" />}/>
        <Route exact path="/dashboard" element={ <Dashboard/> }/>
        <Route exact path="/user" element={ <Users /> }></Route>
        <Route exact path="/kyc" element={ <Kyc /> }></Route>
      </Routes>
  );
}
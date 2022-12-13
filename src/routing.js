import { Routes,Route,Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import LoginLayout from "./layouts/loginLayout";
export default function Routing() {

  let session =  sessionStorage.getItem('token')
  
  return (
      <Routes>
        <Route exact path="/" element={ session === null ?<LoginLayout /> : <Navigate to="/dashboard" />}/>
        <Route exact path="/dashboard" element={ <Dashboard/> }/>
      </Routes>
  );
}
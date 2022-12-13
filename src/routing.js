import { Routes,Route,Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./templates/login";
export default function Routing() {

  let session =  sessionStorage.getItem('token')
  
  return (
      <Routes>
        <Route exact path="/" element={ session === null ?<Login /> : <Navigate to="/dashboard" />}/>
        <Route exact path="/dashboard" element={ <Dashboard/> }/>
      </Routes>
  );
}
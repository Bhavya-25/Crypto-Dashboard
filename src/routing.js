import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./dashboard";
import LoginLayout from "./layouts/loginLayout";
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginLayout />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
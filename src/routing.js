import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./dashboard";
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
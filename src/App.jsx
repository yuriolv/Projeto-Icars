import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from "./Pages/Login";
import { SigIn } from "./Pages/SigIn";
 export function App (){
    return (
      <Router>
        <Routes>
          {" "}
          {/* criação das rotas do site */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SigIn" element={<SigIn />} />
        </Routes>
      </Router>
    );
 }
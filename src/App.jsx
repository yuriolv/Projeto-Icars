import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 export function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/" element={<Home/>} /> */}
            </Routes>
        </Router>
    )
 }
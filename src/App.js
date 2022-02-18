import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";

import { Card } from "@mui/material";

function App() {
  return (
    <Router>
      <Card>
        <div className="app">
          <NavBar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </div>
        </div>
      </Card>
    </Router>
  );
}

export default App;

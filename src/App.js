import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";



function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;

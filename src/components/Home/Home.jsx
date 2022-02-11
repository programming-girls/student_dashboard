import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="parent">
        <header className="nav">
          <p>Eshirali School</p>
          <button>Logout</button>
          <button>Login</button>
        </header>
        <div className="main-content">
          <p>Main content</p>
        </div>
        <footer className="footer">
          <p>Eshirali school</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

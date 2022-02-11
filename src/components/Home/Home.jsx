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
          <p>
            Eshirali School is an online platform where students and parents can
            sign up to get access to exam and marking scheme material from
            different schools and the official KNEC KCPE and KCSE exams. Exams
            can either be done on the platform and marked by the system, or can
            be downloaded to be done physically.
          </p>
        </div>
        <footer className="footer">
          <p>Eshirali school</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

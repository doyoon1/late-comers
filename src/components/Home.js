import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="showcase">
      <div className="content">
        <h1>Late Comers</h1>
        <button onClick={handleAboutClick}>About Us!</button>
      </div>
    </div>
  );
}

export default Home;

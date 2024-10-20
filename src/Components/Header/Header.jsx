import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme == "dark") {
      document.querySelector("body").setAttribute("project-theme", "dark");
      setTheme("light");
    } else {
      document.querySelector("body").setAttribute("project-theme", "light");
      setTheme("dark");
    }
  };

  return (
    <header>
      <h1>Where in the world?</h1>
      <div className="darkbtn" onClick={handleTheme}>
        Dark Mode
      </div>
    </header>
  );
};

export default Header;

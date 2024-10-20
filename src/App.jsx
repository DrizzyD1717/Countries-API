import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import TotalCountries from "./Components/TotalCountries/TotalCountries";
import IndividualCountry from "./Components/IndividualCountry/IndividualCountry";

function App() {
  const [allCountries, setAllCountries] = useState(0);

  return (
    <div className="overall">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<TotalCountries></TotalCountries>}></Route>
          <Route
            path="/countries/:name"
            element={<IndividualCountry></IndividualCountry>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

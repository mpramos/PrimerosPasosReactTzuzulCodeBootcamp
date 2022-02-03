import React from "react";
import GoApi from "./pages/GoApi.jsx";
import Card from "./components/Card.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return <div>
    <header>header</header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/got" element={<GoApi />} />
      </Routes>
    </BrowserRouter>
    <footer>footer</footer>
  </div>
}

export default App;

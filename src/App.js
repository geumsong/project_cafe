import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// ./Header 로 적으면 안되나?
import Header from "./Header";
import Home from "./Pages/home";
import AboutPage from "./Pages/aboutPage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutPage" Component={AboutPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

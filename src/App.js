import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Pages/home";
import AboutPage_brand from "./Pages/aboutPage_brand";
import AboutPage_coffee from "./Pages/aboutPage_coffee";
import AboutPage_roasting from "./Pages/aboutPage_roasting";
import Footer from "./Pages/footer";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutPage_brand" Component={AboutPage_brand} />
          <Route path="/aboutPage_coffee" Component={AboutPage_coffee} />
          <Route path="/aboutPage_roasting" Component={AboutPage_roasting} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Pages/home";
import AboutPage_brand from "./Pages/aboutPage_brand";
import AboutPage_coffee from "./Pages/aboutPage_coffee";
import AboutPage_roasting from "./Pages/aboutPage_roasting";
import Menu from "./Pages/menu";
import Footer from "./Pages/footer";

function App() {
  return (
    <div>
      {/* BrowserRouter 의 자식태그가 되어야 Link태그가 동작함 */}
      <BrowserRouter> 
      <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutPage_brand" Component={AboutPage_brand} />
          <Route path="/aboutPage_coffee" Component={AboutPage_coffee} />
          <Route path="/aboutPage_roasting" Component={AboutPage_roasting} />
          <Route path="/menu" Component={Menu} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// nav카테고리에 Link to 태그 추가 - 작동안됨
import Home from './Pages/home';
import Header from '../src/Header';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutpage" Component={AboutPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

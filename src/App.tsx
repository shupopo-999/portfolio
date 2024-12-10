import React from 'react';
import './App.css';
import Header from './components/Header';
import BlogPage from './components/BlogPage';
import HomePage from './components/HomePage';
import SNSPage from './components/SNSPage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blog" element={<BlogPage />}/>
          <Route path="/sns" element={<SNSPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

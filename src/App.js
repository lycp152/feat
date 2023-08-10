import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import HomeFeed from "./HomeFeed";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home/*" element={<HomeFeedWithSidebar />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2023 lycp152 All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
};

const HomeFeedWithSidebar = () => {
  return (
    <div className="home-feed-with-sidebar">
      <Sidebar />
      <div className="home-feed-content">
        <HomeFeed />
      </div>
    </div>
  );
};

export default App;

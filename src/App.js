import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import About from "./About";
import HomeFeed from "./feed/HomeFeed";
import Tsumiage from "./feed/Tsumiage";
import Results from "./feed/Results";
import Chat from "./feed/Chat";
import Events from "./feed/Events";
import EventReports from "./feed/EventReports";
import Projects from "./feed/Projects";
import Surveys from "./feed/Surveys";

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
            <Route path="/home/*" element={<HomeFeed />} />
            <Route path="/tsumiage/*" element={<Tsumiage />} />
            <Route path="/results/*" element={<Results />} />
            <Route path="/chat/*" element={<Chat />} />
            <Route path="/events/*" element={<Events />} />
            <Route path="/eventreports/*" element={<EventReports />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/surveys/*" element={<Surveys />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2023 lycp152 All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
};

export default App;

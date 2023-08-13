import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import HomeFeed from "./feed/HomeFeed";
import Notifications from "./menu/Notifications";
import OwnProfile from "./user/OwnProfile";
import Tsumiage from "./feed/Tsumiage";
import Results from "./feed/Results";
import Chat from "./feed/Chat";
import Events from "./feed/Events";
import EventReports from "./feed/EventReports";
import Projects from "./feed/Projects";
import Surveys from "./feed/Surveys";
import SidebarLayout from "./SidebarLayout";

const isLogin = true;

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app-main">
          <Routes>
            {isLogin ? (
              <>
                <Route
                  path="/home/*"
                  element={
                    <SidebarLayout>
                      <HomeFeed />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/profile/*"
                  element={
                    <SidebarLayout>
                      <OwnProfile />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/notifications/*"
                  element={
                    <SidebarLayout>
                      <Notifications />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/tsumiage/*"
                  element={
                    <SidebarLayout>
                      <Tsumiage />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/results/*"
                  element={
                    <SidebarLayout>
                      <Results />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/chat/*"
                  element={
                    <SidebarLayout>
                      <Chat />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/events/*"
                  element={
                    <SidebarLayout>
                      <Events />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/eventreports/*"
                  element={
                    <SidebarLayout>
                      <EventReports />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/projects/*"
                  element={
                    <SidebarLayout>
                      <Projects />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/surveys/*"
                  element={
                    <SidebarLayout>
                      <Surveys />
                    </SidebarLayout>
                  }
                />
              </>
            ) : (
              <>
                {/* About、Login、Signupページではサイドバーを表示しない */}
                <Route path="/" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </>
            )}
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

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import About from "./about/About";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import HomeFeed from "./feed/HomeFeed";
import Notifications from "./menu/Notifications";
import Messages from "./messages/Messages";
import MyProfile from "./menu/MyProfile";
import Tsumiage from "./feed/Tsumiage";
import Results from "./feed/Results";
import SmallTalk from "./feed/SmallTalk";
import Events from "./feed/Events";
import EventReports from "./feed/EventReports";
import Projects from "./feed/Projects";
import Surveys from "./feed/Surveys";
import SidebarLayout from "./sideber/SidebarLayout";
import SearchPage from "./searchPage/SearchPage";

const App = () => {
  const [isLogin, setIsLoggedIn] = useState(true);
  return (
    <div className="app">
      <Router>
        <Header isLogin={isLogin} setIsLoggedIn={setIsLoggedIn} />
        <main className="app-main">
          <Routes>
            {isLogin ? (
              <>
                <Route
                  path="/"
                  element={
                    <SidebarLayout>
                      <HomeFeed />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/home/*"
                  element={
                    <SidebarLayout>
                      <HomeFeed />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/search/*"
                  element={
                    <SidebarLayout>
                      <SearchPage />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/messages/*"
                  element={
                    <SidebarLayout>
                      <Messages />
                    </SidebarLayout>
                  }
                />
                <Route
                  path="/profile/*"
                  element={
                    <SidebarLayout>
                      <MyProfile />
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
                  path="/smalltalk/*"
                  element={
                    <SidebarLayout>
                      <SmallTalk />
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

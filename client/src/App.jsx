import React from "react";
import { Route, Routes } from "react-router-dom";
import CaptainSignup from "./pages/CaptainSignup";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtected from "./protected/UserProtected";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtected from "./protected/captainProtected";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserProtected>
              <Start />
            </UserProtected>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route
          path="/home"
          element={
            <UserProtected>
              <Home />
            </UserProtected>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtected>
              <CaptainHome />
            </CaptainProtected>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

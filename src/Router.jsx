import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemorialMain from "./pages/MemorialMain";
import MemoralDetail from "./pages/MemoralDetail";
import SideBar from "./components/common/SideBar";
import MemorialNew from "./pages/MemorialNew";
import styled from "styled-components";

import LandingPage from "./pages/LandingPage";
=import LandingPage from "./pages/LandingPage";
import FuneralLocation from "./pages/FuneralLocation";
import FuneralLocationDetail from "./pages/FuneralLocationDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Router() {
  return (
    <BrowserRouter>

      <SideBarDiv>
        <SideBar></SideBar>
      </SideBarDiv>
      <PageDiv>
        <Routes>
          <Route path="/landingPage" element={<LandingPage />}></Route>
          <Route path="/memorialMain" element={<MemorialMain />}></Route>
          <Route path="/memorialNew" element={<MemorialNew />}></Route>
          <Route path="/memorialDetail" element={<MemoralDetail />}></Route>
        </Routes>
      </PageDiv>
      <SideBar></SideBar>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />}></Route>
        <Route path="/memorialMain" element={<MemorialMain />}></Route>
        <Route path="/memorialNew" element={<MemorialNew />}></Route>
        <Route path="/memorialDetail" element={<MemoralDetail />}></Route>
        <Route path="/funeralLocation" element={<FuneralLocation />}></Route>
        <Route
          path="/funeralLocationDetail"
          element={<FuneralLocationDetail />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

const SideBarDiv = styled.div`
  position: relative;
  z-index: 2;
`;
const PageDiv = styled.div`
  position: relative;
  z-index: 1;
`;

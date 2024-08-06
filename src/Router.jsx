import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemorialMain from "./pages/MemorialMain";
import MemoralDetail from "./pages/MemoralDetail";
import SideBar from "./components/common/SideBar";
import MemorialNew from "./pages/MemorialNew";
import styled from "styled-components";

import LandingPage from "./pages/LandingPage";
import FuneralLocation from "./pages/FuneralLocation";
import FuneralLocationDetail from "./pages/FuneralLocationDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DiaryQuestion from "./pages/DiaryQuestion";
import DiaryLetter from "./pages/DiaryLetter";

import MyPage from "./pages/Mypage";

function Router() {
  return (
    <BrowserRouter>
      <SideBarDiv>
        <SideBar></SideBar>
      </SideBarDiv>
      <PageDiv>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/landingPage" element={<LandingPage />}></Route>
          <Route path="/diaryQuestion" element={<DiaryQuestion />}></Route>
          <Route path="/diaryLetter" element={<DiaryLetter />}></Route>
          <Route path="/memorialMain" element={<MemorialMain />}></Route>
          <Route path="/memorialNew" element={<MemorialNew />}></Route>
          <Route path="/memorialDetail/:id" element={<MemoralDetail />}></Route>
          <Route path="/funeralLocation" element={<FuneralLocation />}></Route>
          <Route
            path="/funeralLocationDetail"
            element={<FuneralLocationDetail />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </PageDiv>
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

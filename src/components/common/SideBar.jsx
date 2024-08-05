import React, { useState } from "react";
import iconMenu from "../../assets/icon/iconMenu.png";
import iconHome from "../../assets/icon/iconHome.png";
import iconDiary from "../../assets/icon/iconDiary.png";
import iconPaw from "../../assets/icon/iconPaw.png";
import iconFuneral from "../../assets/icon/iconFuneral.png";
import iconMy from "../../assets/icon/iconMy.png";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { SecondaryText, ButtonSecondary } from "../../styles/color";

const SideBar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [isExtended, SetIsExtended] = useState(false);

  return (
    <div>
      <SideBarWrapper>
        <StyledSideBar className={isExtended ? "extendedBar" : ""}>
          <div className="menuWrapper">
            <MenuImg
              src={iconMenu}
              onClick={() => {
                SetIsExtended(!isExtended);
                // deleteText();
              }}
            ></MenuImg>
          </div>
          <IconSectionWrapper width={isExtended ? "210px" : "50px"}>
            <IconWrapper
              width={isExtended ? "210px" : "50px"}
              onClick={() => {
                isExtended && SetIsExtended(!isExtended);
                nav("/");
              }}
            >
              <IconImg src={iconHome}></IconImg>
              <div className={isExtended ? "showText" : "hideText"}>
                {isExtended && <div>홈</div>}
              </div>
            </IconWrapper>
            <IconWrapper
              width={isExtended ? "210px" : "50px"}
              onClick={() => {
                isExtended && SetIsExtended(!isExtended);
                nav("/");
              }}
            >
              <IconImg src={iconDiary}></IconImg>
              <div className={isExtended ? "showText" : "hideText"}>
                {isExtended && <div>일기 작성하기</div>}
              </div>
            </IconWrapper>
            <IconWrapper
              width={isExtended ? "210px" : "50px"}
              onClick={() => {
                isExtended && SetIsExtended(!isExtended);
                nav("/memorialMain");
              }}
              className={
                location.pathname.includes("memorial") ? "currentPage" : ""
              }
            >
              <IconImg src={iconPaw}></IconImg>
              <div className={isExtended ? "showText" : "hideText"}>
                {isExtended && <div>추모공간 입장하기</div>}
              </div>
            </IconWrapper>
            <IconWrapper
              width={isExtended ? "210px" : "50px"}
              onClick={() => {
                isExtended && SetIsExtended(!isExtended);
                nav("/");
              }}
            >
              <IconImg src={iconFuneral}></IconImg>
              <div className={isExtended ? "showText" : "hideText"}>
                {isExtended && <div>장례식장 찾기</div>}
              </div>
            </IconWrapper>
            <IconWrapper
              width={isExtended ? "210px" : "50px"}
              onClick={() => {
                isExtended && SetIsExtended(!isExtended);
                nav("/");
              }}
            >
              <IconImg src={iconMy}></IconImg>
              <div className={isExtended ? "showText" : "hideText"}>
                {isExtended && <div>MY 페이지</div>}
              </div>
            </IconWrapper>
          </IconSectionWrapper>
        </StyledSideBar>
        {/* <BackgroundDiv></BackgroundDiv> */}
      </SideBarWrapper>
    </div>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  .extendedBar {
    width: 240px;
  }
`;

const StyledSideBar = styled.div`
  background-color: white;

  width: 80px;
  transition: width 0.5s;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;

  .menuWrapper {
    width: 7vw;
    padding-left: 20px;

    height: 20%;
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
`;

const MenuImg = styled.img`
  width: 40px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    filter: contrast(115%);
  }
`;

const IconImg = styled.img`
  width: 23px;
  flex-shrink: 0;
`;

const IconSectionWrapper = styled.div`
  width: ${(props) => props.width};
  padding-left: 30px;

  /* display: flex;
  flex-direction: column;
  gap: 60px; */
  /* margin-left: 2.5vw; */
  /* text-align: center; */
  position: fixed;
  margin-top: 150px;
  .currentPage {
    color: ${ButtonSecondary};
    img {
      filter: invert(35%) sepia(12%) saturate(1426%) hue-rotate(321deg)
        brightness(117%) contrast(81%);
    }
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 60px;

  width: ${(props) => props.width};
  display: flex;
  font-size: 15px;
  font-weight: 700;
  color: ${SecondaryText};
  &:hover {
    img {
      filter: invert(35%) sepia(12%) saturate(1426%) hue-rotate(321deg)
        brightness(117%) contrast(81%);
    }
    color: ${ButtonSecondary};
  }

  align-items: center;
  cursor: pointer;

  > div {
    margin-left: 20px;
    width: 200px;
  }
  .hideText {
    opacity: 0;
    transition: opacity 0.2s linear 0.2s;
    cursor: default;
    /* visibility: hidden; */
    /* width: 1vw; */
  }

  .showText {
    opacity: 1;
    transition: opacity 0.2s linear 0.2s;
    cursor: pointer;
  }
`;

// const BackgroundDiv = styled.div`
//   width: 93vw;
//   height: 100vh;
//   position: fixed;
//   margin-left: 7vw;
//   background-color: rgba(0, 0, 0, 0);
// `;

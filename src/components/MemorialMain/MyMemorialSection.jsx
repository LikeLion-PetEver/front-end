import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import memorialLanding from "../../assets/icon/memorialLanding.png";
import styled from "styled-components";
import { SelectFuneral } from "../../styles/color";
import { useNavigate } from "react-router-dom";
import { MainText, SubText } from "./OtherMemorialSection";

const MyMemorialSection = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(0);
  const [myMemorialId, setMyMemorialId] = useState(0);
  const [isCreated, setIsCreated] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    }
    if (localStorage.getItem("user_id")) {
      setUserId(Number(localStorage.getItem("user_id")));
    }
    //나의 추모관 페이지 이동 기능 추가 (api 새로 만들자)
  }, []);

  const onClickCreate = () => {
    if (!isLogin) {
      alert("로그인 후 이용 가능합니다.");
      nav("/login");
    } else {
      nav("/memorialNew");
    }
  };

  const onClickEnter = () => {
    nav(`/memorialDetail/${myMemorialId}`);
  };

  return (
    <>
      <SectionWrapper>
        <TextWrapper>
          <SubText>
            우리가 함께한 시간들이 소중히 간직할 추억이 될 수 있도록.
          </SubText>
          <MainText>
            반려동물과 함께한
            <br />
            <span>우리의 발자국</span>을 남겨주세요
          </MainText>
          <SubText>
            이곳에서 사랑과 추억을 함께 나누며, 사랑하는 존재를 영원히
            간직하세요.
            <br /> 당신의 슬픔을 이해하며, 함께 위로받는 공간이 되겠습니다.
          </SubText>
          <ButtonWrapper>
            <Button
              text={isCreated ? "추모공간 입장하기" : "추모공간 생성하기"}
              color={SelectFuneral}
              onClick={isCreated ? onClickEnter : onClickCreate}
            ></Button>
          </ButtonWrapper>
        </TextWrapper>

        <ImageWrapper>
          <img src={memorialLanding}></img>
        </ImageWrapper>
      </SectionWrapper>
    </>
  );
};

export default MyMemorialSection;

const SectionWrapper = styled.div`
  display: flex;
  /* gap: 100px; */
  justify-content: space-between;
  margin-left: 7%;
  width: 93vw;
  height: 70vh;
  background-color: #f6f5f4;
`;

const TextWrapper = styled.div`
  padding: 88px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: normal;
  width: 70vw;
`;

const ImageWrapper = styled.div`
  margin-top: 20px;
  width: 80%;
  img {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
  button {
    font-size: 18px;
  }
`;

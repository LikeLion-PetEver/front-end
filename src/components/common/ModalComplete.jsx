import React from "react";
import styled from "styled-components";
import iconX from "../../assets/icon/iconX.png";
import iconCheck from "../../assets/icon/iconCheck.png";

const ModalComplete = ({ onCloseClick }) => {
  return (
    <StyledModal>
      <CloseImg onClick={onCloseClick} src={iconX}></CloseImg>
      <TextWrapper>
        <CheckImgWrapper>
          <img src={iconCheck}></img>
        </CheckImgWrapper>
        <span>
          추모공간 생성이 완료되었습니다.
          <br />
          생성된 추모공간은
          <BoldText> 발자국 남기기- 추모공간 입장하기</BoldText>에서 확인하실 수
          있어요
        </span>
      </TextWrapper>
    </StyledModal>
  );
};

export default ModalComplete;

const StyledModal = styled.div`
  background-color: white;
  width: 60%;
  height: 40%;
  flex-shrink: 0;
  border-radius: 30px;
  position: relative;
`;

const CloseImg = styled.img`
  position: absolute;
  top: 10%;
  left: 90%;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.5px;
`;
const CheckImgWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 2%;
  > img {
    width: 20%;
  }
`;

const BoldText = styled.span`
  font-weight: 700;
`;

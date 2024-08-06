import React from "react";
import styled from "styled-components";
import { Text, SecondaryText } from "../styles/color";

const PostBlock = ({ img, textMain, textSub, onClick }) => {
  return (
    <StyledPostBlock onClick={onClick}>
      <PostImg src={img}></PostImg>
      <PostTextArea>
        <PostTextMain>
          {textMain?.length <= 11 ? textMain : textMain?.slice(0, 11) + "..."}
        </PostTextMain>
        {/* 12자 이상일 경우 ...표시와 함께 뒷부분 생략 */}
        <PostTextSub>{textSub}</PostTextSub>
      </PostTextArea>
    </StyledPostBlock>
  );
};

export default PostBlock;

const StyledPostBlock = styled.div`
  background-color: white;
  width: 267.75px;
  height: 267.75px;
  flex-shrink: 0;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  position: relative;
  cursor: pointer;
`;

const PostImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
`;

const PostTextArea = styled.div`
  font-family: "LINESeedKR";
  position: absolute;
  width: 100%;
  height: 40%;
  top: 60%;
  padding: 30px 20px;
`;

const PostTextMain = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${Text};
  margin-bottom: 10px;
`;
const PostTextSub = styled.h5`
  font-size: 15px;
  font-weight: 400;
  color: ${SecondaryText};
`;

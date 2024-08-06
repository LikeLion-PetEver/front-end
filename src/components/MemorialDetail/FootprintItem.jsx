import React from "react";
import styled from "styled-components";
import { SelectFuneral } from "../../styles/color";
import pawBrown from "../../assets/icon/pawBrown.png";

const FootprintItem = ({ content, username }) => {
  return (
    <Itemwrapper>
      <ItemBox>
        <div className="footprintContent">{content}</div>
        <div className="footprintUser">{username}</div>
      </ItemBox>
      <img src={pawBrown}></img>
    </Itemwrapper>
  );
};

export default FootprintItem;

const Itemwrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  cursor: pointer;

  > img {
    position: absolute;
    width: 60px;
    top: -25px;
    right: -25px;
    opacity: 0.7;
  }
`;

const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 25px 10px 25px;
  border-radius: 30px 30px 30px 0px;
  background: var(--box-funeral, #fef9f5);
  box-shadow: 5px 4px 7.5px 0px rgba(0, 0, 0, 0.25);
  word-break: keep-all;
  color: ${SelectFuneral};
  font-family: "NanumPen";
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  .footprintContent {
    font-size: 24px;
    height: 100%;
  }
  .footprintUser {
    text-align: right;
    font-size: 20px;
  }
`;

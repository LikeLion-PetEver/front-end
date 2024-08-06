import React from "react";
import polaroid from "../../assets/icon/polaroid.png";
import tape from "../../assets/icon/tape.png";
import styled from "styled-components";

const PolaroidItem = ({ image }) => {
  return (
    <ItemWrapper>
      <img className="polaroidImg" src={polaroid}></img>
      <img className="polaroidTapeImg" src={tape}></img>
      <img className="polaroidContentImg" src={image}></img>
    </ItemWrapper>
  );
};

export default PolaroidItem;

const ItemWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 228px;
  margin-bottom: 80px;
  cursor: pointer;
  img {
    position: absolute;
    width: 200px;
  }
  .polaroidTapeImg {
    position: absolute;
    width: 170px;
    height: 62px;
    top: -35px;
    left: 15px;
    z-index: 1;
  }
  .polaroidContentImg {
    position: absolute;
    width: 180px;
    height: 180px;
    top: 10px;
    left: 10px;
    object-fit: cover;
  }
`;

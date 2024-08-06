import React from "react";
import pawBrown from "../../assets/icon/pawBrown.png";
import styled from "styled-components";
import PolaroidItem from "./PolaroidItem";

const GallerySection = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="titleText">{`${data.pet_name}와 함께한 발자국들`}</div>
      <img className="titlePaw" src={pawBrown}></img>
      <PolaroidWrapper>
        {data.gallery_images?.map((item) => {
          return <PolaroidItem key={item.id} image={item.image}></PolaroidItem>;
        })}
      </PolaroidWrapper>
    </SectionWrapper>
  );
};

export default GallerySection;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  position: relative;

  .titleText {
    text-align: center;
    font-size: 36px;
    font-weight: 800;
    line-height: normal;
  }
  .titlePaw {
    position: absolute;
    width: 100px;
    top: -50px;
    left: 67%;
    opacity: 0.1;
  }
`;

const PolaroidWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 5%;
  width: 100%;
  flex-wrap: wrap;
`;

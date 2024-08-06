import React from "react";
import styled from "styled-components";
import { SecondaryText, SelectFuneral, Text } from "../../styles/color";

const InputTextSection = ({ text1, text2, text3 }) => {
  return (
    <SectionWrapper>
      <IndexText>{text1}</IndexText>
      <MainText>{text2}</MainText>
      <SubText>{text3}</SubText>
    </SectionWrapper>
  );
};

export default InputTextSection;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexText = styled.div`
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 35px */
  letter-spacing: -0.5px;
  color: ${SelectFuneral};
  margin-bottom: 5px;
`;

const MainText = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.56px;
  color: ${Text};
  margin-bottom: 9px;
`;

const SubText = styled.div`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 21px */
  letter-spacing: -0.3px;
  color: ${SecondaryText};
`;

import React from "react";
import InputTextSection from "./InputTextSection";
import styled from "styled-components";
import { Text, Unselect } from "../../styles/color";

const InputSectionFirst = ({ inputRef, onChangeData }) => {
  return (
    <SectionWrapper>
      <InputTextSection
        text1={"01"}
        text2={"반려동물의 정보를 알려주세요"}
        text3={"추모공간을 만들기 위해서는 기본적인 정보가 필요해요"}
      ></InputTextSection>
      <div>
        <InputText>반려동물 이름</InputText>
        <InputBox
          id={"pet_name"}
          onChange={onChangeData}
          placeholder="반려동물의 이름을 입력해주세요"
          ref={(ref) => (inputRef.current[0] = ref)}
          required
        ></InputBox>
      </div>
      <DateSectionWrapper>
        <DateWrapper>
          <InputText>반려동물 탄생일</InputText>
          <InputBox
            id={"birth_date"}
            onChange={onChangeData}
            type="date"
            ref={(ref) => (inputRef.current[1] = ref)}
            required
          ></InputBox>
        </DateWrapper>
        <DateWrapper>
          <InputText>무지개 다리를 건넌 날</InputText>
          <InputBox
            id={"death_date"}
            onChange={onChangeData}
            placeholder="YYYY/MM/DD"
            type="date"
            ref={(ref) => (inputRef.current[2] = ref)}
          ></InputBox>
        </DateWrapper>
      </DateSectionWrapper>
    </SectionWrapper>
  );
};

export default InputSectionFirst;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const InputText = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.36px;
  color: ${Text};
  margin-bottom: 7px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 46px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid ${Unselect};
  background: #fff;
  padding: 13px 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${Text};
  &::placeholder {
    color: ${Unselect};
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0.3;
  }
`;

export const DateSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  width: 47%;
`;

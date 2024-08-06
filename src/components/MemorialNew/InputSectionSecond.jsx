import React, { useRef, useState } from "react";
import InputTextSection from "./InputTextSection";
import styled from "styled-components";
import {
  SecondaryText,
  SelectFuneral,
  Text,
  Unselect,
} from "../../styles/color";
import Button from "../common/Button";

const InputSectionSecond = ({ inputRef, onChangeData }) => {
  const [mainImgName, setMainImgName] = useState(null);
  const selectFile = useRef("");

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setMainImgName(file.name);
    onChangeData(e);
  };
  const onSubmitButton = () => {
    selectFile.current.click();
  };

  return (
    <SectionWrapper>
      <InputTextSection
        text1={"02"}
        text2={"추모공간의 이름을 지어주세요"}
        text3={"우리만의 소중한 공간의 이름을 지어주세요"}
      ></InputTextSection>
      <div>
        <InputText>추모공간 이름</InputText>
        <InputSubText>
          다른 유저가 추모공간을 방문할 때 노출되는 이름입니다.
        </InputSubText>
        <InputBox
          id={"memorial_name"}
          onChange={onChangeData}
          placeholder="ex) 보고싶은 우리 코코"
          ref={(ref) => (inputRef.current[3] = ref)}
          required
        ></InputBox>
      </div>
      <div>
        <InputText>추모공간 대표문구</InputText>
        <InputSubText>추모공간 상단에 배치되는 내용입니다. </InputSubText>
        <InputBox
          id={"memorial_tagline"}
          onChange={onChangeData}
          placeholder="ex) 사랑하는 우리 코코, 그와 함께한 순간들을 기억하며."
          ref={(ref) => (inputRef.current[4] = ref)}
          required
        ></InputBox>
      </div>
      <div>
        <InputText>추모공간 대표이미지</InputText>
        <InputSubText>
          추모공간에 노출될 대표 사진을 업로드해주세요. (최대 1장) <br />
          해당 사진은 대표 문구와 함께 추모공간 페이지의 상단에 배치됩니다{" "}
        </InputSubText>
        <ImgWrapper>
          <div>{mainImgName && <div>{mainImgName}</div>}</div>
          <input
            id={"main_image"}
            onChange={onChangeImage}
            type="file"
            accept=".png,.jpg"
            ref={(ref) => {
              inputRef.current[5] = ref;
              selectFile.current = ref;
            }}
            required
            placeholder="사진을 업로드해주세요"
          ></input>
          <Button
            text={"사진 업로드"}
            color={SelectFuneral}
            onClick={onSubmitButton}
          ></Button>
        </ImgWrapper>
      </div>
    </SectionWrapper>
  );
};

export default InputSectionSecond;

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

export const InputSubText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 25.2px */
  letter-spacing: -0.24px;
  color: ${SecondaryText};
  margin-bottom: 15px;
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

export const ImgWrapper = styled.div`
  display: flex;
  gap: 3%;
  > input {
    display: none;
  }
  > button {
    width: 30%;
    height: 46px;
    font-size: 18px;
  }
  > div {
    flex: 1;
    min-height: 46px;
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
  }
`;

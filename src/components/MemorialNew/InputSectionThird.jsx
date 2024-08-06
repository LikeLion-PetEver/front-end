import React, { useRef, useState } from "react";
import InputTextSection from "./InputTextSection";
import { InputText, SectionWrapper } from "./InputSectionFirst";
import styled from "styled-components";
import { Accent, SelectFuneral, Text, Unselect } from "../../styles/color";
import { ImgWrapper, InputSubText } from "./InputSectionSecond";
import Button from "../common/Button";
import iconX from "../../assets/icon/iconX.png";

const InputSectionThird = ({ inputRef, onChangeData }) => {
  const [files, setFiles] = useState([]);
  const [overLimit, setOverLimit] = useState(false);
  const selectFile = useRef("");

  const onChangeImage = (e) => {
    const updatedFiles = Array.from(e.target.files);
    if (updatedFiles.length >= 9) {
      setOverLimit(true);
      return;
    }
    setFiles(updatedFiles);
    onChangeData(
      e,
      updatedFiles.map((item) => {
        return URL.createObjectURL(item);
      })
    );
  };

  const onDeleteImage = (e) => {
    const targetId = e.target.parentElement.id;
    const updatedFiles = files.filter((item) => item.name !== targetId);
    if (updatedFiles.length === 0) {
      setOverLimit(false);
    }
    setFiles(updatedFiles);
    onChangeData(
      { target: { id: "gallery_images" } },
      updatedFiles.map((item) => {
        return URL.createObjectURL(item);
      })
    );
  };

  const onSubmitButton = () => {
    selectFile.current.click();
  };

  return (
    <SectionWrapper>
      <InputTextSection
        text1={"03"}
        text2={"추모공간에 들어갈 내용을 입력해주세요"}
        text3={
          "소중한 우리 아이에게 전하고 싶은 말이나, 남기고 싶은 사진이 있으신가요?"
        }
      ></InputTextSection>
      <div>
        <InputText>전하고 싶은 말</InputText>
        <InputBox
          id={"message"}
          onChange={onChangeData}
          placeholder="ex) 코코야, 우리랑 함께해줘서 정말 고마웠어. 너랑 함께한 모든 시간이 행복했다는 걸 잊지 말아주라. 사랑해🤍"
          ref={(ref) => (inputRef.current[6] = ref)}
          required
        ></InputBox>
      </div>
      <div>
        <InputText>남기고 싶은 사진</InputText>
        <InputSubText>
          추모공간에 추가로 남기고 싶은 사진을 업로드해주세요 (최대 8장) <br />{" "}
          사진은 추모공간 페이지의 하단의 사진첩 섹션에 배치됩니다
        </InputSubText>
        <ImgWrapper>
          <div>
            <ImgPlaceholder overLimit={overLimit}>
              {files.length === 0
                ? overLimit
                  ? "사진 개수가 8개보다 많습니다"
                  : "사진을 업로드해주세요"
                : ""}
            </ImgPlaceholder>
            {files.map((item, index) => {
              return (
                <ImgItemWrapper key={index} id={item.name}>
                  <div>{item.name}</div>
                  <IconXImg onClick={onDeleteImage} src={iconX}></IconXImg>
                </ImgItemWrapper>
              );
            })}
          </div>
          <input
            id={"new_gallery_images"}
            onChange={onChangeImage}
            type="file"
            accept=".png,.jpg"
            ref={(ref) => {
              inputRef.current[7] = ref;
              selectFile.current = ref;
            }}
            required
            multiple
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

export default InputSectionThird;

export const InputBox = styled.textarea`
  width: 100%;
  height: 128px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid ${Unselect};
  background: #fff;
  padding: 18px 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${Text};
  resize: none;
  word-break: keep-all;
  &::placeholder {
    color: ${Unselect};
  }
`;

export const IconXImg = styled.img`
  width: 12px;
  margin-left: 5px;
  cursor: pointer;
`;
export const ImgItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgPlaceholder = styled.div`
  color: ${(props) => (props.overLimit ? Accent : Unselect)};
`;

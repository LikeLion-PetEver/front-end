import React, { useRef, useState } from "react";
import Button from "../common/Button";
import {
  SelectFuneral,
  BoxFuneral,
  SecondaryText,
  Unselect,
} from "../../styles/color";
import imageFrame from "../../assets/icon/imageFrame.png";
import styled from "styled-components";
import pawBrown from "../../assets/icon/pawBrown.png";
import { instance } from "../../api/instance";

const getFormattedDate = (date) => {
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
};

const MainSection = ({ data, params, submitCheck, setSubmitCheck }) => {
  const [inputData, setInputData] = useState({
    memorial_id: Number(params.id),
  });
  const inputRef = useRef([]);

  const onChangeData = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    if (inputRef.current.filter((item) => item.value).length !== 2) {
      alert("발자국 정보를 모두 입력해주세요.");
      return;
    }
    const fetchData = async () => {
      const res = await instance.post("tributes/footprints/", inputData);
      console.log(res);
    };
    fetchData();
    setSubmitCheck(!submitCheck);
    inputRef.current[0].value = "";
    inputRef.current[1].value = "";
  };

  return (
    <SectionWrapper>
      <FrameWrapper>
        <img src={imageFrame}></img>
        <FrameContent>
          <img src={data.main_image}></img>
          <div className="petName">{data.pet_name}</div>
          <div className="lifeTime">{`${getFormattedDate(
            new Date(data.birth_date)
          )} ~ ${getFormattedDate(new Date(data.death_date))}`}</div>
        </FrameContent>
      </FrameWrapper>
      <TextWrapper>
        <div className="mainText">{data.memorial_tagline}</div>
        <div className="subText">{data.message}</div>

        <InputWrapper>
          <div className="inputText">
            {data.user_name}님 혹은 {data.user_name}님의 반려동물에게 남기고
            싶은 말이 있으신가요?
            <br />
            {data.user_name}님의 소중한 가족이었던 {data.pet_name}와의 마지막
            여정에 발자국을 남겨주세요.
          </div>
          <InputContent>
            <textarea
              id="content"
              onChange={onChangeData}
              placeholder="원하시는 문구를 작성해주세요"
              ref={(ref) => (inputRef.current[0] = ref)}
            ></textarea>
          </InputContent>
          <SubmitWrapper>
            <input
              id="username"
              onChange={onChangeData}
              placeholder="작성자 이름(닉네임)을 작성해주세요"
              ref={(ref) => (inputRef.current[1] = ref)}
            ></input>
            <div>
              <Button
                text={"발자국 남기기"}
                color={SelectFuneral}
                onClick={onSubmit}
              ></Button>
              <img src={pawBrown}></img>
            </div>
          </SubmitWrapper>
        </InputWrapper>
      </TextWrapper>
    </SectionWrapper>
  );
};

export default MainSection;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  word-break: keep-all;
`;

const FrameWrapper = styled.div`
  width: 390px;
  position: relative;
  > img {
    width: 360px;
  }
`;

const FrameContent = styled.div`
  position: absolute;
  top: 70px;
  left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-family: NanumPen;
  > img {
    width: 240px;
    height: 240px;
    margin-bottom: 13px;
    object-fit: cover;
  }
  .petName {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 5px;
    line-height: 0.7;
  }
  .lifeTime {
    font-size: 22px;
    font-weight: 400;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .mainText {
    font-size: 36px;
    font-weight: 800;
    line-height: 140%;
    letter-spacing: -1px;
  }
  .subText {
    font-size: 18px;
    font-weight: 700;
    line-height: 140%; /* 32.2px */
    letter-spacing: -1.15px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .inputText {
    font-size: 12px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -1px;
    color: ${SecondaryText};
  }
  input,
  textarea {
    border: none;
    border-radius: 10px;
    background: ${BoxFuneral};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2) inset,
      4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    font-family: NanumMyeongjo;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    resize: none;
    &::placeholder {
      color: ${Unselect};
    }
  }
`;

const InputContent = styled.div`
  margin-top: 10px;
  textarea {
    width: 100%;
    height: 120px;
    padding: 20px;
  }
`;

const SubmitWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  input {
    flex: 1;
    padding: 16px;
  }
  div {
    position: relative;
  }
  img {
    position: absolute;
    width: 25px;
    top: 12px;
    left: 142px;
    opacity: 0.4;
  }
  button {
    font-family: NanumMyeongjo;
    font-size: 18px;
    text-align: left;
    padding-left: 30px;
  }
`;

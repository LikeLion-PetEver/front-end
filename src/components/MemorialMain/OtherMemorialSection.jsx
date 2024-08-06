import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SecondaryText, SelectFuneral } from "../../styles/color";
import PostBlock from "../common/PostBlock";
import mockImage from "../../assets/icon/mockImage.jpg";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/instance";
import axios from "axios";

const OtherMemorialSection = () => {
  const nav = useNavigate();
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get("tributes/memorial");
      console.log(res);
      setMockData(res.data);
    };
    fetchData();
  }, []);

  return (
    <SectionWrapper>
      <MainText>
        <span>다른 유저들의 추모공간</span>도
        <br />
        방문해보세요
      </MainText>
      <SubText>
        다양한 이야기와 기억들을 나누며, 서로의 슬픔을 이해하고 위로받는 시간을
        가지실 수 있습니다
        <br /> 함께 추모하며, 소중한 반려동물들을 기억하는 따뜻한 커뮤니티에
        참여해보세요.
      </SubText>
      <PostWrapper>
        {mockData.map((item) => {
          return (
            <PostBlock
              key={item.id}
              textMain={item.memorial_tagline}
              textSub={item.user_name}
              img={item.main_image}
              onClick={() => {
                nav(`/memorialDetail/${item.id}`);
              }}
            ></PostBlock>
          );
        })}
      </PostWrapper>
    </SectionWrapper>
  );
};

export default OtherMemorialSection;

export const SectionWrapper = styled.div`
  margin-left: 7%;
  padding: 88px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: normal;
`;

export const MainText = styled.div`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;
  span {
    color: ${SelectFuneral};
  }
`;

export const SubText = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: ${SecondaryText};
`;

export const PostWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 2%;
  width: 100%;
  flex-wrap: wrap;
  > div {
    width: 23%;
    height: 210px;
    margin-bottom: 2%;
  }
`;

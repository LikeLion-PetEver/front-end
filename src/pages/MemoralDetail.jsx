import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainSection from "../components/MemorialDetail/MainSection";
import FootprintSection from "../components/MemorialDetail/FootprintSection";
import GallerySection from "../components/MemorialDetail/GallerySection";
import Button from "../components/common/Button";
import styled from "styled-components";
import { Unselect } from "../styles/color";
import { instance } from "../api/instance";

const MemorialDetail = () => {
  const nav = useNavigate();
  const params = useParams();
  const [data, setData] = useState();
  const [submitCheck, setSubmitCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(params);
      const res = await instance.get(`tributes/memorial/${params.id}`);
      console.log(res);
      setData(res.data);
    };
    fetchData();
  }, [submitCheck]);

  return (
    <PageWrapper>
      {data && (
        <SectionWrapper>
          <MainSection
            data={data}
            params={params}
            submitCheck={submitCheck}
            setSubmitCheck={setSubmitCheck}
          ></MainSection>
          <FootprintSection data={data}></FootprintSection>
          <GallerySection data={data}></GallerySection>
        </SectionWrapper>
      )}
    </PageWrapper>
  );
};

export default MemorialDetail;

const PageWrapper = styled.div`
  font-family: NanumMyeongjo;
  margin-left: 80px;
  background-color: #f6f5f4;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
  padding: 60px;
`;

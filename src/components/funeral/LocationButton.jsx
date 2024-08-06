import { useEffect, useState } from "react";
import "./LocationButton.css";
import PostBlock from "../common/PostBlock";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LocationButton = ({ mockData }) => {
  const [area, setArea] = useState("수도권");

  const filteredMetropolitan = (region) => {
    return mockData.filter((location) => location.region === region);
  };

  const [newList, setNewList] = useState(filteredMetropolitan());

  useEffect(() => {
    setNewList(filteredMetropolitan());
  }, [mockData]);

  const filteredLocations = (region) => {
    return mockData.filter((location) => location.region === region);
  };

  const nav = useNavigate();

  const onClickButton = (item) => {
    nav("/funeralLocationDetail", {
      state: {
        img: `${item.image}`,
        title: `${item.name}`,
        address: `${item.address}`,
        phonenum: `${item.phone}`,
        link: `${item.website}`,
      },
    });
  };

  return (
    <>
      <div className="LocationButton">
        <button
          className={area === "수도권" ? "isSelected" : ""}
          onClick={() => {
            setArea("수도권");
            setNewList(filteredMetropolitan("수도권"));
          }}
        >
          수도권
        </button>
        <button
          className={area === "강원권" ? "isSelected" : ""}
          onClick={() => {
            setArea("강원권");
            setNewList(filteredLocations("강원권"));
          }}
        >
          강원권
        </button>
        <button
          className={area === "충청권" ? "isSelected" : ""}
          onClick={() => {
            setArea("충청권");
            setNewList(filteredLocations("충청권"));
          }}
        >
          충청권
        </button>
        <button
          className={area === "영남권" ? "isSelected" : ""}
          onClick={() => {
            setArea("영남권");
            setNewList(filteredLocations("영남권"));
          }}
        >
          영남권
        </button>
        <button
          className={area === "호남권" ? "isSelected" : ""}
          onClick={() => {
            setArea("호남권");
            setNewList(filteredLocations("호남권"));
          }}
        >
          호남권
        </button>
      </div>
      <div className="postblock">
        {newList.map((item, index) => {
          return (
            <Wrapper key={index}>
              <PostBlock
                img={item.image}
                textMain={item.name}
                textSub={item.address}
                onClick={() => onClickButton(item)}
              />
            </Wrapper>
          );
        })}
      </div>
    </>
  );
};

export default LocationButton;

const Wrapper = styled.div`
  > div {
    width: 225px;
    height: 225px;
  }
`;

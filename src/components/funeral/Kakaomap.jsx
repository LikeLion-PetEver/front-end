import React, { useEffect } from "react";
import "./Kakaomap.css";

const { kakao } = window;

const Kakaomap = () => {
  useEffect(() => {
    const mapcontainer = document.getElementById("map");
    const options = {
      center: new Kakaomap.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(mapcontainer, options);
  }, []);

  return <div id="Kakaomap"></div>;
};

export default Kakaomap;

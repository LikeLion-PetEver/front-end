import Header from "../components/funeral/Header";
import LocationButton from "../components/funeral/LocationButton";
import { instance } from "../api/instance";
import { useEffect, useState } from "react";
const FuneralLocation = () => {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get("venues/funerals/");
      console.log(res);
      setMockData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="FuneralLocation">
      <Header></Header>
      <LocationButton mockData={mockData}></LocationButton>
    </div>
  );
};

export default FuneralLocation;

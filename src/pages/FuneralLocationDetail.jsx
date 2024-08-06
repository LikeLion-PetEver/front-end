import "./FuneralLocationDetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import caretleft from "../img/CaretLeft.png";

const FuneralLocationDetail = () => {
  const location = useLocation();
  const state = location.state || {};
  const { img, title, address, phonenum, link } = state;
  const nav = useNavigate();
  const onClickLeft = () => {
    nav("/funeralLocation");
  };

  return (
    <div className="container">
      <div className="header">
        <img className="header-img" src={img} alt={title} />
        <div className="header-content">
          <div className="title">
            <img src={caretleft} className="careleft" onClick={onClickLeft} />
            <h1>{title}</h1>
          </div>
          <p>{address}</p>
        </div>
      </div>
      <div className="main">
        <table className="info-table">
          <tbody>
            <tr>
              <td className="left">홈페이지</td>
              <td className="right">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                ) : (
                  "링크 없음"
                )}
              </td>
            </tr>
            <tr>
              <td className="left">대표번호</td>
              <td className="right">{phonenum || "번호 없음"}</td>
            </tr>
            <tr>
              <td className="left">주소</td>
              <td className="right">{address || "주소 없음"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="detail2">
        지도 위의 핀 아이콘 클릭 시, 네이버 지도로 이동합니다.
      </div>
    </div>
  );
};

export default FuneralLocationDetail;

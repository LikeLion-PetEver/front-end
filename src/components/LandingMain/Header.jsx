import React from "react";
import "../../styles/landing/Header.css";
import imageSrc from "../../assets/Images/person_with_pet.png";

const Header = () => {
  return (
    <header className="header-landing">
      <div className="header-content-landing">
        <div className="text-content-landing">
          <div className="logo-landing">
            PET:<span className="ever_highlight">EVER</span>
          </div>
          <div className="hero-landing">
            <p>
              사랑하는 반려동물과의 <span className="hero_highlight">추억</span>
              을
            </p>
            <p>영원토록 소중히 간직하세요</p>
          </div>
          <div className="hero_detail-landing">
            <p>추억은 기록할수록 더욱 선명해집니다.</p>
            <p>
              사랑하는 반려동물과의 소중한 순간들을 PET:EVER과 함께 간직하세요.
            </p>
          </div>
        </div>
        <div className="image-content-landing">
          <img src={imageSrc} alt="Pet and owner" />
        </div>
      </div>
    </header>
  );
};

export default Header;

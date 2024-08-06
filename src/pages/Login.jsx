import React, { useEffect, useRef, useState } from "react";
import { instance } from "../api/instance";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isPendingRequest, setIsPendingRequest] = useState(false);

  const idRef = useRef();
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate("/signup");
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setId(value);
    } else {
      setPw(value);
    }
  };
  const postLoginData = async () => {
    if (isPendingRequest) return;
    const body = {
      email: id,
      password: pw,
    };
    try {
      setIsPendingRequest(true);
      const res = await instance.post("/auth/login/", body);
      if (res.status === 200 && !isPendingRequest) {
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("user_id", res.data.user.pk);
        //      navigate(-1);
        navigate("/");
      } else {
        alert("아이디나 비번이 틀렸어요!");
      }
    } catch (err) {
      alert("아이디나 비번이 틀렸어요!");
    } finally {
      setIsPendingRequest(false);
    }
  };
  useEffect(() => {
    idRef.current.focus();
  }, []);
  return (
    <div className="Login">
      <h1>
        <span className="orange">PET:</span>
        <span className="yellow">EVER</span>
      </h1>
      <div className="id">
        <input
          placeholder="이메일을 입력해주세요."
          value={id}
          name="id"
          onChange={onChangeField}
          ref={idRef}
        />
      </div>
      <div className="pw">
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          name="pw"
          onChange={onChangeField}
        />
      </div>
      <button className="E-login" onClick={postLoginData}>
        이메일로 로그인
      </button>
      <div className="bottom">
        <div className="pf">PETEVER가 처음이시라면</div>
        <button className="su" onClick={onClickSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;

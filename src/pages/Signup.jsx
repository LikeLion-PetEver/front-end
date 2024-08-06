import React, { useState, useRef, useEffect } from "react";
import { instance } from "../api/instance";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isPendingRequest, setIsPendingRequest] = useState(false);

  const emailRef = useRef();
  const navigate = useNavigate();

  const onChangeField = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const postSignupData = async () => {
    if (isPendingRequest || password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const body = {
      email: email,
      password1: password,
      password2: confirmPassword,
      username: username,
    };
    try {
      setIsPendingRequest(true);
      const res = await instance.post("/auth/registration/", body);
      if (res.status === 201) {
        alert("회원가입이 완료되었습니다!");
        navigate("/login");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (err) {
      alert("회원가입에 실패했습니다.");
    } finally {
      setIsPendingRequest(false);
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="Signup">
      <h1>회원가입</h1>
      <div className="inputField">
        <p>아이디</p>
        <input
          placeholder="이메일을 입력해주세요."
          value={email}
          name="email"
          onChange={onChangeField}
          ref={emailRef}
        />
      </div>
      <div className="inputField">
        <p>이름</p>
        <input
          placeholder="사용자 이름을 입력해주세요."
          value={username}
          name="username"
          onChange={onChangeField}
        />
      </div>
      <div className="inputField">
        <p>비밀번호</p>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          name="password"
          onChange={onChangeField}
        />
      </div>
      <div className="inputField">
        <p>비밀번호 확인</p>
        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          value={confirmPassword}
          name="confirmPassword"
          onChange={onChangeField}
        />
      </div>
      <button className="button" onClick={postSignupData}>
        회원가입
      </button>
      <div className="bottom">
        <div className="pf">이미 계정이 있으신가요?</div>
        <button className="su" onClick={() => navigate("/login")}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default Signup;

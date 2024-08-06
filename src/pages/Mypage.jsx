import React, { useState, useEffect } from "react";
import Tab from "../components/Mypage/TypeTab";
import Posts from "../components/Mypage/Posts";
import { instance } from "../api/instance";

import "../styles/mypage/Background.css"; // 배경화면(그레이컬러) 임포트
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [activeTab, setActiveTab] = useState("all"); // 현재 활성화된 탭
  const [posts, setPosts] = useState([]); // 해당 탭의 Data 가져오기(API)
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    } else {
      alert("로그인 후 이용해주세요.");
      nav("/login");
    }
  }, []);
  useEffect(() => {
    setPosts([]);

    const fetchPosts = async (tab) => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Access token is missing");
        return;
      }

      let endpoint; // tab에 따라서 endpoint 설정
      switch (tab) {
        case "answer":
          endpoint = "/posts/answer/";
          break;
        case "letter":
          endpoint = "/posts/letter/";
          break;
        case "all":
        default:
          endpoint = "/posts/allposts/";
          break;
      }

      try {
        const response = await instance.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          let data = response.data;
          console.log(data);  
          // 엔드포인트에 따른 데이터 가공
          if (tab === "all") {
            data = data.map((post) => ({
              ...post,
              isQuestion: post.type === "answer",
              date: new Date(post.created_at).toLocaleDateString("ko-KR"),
            }));
          } else {
            data = data.map((post) => ({
              ...post,
              type: tab,
              isQuestion: tab === "answer",
              date: new Date(post.created_at).toLocaleDateString("ko-KR"),
            }));
          }

          setPosts(data); // 이전 데이터를 덮어쓰기
        } else {
          console.error("Failed to load posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    fetchPosts(activeTab);
  }, [activeTab]);

  return (
    <div className="mypage-section">
      <div className="mypage-typecheck-button">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Posts posts={posts} />
    </div>
  );
};

export default Mypage;

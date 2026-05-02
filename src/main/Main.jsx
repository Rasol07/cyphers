// 라우터 기능 구현
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

import Ability from "./tabs/Ability.jsx";
import Skill from "./tabs/Skill.jsx";
import Eclipse from "./tabs/Eclipse.jsx";
import Report from "./tabs/Report.jsx";
import Document from "./tabs/Document.jsx";
import Content from "./tabs/Content.jsx";
import Voice from "./tabs/Voice.jsx";

export default function App() {
  
  document.title = "탐미자 크리스 이클립스";

  const [showButton, setShowButton] = useState(false);

  // 스크롤 이벤트
  useEffect(() => {
    const handleShowButton = () => {
      if(window.scrollY > 800) {
        setShowButton(true);
      }
      else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    }
  }, []);

    const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
    }
  
 
  return (
    <div id="wrap" className="sub">
        {/* // 상단배너 */}
        <Header />

        <div id="characContent" className="container">
        {/* 좌측 메뉴 */}
        <Sidebar />
        {showButton && (
           <a 
              className="ecl_top ecl_topfix"
              onClick={scrollToTop}
            >

           </a>
        )}
        {/* 본문 */}
        <main className="content">
            <Routes>
                <Route path="/" element={<Navigate to="ability" />} />
                <Route path="ability" element={<Ability />} />
                <Route path="skill" element={<Skill />} />
                <Route path="eclipse" element={<Eclipse />} />
                <Route path="report" element={<Report />} />
                <Route path="document" element={<Document />} />
                <Route path="content" element={<Content />} />
                <Route path="voice" element={<Voice />} />
            </Routes>
        </main>
        </div>
    </div>
  );
}
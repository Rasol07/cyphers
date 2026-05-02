import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainApp from "./main/Main.jsx"; // 이름을 MainApp으로 가져옴

export default function App() {
  return (
    <Router>
      <Routes>
        {/* / 로 접속하면 /main으로 보냄 */}
        <Route path="/" element={<Navigate to="/main" replace />} />
        
        {/* /main으로 시작하는 모든 경로는 MainApp에서 처리 */}
        <Route path="/main/*" element={<MainApp />} /> 
      </Routes>
      
      <footer className="footer">
        해당 웹페이지는 공식 사이퍼즈 홈페이지의 모작으로 저작권은 사이퍼즈에 있습니다. <br />
        © 2011 NEOPLE Inc. All Rights Reserved.
      </footer>
    </Router>
  );
}
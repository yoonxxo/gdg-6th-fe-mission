import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {Outlet} from "react-router-dom"; //컴포넌트 렌더링시 라우터에서 설정한 컴포넌트를 보여주는 역할


const App = () => {
  return (
    <div className="h-screen flex flex-col w-full">
      <Navbar />
      <div className="w-full border-b border-gray-200"/> {/* 구분선 */}
      <div className="flex flex-col grow w-full max-w-xl items-center mx-auto pt-16 pb-8">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
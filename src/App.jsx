import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {Outlet} from "react-router-dom"; //컴포넌트 렌더링시 라우터에서 설정한 컴포넌트를 보여주는 역할


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
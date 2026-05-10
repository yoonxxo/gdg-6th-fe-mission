import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white">
            <img 
                src="/gdg-logo.svg" 
                alt="GDG Logo" 
                className="w-10 cursor-pointer" 
                onClick={() => navigate("/")} />
            <div className="flex gap-3">
                <button 
                    className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                    onClick={()=>{
                        navigate("/category");
                        }}>카테고리 필터링</button>
                <button 
                    className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                    onClick={()=>{
                        navigate("/price");
                        }}>가격범위 필터링</button>
                <button 
                    className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100"
                    onClick={()=>{
                        navigate("/sort");
                        }}>상품 정렬</button>
            </div>
            <button 
                className="border px-2 py-1 text-sm rounded-md text-blue-500 hover:bg-blue-50">
                    관리자
            </button>
        </nav>

    )
}

export default Navbar

import styles from "./Navbar.module.css";
import Button from "./common/Button";  
import {useNavigate, useLocation} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isAdminPage = location.pathname === "/admin";

    return (
        <nav className={styles.nav}>
            <img 
                src="/gdg-logo.svg" 
                alt="GDG Logo" 
                className="w-10 cursor-pointer" 
                onClick={() => navigate("/")} 
            />
            {!isAdminPage && (
                <div className="flex gap-3">
                    <button className={styles.navButton}
                        onClick={()=>{
                            navigate("/category");
                            }}>카테고리 필터링</button>
                    <button className={styles.navButton}
                        onClick={()=>{
                            navigate("/price");
                            }}>가격범위 필터링</button>
                    <button className={styles.navButton}
                        onClick={()=>{
                            navigate("/sort");
                            }}>상품 정렬</button>
                </div>
            )}
            {isAdminPage ? (
                <Button varients="primary"
                    onClick={()=>{
                        navigate("/");
                    }}>
                    소비자
                </Button>
            ) : (
                <Button varients="primary"
                    onClick={()=>{
                        navigate("/admin");
                    }}>
                    관리자
                </Button>
            )}
        </nav>

    )
}

export default Navbar

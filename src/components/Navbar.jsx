function Navbar(){
    return (
        <nav className="navbar">
            <img src="/gdg-logo.svg" />
            
            <div className="buttons">
                <button>카테고리</button>
                <button>가격범위</button>
                <button>상품 정렬</button>
                
                <button>관리자</button>
            </div>
        </nav>
        
    );
}

export default Navbar;
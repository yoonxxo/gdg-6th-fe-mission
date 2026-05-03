#### 컴포넌트란?
사용자 인터페이스(UI)를 쪼개서 관리하기 쉽게 만드는 방법이다.

아래는 컴포넌트 코드 예시이다. (Content.jsx)
function Content(){
    return (
        <div className="content">

            <div className="search_bar">
                <input type="text" placeholder="상품 검색..." />  //사용자에게서 입력받는 검색바
                <button>검색</button> //검색 버튼
            </div>

            <img src="/gdg-logo.svg" alt="GDG Logo" />  //로고 이미지
            <p>검색 결과가 없습니다.</p>
        </div>
    )
}
export default Content;

아래는 컴포넌트를 불러오는 코드 예시이다. (App.jsx)
import Content from "./components/Content";

function App(){
  return (
    <div className="app">
      <Content />
    </div>
  );
}
export default App

#### 왜 컴포넌트로 나누어야 하는가?
1. 재사용이 가능하며 유지보수가 쉽다.
2. 컴포넌트 별로 관리할 수 있어, 찾고 수정하기가 쉽다.
3. 역할이 분리되어있어 구조가 명확해진다.

#### 어떤 기준으로 컴포넌트를 나누는 것이 좋은가?
1. 역할과 의미에 따라
-> 하나의 컴포넌트는 하나의 일만 한다.
2. 반복되는 경우 분리
-> 같은 UI가 여러번 나오면 컴포넌트로 만들어 재사용이 가능하게 한다.
3. 코드가 너무 길어지면 분리

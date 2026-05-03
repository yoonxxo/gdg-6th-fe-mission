#### 브라우저의 동작 방식
1. HTML 파일 열기
2. HTML문서 파싱하다가 script 발견하면 script 실행하고 이어서 파싱
3. DOM 트리 만들기
*DOM(Document Object Model): HTML 태그 하나하나를 자바스크립트로 컨트롤할 수 있도록 만든 객체 체계. 트리구조이다.
4. 화면에 표시하기

#### React
-준비과정
1. vs code 터미널에 'npx create-react-app week3(폴더명)' 입력(npm을 통해서 react를 하기위한 파일들을 받아오기)
2. cd week3, npm start 입력

-태그마다 JS 파일을 만들고 개개인은 그 파일만 작업한 이후에 HTML에 끼워넣자. (JS로 부품(컴포넌트) 만들기)
1. 새로운 태그를 만든다.
2. 태그에 데이터를 넣는다.
3. 새로운 태그를 HTML에 추가한다.
4. HTML를 화면에 업데이트한다. (렌더링)

-JSX: JS에 HTML을 넣고 번역기를 사용하여 원래의 긴 코드로 바꾼다. 자바스크립트 확장팩. 
-SPA(Single Page Application): 새로고침 없이 화면 전환
-React는 이러한 JS, JSX, SPA를 사용한 라이브러리이다.
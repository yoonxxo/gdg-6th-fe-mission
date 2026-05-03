#### HTML에서 JS로 마이그레이션
-button tag
<button id="아이디">버튼이름</button>
태그에 id를 부여하여 식별한다.

마이그레이션: script 태그의 코드의 분량이 많을 때 html에서 javascript 파일을 분리하여 따로 만든다.

<script>의 src
: 외부 스크립트의 URI를 지정한다. 이는 문서 내에 스크립트를 직접 포함하는 대신 사용할 수 있다.
<script src="./app.js"></script>

#### JavaScript
HTML과 달리 같은 페이지 내에서 다른 정보를 볼 수 있도록 한다. 웹 문서를 동적으로 만든것

script 태그는 </body>앞에 작성해야 한다.

<브라우저의 동작 방식>
1. HTML 파일 열기
2. HTML문서 파싱하다가 script 발견하면 script 실행하고 이어서 파싱
3. DOM 트리 만들기
4. 화면에 표시하기

그래야 화면이 늦게 뜨고, 순서가 꼬이는 문제가 안생긴다.

#### V8, 웹앱, NodeJS
크롬과 V8 엔진의 등장으로 Web Aapplication을 만들 수 있게 되었다. 브라우저 밖에서도 JS코드를 돌릴 수 있는 NodeJS와 노드로 만든 라이브러리를 공유하는 npm이 탄생하게 되었다.
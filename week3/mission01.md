## 서버와 통신하기

### API(Application Programming Interface)

: 클라이언트와 서버 간의 데이터를 주고받는 통로 역할을 한다. 서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인페터이스이다.

```jsx

fetch('https://jsonplaceholder.typicode.com/users1/1/todos') //fetch는 서버 데이터를 받아오는 JS표준 API 함수
    .then((response) => response.json())
    .then((json) => console.log(json));
```

여기서 json이란? JavaScript Object Notation. JS 객체 문법을 따르는 문자 기반의 데이터 형식을 말한다. 

JSON Placeholder? 가짜 데이터를 API형태로 제공하는 서버이다. 
https://jsonplaceholder.typicode.com/


### useEffect

: 컴포넌트가 처음 화면에 나타날 때나 특정 값이 변할 때 실행할 작업을 지정하는 Hook이다. 주로 데이터 가져오기, 구독 설정 또는 타이머 설정 등의 작업에 사용된다. 

useEffect는 외부의 효과를 렌더링과 분리하기 위해 존재한다. 예를 들어, API연결을 통해 데이터를 불러오고(fetch) 싶은 경우,

```jsx
useEffect(()=> {
    	fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
          .then((response) => response.json())
          .then((json) => setTodos(json));
    }, []);
```

위 코드처럼 fetch와 같은 외부 작업은 useEffect 내부에서 실행하는 것이 적절하다. 만약 컴포넌트 함수 본문에서 직접 fetch를 호출하면 state가 업데이트(내부 로직)될 때마다 컴포넌트가 다시 렌더링되고, 그때마다 fetch가 다시 실행되어 무한 반복이 발생할 수 있다. `[]`를 의존성 배열로 넣으면 최초 렌더링 시 한 번만 실행된다.


### 비동기 처리

: 오래 걸리는 작업이 끝날 때까지 기다리지 않고, 다음 코드를 먼저 실행하는 방식

API요청 시 fetch함수는 대표적인 비동기 작업이다. fetch()가 서버에서 데이터를 받아오는데 시간이 걸리니까, JS는 그동안 다음 코드를 먼저 실행한다.

```jsx
console.log('fetch 시작');
fetch("https://jsonplaceholder.typicode.com/users/1/todos")
	.then((response) => response.json()) 
	.then((json) => console.log(json));
console.log('fetch 종료');
```

위 코드에서는 fetch 시작 → fetch 종료 → fetch 데이터 출력의 순서로 실행된다.

**fetch 요청을 보내고, 브라우저(Web API)가 응답을 받아오면 then 코드를 실행한다.** 브라우저(Web API)가 네트워크 요청을 처리하는 동안, JS는 다음 코드를 계속 실행한다.

`https://jsonplaceholder.typicode.com` 에서 보내는 데이터인데, `/users/1/todos` user데이터들 중 ID가 1번인 Todo 데이터들을 말한다.

`.then((response) => response.json())`  응답이 오면, 그 JSON 데이터를 JS가 사용할 수 있는 객체(배열)의 형태로 변환

`.then((json) => console.log(json));`  변환된 데이터를 콘솔에 출력한다.

### 리팩토링

: 결과의 변경 없이 코드의 구조를 재조정하는 작업을 말한다. 코드를 최대한 간결하게 바꾸는 작업이다.

[리액트 extensions 단축어- rfce, rafce, usss, uef]
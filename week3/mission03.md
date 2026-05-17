## 원격 API호출하기 1: fetch( )

```jsx
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

fetch 함수는 첫번째 인자로 url, 두번째 인자로 옵션 객체를 받고 Promise 타입의 객체를 반환한다. API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject한다. 

옵션 객체에는 HTTP method, 요청 header, 요청 body 등을 설정하고, response 객체로부터는 status, 응답 header, 응답 body 등을 읽어온다.

### GET 호출

`fetch()` 함수는 디폴트로 GET 방식으로 작동하고 GET 방식은 요청 body를 받지 않으므로 옵션 인자가 필요 없다.

```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

단순히 특정 API에 저장된 데이터를 보여주는 웹페이지의 경우는 GET 방식의 HTTP통신으로도 충분하다. 

### POST 호출

원격 API에서 관리하고 있는 데이터를 생성해야 한다면 요청 body를 포함할 수 있는 POST 방식의 HTTP 통신이 필요하다. 옵션 객체 설정이 필수적이다.

*PUT 호출은 method만 “PUT”으로 바꾸는 것 말고는 POST 방식과 똑같다. 

```jsx
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", //JSON 포맷 사용
  },
  body: JSON.stringify({ //JSON 포맷으로 직렬화
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then((response) => console.log(response));
/*.then((response) => response.json())
  .then((data) => console.log(data));*/
```

```jsx
Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts", redirected: false, status: 201, ok: true, …}
///{title: "Test", body: "I am testing!", userId: 1, id: 101} 응답 전문을 객체 형태로 얻을 수 있다. 
```

### DELETE 호출

보낼 데이터가 없으므로 headers와 body옵션은 필요없다.

```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

모듈화해서 사용하기

```jsx
async function post(host, path, body, headers = {}) {
  const url = `https://${host}/${path}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
}

post("jsonplaceholder.typicode.com", "posts", {
  title: "Test",
  body: "I am testing!",
  userId: 1,
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

## 원격 API 호출하기 2: Axios

: Promise API를 활용하는 HTTP 비동기 통신 자바스크립트 라이브러리이다. 브라우저와 Node.js에서 작동한다. 

### Axios의 장점

- 요청/응답을 JSON으로 자동 처리한다.
- AbortController없이도 API 요청 취소가 가능하다.
- status 코드 기반 오류 구분이 쉽다
- 요청/응답 완료 전에 가로채서 공통 로직을 삽입할 수 있다

### Axios의 사용법

`npm install axios`  설치

- GET: 서버에서 데이터를 가져와서 보여주기
    
    `axios.get(url, [ , config])`
    
    ```jsx
    import axios from 'axios';
    
    axios.get('/api/users')
    	.then((res) => {
        	console.log(res.data);	// data from server
        })
        .catch((err) => {
        	console.error(err);	// errror
        });
    ```
    
- POST: 새로운 리소스 생성
    
    `axios.post("url", { data 객체 }, [, config])`
    
    ```jsx
    axios.post('/api/login', {
    	email: 'test@example.com'
        password: '1234'
    })
    .then((res) => {
    	console.log(res.data);	// login success
    })
    .catch((err) => {
    	console.error(err);	// login fail
    })
    ```
    
- DELETE: 내용 삭제
    
     `axios.delete(url, [ , config])`
    
    ```jsx
    axios.delete("/example/list/13").then(function(res) {
    	console.log(res);
    }).catch(function(ex) {
    	throw new Error(ex)
    }
    ```
    
- PUT: DB에 저장된 내용 수정
    
    `axios.put(url[ , data[ , config])`
    
    ```jsx
    import axios from 'axios';
    
    const updateUser = async () =>{
    	try {
        	const response = await axios.put('/api/users/123', {
            	name: 'bob',
                email: 'bob@example.com',
            });
            
            console.log('수정된 데이터: ', response.data);
        } catch(error) {
        	console.error('error', error);
        }
    };
    ```

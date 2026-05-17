## 동기처리 **(Synchronous)**

: 작업 완료 여부를 따져 순차대로 처리하는 방식이다. 시스템의 전체적인 효율이 저하되고, 대규모 트래픽이 생길 경우 안정적으로 동작하기 어렵다.

## 비동기처리 **(Asynchronous)**

작업 완료를 기다리지 않고 다음 작업을 먼저 실행하여 자원을 효율적으로 사용할 수 있는 방식이다. 비동기 처리 방식에는 callback함수 호출, promise, Async/Await가 있고,  예로 Web API, Ajax, setTimeout 등이 있다. 

### 1. Callback 함수

: 다른 함수에 인자로 전달되어, 특정 시점에 나중에 실행되는 함수

<callback함수의 여러 형태>

```jsx
const message = function() {
    console.log("This message is shown after 3 seconds");
} //여기서 message는 콜백함수이다.

setTimeout(message, 3000); //3초가 지난 후 message함수 호출
```

```jsx
setTimeout(function() {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

```jsx
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

비동기 요청에 대한 응답이 오면 콜백함수를 호출한다. 이때 Callback Hell 현상이 나타날 수 있다. 

**Callback Hell**: 비동기 처리를 위해 콜백 패턴을 사용하면, 처리 순서를 보장하기 위해 여러 개의 콜백 함수가 중첩되어 복잡도가 높아지는 현상을 말한다. 

단점: 가독성이 나쁘고, 오류 발생시 처리가 곤란하다. 비동기 여러개를 처리하기 어렵다.

### 2. Promise

: 나중에 결과를 주겠다는 약속. 콜백패턴이 가진 단점을 보완하며, 비동기 처리 시점을 명확하게 표현할 수 있다. 

```jsx
// Promise 객체의 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('result'); //result는 Promise 객체의 후속 처리 메소드로 전달
  }
  else { /* 비동기 작업 수행 실패 */
    reject('failure reason'); //오류 메세지는 Promise 객체의 후속처리 메소드로 전달
  }
});
```

Promise는 비동기 처리가 성공하였는지 또는 실패하였는지 등의 상태(state) 정보를 갖는다.

- `pending`: 비동기 처리가 아직 수행되지 않은 상태 (기다리는 중…)
- `fulfilled`: 성공
- `rejected`: 실패
- `settled`: 끝남 (성공 or 실패)

**후속 처리 메소드**

- `then()`: then 메소드는 두 개의 콜백 함수를 인자로 전달 받는다. 첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출되고 두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.**then()은 Promise를 반환한다**
- `catch()`: 예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출된다. catch 메소드는 Promise를 반환한다.

**Promise 체이닝**

Promise는 후속 처리 메소드인 `then`이나 `catch`로 **메소드를 체이닝(chainning)**하여 여러 개의 Promise를 연결하여 사용할 수 있다. 이로써 콜백 헬을 해결한다. then 메소드는 Promise를 반환하고, Promise는 then 메소드를 사용한다.

```jsx
fetch('https://jsonplaceholder.typicode.com/todos/1') 
  .then((response) => {
    return response.json(); 
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((err) => {
    throw err; 
  });

console.log('Hello');
```

### 3. Async와 Await

```jsx
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

**async**: async가 붙은 함수는 반드시 promise를 반환하고, promise가 아닌 것은 resolved promise로 감싸서 반환한다. 

```jsx
async function f() {
  return 1; //또는 return Promise.resolve(1)
}

f().then(alert); // 1
```

**await**: promise가 처리될 때까지 함수 실행을 기다리게 만들고, promise가 처리되면 그 결과와 함께 실행이 재개된다. promise가 처리되는 동안 엔진은 다른 일을 수행한다. 

장점: .then을 사용하지 않고도 대기 처리를 할 수 있다.  promise.then 보다 가독성이 좋다. 

```jsx
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // promise가 처리될 때까지 대기
  //promise의 result값이 변수 result에 할당된다.

  alert(result); // "완료!"
}

f();
```

**async await 에러 제어**: try…catch. 에러 발생 시 catch 블록으로 넘어간다. 

```jsx
async function f() {

  try {
    let response = await fetch('http://유효하지-않은-주소');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

문법 제약 때문에 `async`함수 바깥의 최상위 레벨 코드에선 `await`를 사용할 수 없기 때문에 관행처럼 `.then .catch`를 추가해 최종 결과나 처리되지 못한 에러를 다룬다.

## Blocking과 Non-Blocking

- 동기/비동기는 처리 순서에 관한 것이라면, 논블로킹은 병렬 실행과 관련된 개념이다.
- **Blocking:** 작업이 끝날 때까지 **대기**한다. caller가 callee에게 제어권을 넘긴다.
- **Non-Blocking:** 작업이 다 끝나지 않아도 **대기하지 않고**, 다른 작업을 수행한다. caller가 제어권을 계속 가지고 있는다.

*(동기/비동기) + (블로킹/논블로킹) 조합을 선택하는 것이 프로그램의 성능과 효율성을 높일 수 있기 때문에 중요하다.*

1. **Sync + Blocking**
    
    : 다른 작업이 진행되는 동안 자신의 작업을 처리하지 않고 (Blocking), 다른 작업의 완료 여부를 바로 받아 순차적으로 처리하는 (Sync) 방식
    
    작은 데이터를 처리하거나 파일 하나를 읽고 쓰는 경우, 앞의 작업의 결과가 뒤의 작업에 영향을 주는 경우에 사용한다. 
    
2. **Async + Non-Blocking** 
    
    다른 작업이 진행되는 동안에도 자신의 작업을 처리하고(Non Blocking), 다른 작업의 결과를 바로 처리하지 않아 작업 순서가 지켜지지 않는 (Async) 방식. Promise, setTimeout() 등이 있다.
    
    작업량이 많거나 시간이 오래 걸리는 작업을 처리해야 하는 경우. 예를 들면 웹 사이트에서 파일을 다운로드 할 때 이 방식을 사용한다. 
    
3. **Sync + Non-Blocking**
    
    다른 작업이 진행되는 동안에도 자신의 작업을 처리하고 (Non Blocking), 다른 작업의 결과를 바로 처리하여 작업을 순차대로 수행하는 (Sync) 방식. 이때 다른 작업이 끝났는지 계속 확인한다. 게임 로딩 스크린이나 파일 다운로드시 나타나는 다운로드 진행바가 그 예이다. 
    
    ```jsx
    // Runnable 인터페이스를 구현하는 클래스 정의
    class MyTask implements Runnable {
        @Override
        public void run() {
            // 비동기로 실행할 작업
            System.out.println("Hello from a thread!");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            // Thread 객체 생성
            Thread thread = new Thread(new MyTask());
    
            // 스레드 실행
            thread.start();
    
            // Non-Blocking이므로 다른 작업 계속 가능
            System.out.println("Main thread is running...");
    
            // Sync를 위해 스레드의 작업 완료 여부 확인
            while (thread.isAlive()) {
                System.out.println("Waiting for the thread to finish...");
            }
            System.out.println("Thread finished!");
            
            System.out.println("Run the next tasks");
        }
    }
    ```
    
4. **Async + Blocking**
    
     다른 작업이 진행되는 동안 자신의 작업을 멈추고 기다리는 (Blocking), 다른 작업의 결과를 바로 처리하지 않아 순서대로 작업을 수행하지 않는 (Async) 방식. 실무에서는 잘 쓰지 않으며 Sync+Blocking과 별 차이가 없다.
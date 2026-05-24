### 리팩토링

리팩토링은 결과의 변경 없이 코드의 내부 구조를 개선하는 작업이다.
코드의 가독성, 유지보수성, 재사용성을 높이기 위해 구조를 정리하는 과정이다.

### Custom Hook 만들기

- 같은 로직이 여러 컴포넌트에서 중복되는 것을 피하기 위해 내가 직접 만든 Hook을 커스텀 훅이라고 한다.
- 예를 들어 여러 컴포넌트에서 useState와 useEffect를 사용해 데이터를 fetch하는 동일한 로직을 반복해서 작성해야 한다면, 이를 useFetchUser라는 커스텀 훅으로 만들어 필요할 때마다 재사용할 수 있다. 커스텀 훅의 이름은 React의 규칙에 따라 use로 시작해야 한다.

다음 코드는 useFetchUser 커스텀 훅을 만든 것이다.

```js
import { useEffect, useState } from "react";

function useFetchUser(userId) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [userId]);

  return todos;
}

export default useFetchUser;
```

fetch해오고 싶을 땐 `const todos = useFetchUser(1)` 이렇게 하면 된다.

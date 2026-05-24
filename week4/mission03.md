## 상태관리와 라이브러리

### 상태란?

상태(State)란 **시간에 따라 변경될 수 있는 데이터**를 의미한다.

웹 애플리케이션에서 상태는 사용자의 행동이나 이벤트에 따라 값이 변경될 수 있는 데이터이다.

예를 들면:

- 로그인 여부 (`isLoggedIn`)
- 사용자 정보 (`user`)
- 장바구니 목록 (`cartItems`)

웹 애플리케이션에서는 **실제 데이터와 화면(UI)이 항상 일치해야 하므로 상태 관리가 중요하다.**

### 기존의 상태 관리 방식

기존 JavaScript에서는 상태가 변경되면 개발자가 직접 DOM을 조작하여 UI를 업데이트해야 했다.

```jsx
count = count + 1;
box.innerText = count;
```

즉, 상태 변경 후 DOM 직접 업데이트 방식이었다.

이 방식은 간단한 애플리케이션에서는 문제가 없지만, 규모가 커질수록 문제가 발생한다.

예를 들어 상태가 변경되면:

- 화면의 숫자 변경
- 버튼 활성화 여부 변경
- 다른 컴포넌트 UI 변경
- 서버 데이터 동기화

등 여러 작업이 함께 일어난다.

이처럼 하나의 상태 변화가 여러 동작을 연쇄적으로 발생시키는 현상을 **Cascading Effects(연쇄 효과)** 라고 한다.

기존 방식의 문제점은 다음과 같다.

1. 상태 업데이트 로직이 얽히고, 일관성이 없다.

   : 상태를 변경하는 로직과 UI를 변경하는 로직이 뒤섞여 코드가 복잡해진다.

   ```jsx
   updateCount() {
     count++; //상태 업데이트
     updateBoxUI();
     updateButtonUI();
     saveToServer(); //UI 변경
   }
   ```

2. 테스트가 어려워진다.

   : 상태만 테스트하고 싶어도 DOM 조작 코드가 함께 실행된다.

3. 유지보수가 어려워진다.

   : 새로운 UI 요소가 추가되면, 상태 변경 시 업데이트해야 할 코드도 계속 늘어난다.

### 프론트엔드 라이브러리가 해결한 방식

프론트엔드 라이브러리는 상태가 업데이트 되면 DOM 노드에 알아서 반영시킨다. 따라서 개발자는 DOM을 조작하지 않아도 되고, 상태만 업데이트하면 된다.

### 상태관리의 목표

: 상태를 예측 가능하게 관리하는 것

- 언제 상태가 변경되는지
- 어디서 상태가 변경되는지
- 왜 상태가 변경되는지

를 명확하고 일관성 있게 만드는 것이다.

상태 변화 흐름이 예측 가능해야 디버깅과 유지보수가 쉬워진다.

### 상태 변경 방식

상태를 변경하는 방식은 크게 두 가지로 나눌 수 있다.

1. **Direct 방식**

   : 상태를 직접 수정하는 방식

   예: Recoil, Jotai, 리엑트에서 useState

직관적이고 사용이 쉽지만, 상태 변경 경로가 많아지면 추적이 어려워질 수 있다.

1. **Indirect 방식**

   : 이벤트(Action)를 발생시키고, 정의된 로직을 통해 상태를 변경하는 방식

   예: Redux, 리액트에서 useReducer

직접 상태를 바꾸지 않고 이벤트를 전달만 한다.

장점:

- 상태 변화 흐름이 명확하다.
- 디버깅이 쉽다.
- 예측 가능성이 높다.

그러나 코드가 복잡해질 수 있다는 단점이 있다.

리액트에서 상태를 관리할 수 있는 라이브러리나 내장 API는 다양하다. 이들은 상태의 특성에 따라 어떤 방법을 사용할 지 구분할 수 있다.

## Context API

### Context란?

React에서 데이터를 컴포넌트 트리 깊숙한 곳까지 **props를 일일이 전달하지 않고 공유할 수 있게 해주는 기능**이다.

React에서는 기본적으로 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 `props`를 사용한다.

예를 들어 어떤 데이터가 가장 아래에 있는 컴포넌트에서 필요하다면,

```
App → Profile → Header → Avatar
```

이런 구조에서 `Avatar`가 데이터를 사용하기 위해 중간 컴포넌트들이 모두 props를 전달해야 한다. 즉, 데이터가 실제로 필요하지 않은 중간 컴포넌트도 단순히 전달만 하기 위해 props를 받아야 한다는 것이다.

이러한 현상을 **Prop Drilling**이라고 한다.

이런 방식의 문제점은

1. props 전달이 반복되어 코드가 길어진다.
2. 컴포넌트 구조가 깊어질수록 관리가 어려워진다.
3. 데이터가 어디서 전달되는지 추적하기 어려워진다.
4. 불필요한 props 전달이 많아진다.

이 문제를 해결하기 위해 사용하는 것이 Context API이다.

**Context 의 동작 방식**

: Context API는 컴포넌트 트리에서 데이터를 공유할 수 있는 **공유 공간**을 만든다.

부모 컴포넌트에서 데이터를 제공하면, 하위 컴포넌트는 중간 단계의 props 전달 없이 필요한 데이터를 직접 가져올 수 있다.

기존 방식: **부모 → 자식 → 자식 → 자식 (props 전달)**

Context 방식: **부모가 데이터 제공 → 필요한 자식이 직접 사용**

### Context 사용 방법

1. Context 생성

공유할 Context를 만든다.

```jsx
import { createContext } from "react";

export const ThemeContext = createContext("ligth");
```

2. Provider로 값 제공

상위 컴포넌트에서 데이터를 제공한다.

```jsx
import {ThemeContext} from './ThemeContext.js';

<ThemeContext value={theme}> //<ThemeContext.provider value={theme}>도 가능
	<App/>
</ThemeContext>
```

3. useContext로 값 사용

하위 컴포넌트에서 데이터를 가져온다.

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

const theme = useContext(ThemeContext); //컴포넌트 안에서 사용
```

이때 Context는 가장 가까운 Provider의 값을 가져온다.

### Context를 언제 사용하는가?

Context API는 **여러 컴포넌트에서 공유하지만 자주 변경되지 않는 상태**를 관리할 때 적합하다.

- 로그인 사용자 정보
- 다크모드 설정
- 언어 설정
- 앱 전체 설정값

다음과 같은 경우에는 context를 사용하는 것이 비효율적이다.

1. 상태 변화 흐름을 추적하기 어렵다.

Redux처럼 상태 변경 규칙이 명확하게 관리되는 구조가 아니기 때문에 규모가 커지면 상태 흐름을 파악하기 어려울 수 있다.

1. 상태가 자주 변경되면 비효율적이다.

Context 값이 변경되면 해당 Context를 사용하는 컴포넌트들이 다시 렌더링된다. 따라서 자주 변경되는 상태에서는 성능 문제가 발생할 수 있다.

1.  Context에 의존적인 컴포넌트가 된다.

컴포넌트가 특정 Context에 의존하면 Provider 없이 독립적으로 재사용하기 어려워질 수 있다.

### Context API vs 상태관리 라이브러리

Context API는 props drilling 문제를 해결하는 것이 목적이다.

반면 Zustand, Redux 같은 상태관리 라이브러리는 상태 변경 로직과 흐름을 체계적으로 관리하는 것이 목적이다.

따라서 Context API도 전역 상태 공유에 사용할 수 있지만,
복잡한 상태 변경 로직 관리까지 전문적으로 해결하는 도구는 아니다.

## 상태관리 라이브러리 종류

1. **Redux**

: 가장 유명하고 오래된 상태관리 라이브러리이다. 상태 변경 흐름이 명확하며 대규모 프로젝트에서 많이 사용한다. 다만 기본 Redux는 코드 양이 많고 설정이 복잡하여 러닝커브가 있어서, 최근에는 Redux Toolkit을 함께 사용하는 경우가 많다.

`action → dispatch → reducer → state 변경`

1. **Recoil**

Meta(Facebook)가 만든 상태관리 라이브러리이다. React Hook 기반으로 사용할 수 있어 React 문법 친화적이다. atom 이라는 상태 단위를 만들어, 업데이트와 구독이 가능하게 하였다. 아톰이 업데이트되면, 해당 아톰을 구독하고 있는 컴포넌트들은 리렌더링이 일어난다.

```jsx
const cartState = atom({
  key: "cartState",
  default: [],
});
```

```jsx
const [cart, setCart] = useRecoilState(cartState); //사용
```

1. **Jotai**

Recoil과 비슷한 atom 기반 라이브러리이나, 더 가볍고 단순하다. 생태계가 Redux보다 작고, 팀 프로젝트에서 표준적으로 선택되는 경우는 상대적으로 적다.

### Zustand

Zustand는 독일어로 **"상태(state)"** 를 의미하는 이름을 가진 React 상태관리 라이브러리이다.

Redux의 복잡한 구조와 Context API의 한계를 보완하기 위해 만들어졌으며, **가볍고 간단한 전역 상태 관리 라이브러리**로 많이 사용된다.

Flux 패턴의 아이디어를 기반으로 하지만 Redux처럼 복잡한 action, reducer, dispatch 구조를 강제하지 않아 훨씬 간단하게 사용할 수 있다.

### Zustand의 동작 방식

Zustand는 **발행/구독(Pub/Sub) 모델**을 기반으로 동작한다.

- 상태를 변경하면 (publish)
- 해당 상태를 구독하고 있는 컴포넌트들에게 변경 사실을 알린다 (subscribe)

그래서 필요한 상태를 구독한 컴포넌트만 업데이트된다.

Context API처럼 상태가 바뀔 때 관련 컴포넌트 전체가 다시 렌더링되는 방식보다 효율적이다.

따라서 Zustand는 **간단한 전역 상태 관리**가 필요한 경우에 적합하다.

### Zustand의 특징

1. 간결한 API

`create()` 함수 하나로 store를 만들 수 있다.

Redux처럼 action, reducer, dispatch를 따로 만들 필요가 없다. 즉, **보일러플레이트 코드가 거의 없다.**

1. Provider 없이 사용 가능

Context API와 달리 Zustand는 별도의 Provider가 필요 없다.

store를 만든 뒤 필요한 컴포넌트에서 import해서 Hook처럼 바로 사용할 수 있다. 이 덕분에 설정이 간단하고 러닝커브가 낮다.

1. 성능 최적화

Zustand는 selector를 통해 필요한 상태만 구독할 수 있다.

```jsx
const bears = useBearStore((state) => state.bears);
```

이렇게 특정 상태만 가져오면, 해당 값이 변경될 때만 컴포넌트가 리렌더링된다. 불필요한 렌더링을 줄일 수 있다.

1. React 외부에서도 사용 가능

Zustand는 React에 완전히 종속된 라이브러리가 아니다. 그래서 React 컴포넌트 내부뿐 아니라 외부에서도 store에 접근할 수 있다.

1. 미들웨어 지원

Zustand는 다양한 미들웨어를 지원한다.

- `persist` → localStorage / sessionStorage 저장
- `devtools` → 상태 디버깅
- `immer` → 객체 불변성 업데이트 쉽게 처리

예를 들어 `persist`를 사용하면 장바구니 데이터를 새로고침 후에도 유지할 수 있다.

### 사용 예시

store 생성:

```jsx
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increaseBears: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),

  removeAllBears: () =>
    set({
      bears: 0,
    }),
}));
```

컴포넌트에서 사용:

```jsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears);

  return <h1>{bears} bears around here...</h1>;
}

function Controls() {
  const increaseBears = useBearStore((state) => state.increaseBears);

  return <button onClick={increaseBears}>Add bear</button>;
}
```

이처럼 store를 여러 컴포넌트에서 import하면 상태가 자동으로 공유된다.

### 단점

1. Redux처럼 엄격한 상태관리 규칙이 없기 때문에 복잡한 대규모 프로젝트에는 한계가 있다.
2. Redux보다 생태계가 작아서 추가적인 팀 규칙이 필요할 수 있다.
3. store를 너무 비대하게 만들거나 상태 구조를 잘못 설계하면 관리가 어려워질 수 있다.

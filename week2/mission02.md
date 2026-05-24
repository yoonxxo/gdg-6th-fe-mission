### React Router 설치하기

1. <terminal>에 차례대로 입력한다.

   `npx create-vite@latest`

   `npm i react-router`

2. `main.jsx` 에 다음과 같은 코드를 추가한다.

   ```jsx
   import { createBrowserRouter } from "react-router";
   import { RouterProvider } from "react-router/dom";

   <넣고 싶은 페이지 경로와 컴포넌트들 입력>
   const router = createBrowserRouter([
     {
       path: "/",
       element: <App />,
     },
     {
       path: "/users/1",
       element: <User1Page />,
     },
     {
       path: "/users/2",
       element: <User2Page />,
     },         //경로(path)에 컴포넌트(elemnet) 넣겠다.
   ]);

   ReactDom.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />,
   )
   ```

### TailwindCSS 설치하기

1. <terminal>에 다음을 입력한다.

   `npm install tailwindcss @tailwindcss/vite`

2. `vite.config.js` 에 다음 코드를 추가한다.

   ```jsx
   import tailwindcss from '@tailwindcss/vite'

   plugins: [
       react(),
       tailwindcss(),
     ],
   ```

3. `src/index.css`에 다음 코드를 추가한다.

   ```jsx
   @import "tailwindcss";
   ```

### TailwindCSS

: 이미 만들어진 CSS 클래스들을 조합해서 빠르게 UI를 만드는 유틸리티 기반 CSS 프레임워크이다. 클래스 이름을 짓고 CSS를 따로 관리해야했던 기존 방식과 달리, TailwindCSS는 HTML에서 바로 스타일을 작성하면 된다.

TailwindCSS의 핵심개념은 다음과 같다.

1. Utility first: 스타일 하나짜리들로 쪼개놓고 나중에 조합한다. (클래스 하나=스타일 하나)
2. 조합으로 디자인한다.
3. 반응형도 가능하다.

   ```jsx
   <div className="text-sm md:text-lg lg:text-2xl">
   //text-sm-> 기본, md:text-lg->화면이 커지면, lg:text-2xl-> 더커지면
   ```

단점: className이 지저분하고, HTML이 길어진다.

현재 만들고 있는 쇼핑몰 웹사이트에도 TailwindCSS를 이용하여 스타일을 적용해 보았다.

```jsx
<h1 className="text-3xl font-bold underline">GDG Shopping Mall</h1>
```

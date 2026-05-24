# ESLint와 Prettier

## Linting이란?

코드에서 **잠재적인 오류, 잘못된 코드 패턴, 팀에서 정한 규칙 위반 등을 검사하는 과정**을 의미한다. (Lint는 보풀이라는 뜻이다.)

Linting을 수행하는 대표적인 도구로는 **ESLint** 가 있다.

**ESLint**는 일관성 있고 안정적인 코드 작성을 도와주는 분석 도구이다. 단순히 스타일을 맞추는 것뿐만 아니라 코드 품질과 안정성을 높이는 역할을 한다.

예를 들면,

- 사용하지 않는 변수 검사
- 선언되지 않은 변수 사용 검사
- React Hook 규칙 위반 검사
- 코드 스타일 규칙 검사
  - 세미콜론 사용 여부
  - 들여쓰기
  - 한 줄 최대 길이
  - 변수명 규칙

## Formatting이란?

코드의 **형식(모양)을 일관되게 정리하는 과정**을 의미한다.

Formatting을 수행하는 대표적인 도구로는 **Prettier**가 있다.

**Prettier**는 코드의 오류를 검사하는 것이 아니라, 코드의 형식을 자동으로 정리해주는 **Code Formatter**이다.

코드 로직에는 영향을 주지 않고, 코드가 보기 좋고 일관된 형태를 유지할 수 있도록 도와준다.

예를 들면,

- 들여쓰기 정리
- 세미콜론 추가/제거
- 따옴표 스타일 통일
- 줄바꿈 정리
- 공백 정리

즉, **ESLint가 코드의 문제를 검사하는 역할이라면, Prettier는 코드의 모양을 정리하는 역할**을 한다

## ESLint와 Prettier 적용 방법

#### 1. 패키지 설치

터미널에 다음과 같이 입력한다.

```jsx
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
//Prettier & ESLint를 조합하는 설정 값과 플러그인을 설치
npm install --save-dev --save-exact prettier
//prettier 설치
```

- eslint-config-prettier: ESLint와 Prettier의 코드 스타일 규칙이 충돌하는 것을 방지하기 위해, ESLint의 스타일 관련 규칙을 꺼주는 역할
- eslint-plugin-prettier: prettier 룰에 맞지 않는 부분을 ESLint 에러처럼 표시해주는 역할

#### 2. ESLint 설정 파일 수정

Vite React 프로젝트 생성 시 ESLint가 기본적으로 설치되므로 별도로 ESLint를 설치하지 않아도 된다.

`eslint.config.js` 내용을 다음과 같이 수정해준다. (ESLint + Prettier 연결)

```jsx
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
**import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';**

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  **eslintPluginPrettierRecommended,**
])

```

`rules: {}` 옵션을 추가하면 원하는 규칙을 직접 커스터마이징할 수 있다. 없으면 기본 추천 규칙 세트(js.configs.recommended) 사용 (과거에는 `.eslintrc` )

```
rules: {
semi: ["error","always"],
}
```

#### 3. Prettier 설정 파일 (선택)

프로젝트 루트에 `.prettierrc` 파일을 만들면 Prettier 규칙을 직접 설정할 수 있다.

```jsx
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

설정 파일이 없으면 Prettier 기본 설정으로 동작한다.

#### 4. VS Code Extension 설치

VS Code에서 다음 확장 프로그램을 설치한다.

- ESLint
- Prettier - Code formatter

이 확장 프로그램은 프로젝트에 ESLint/Prettier를 설치하는 것이 아니라**, VS Code에서 결과를 보여주고 자동 포맷팅 기능을 사용할 수 있게 해주는 도구**이다.

#### 5. Format on Save 설정

Vscode 환경설정에서 format on save를 활성화하면, 파일 저장 시 Prettier 규칙에 맞게 자동으로 코드가 정리된다. (Auto Save와 다름)

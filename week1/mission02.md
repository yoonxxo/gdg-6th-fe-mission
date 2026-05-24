### 1. Basic Syntax

HTML 요소는 시작태그, content, 종료태그로 구성된다.

`<p>Hello</p>`

#### 빈요소

:content를 가질 수 없는 요소

`<meta charset="utf-8">`

예)br, hr, img, input, link, meta

#### 어트리뷰트

: 요소의 성질, 특징을 정의하는 명세. 이름과 값의 쌍을 이룬다. (name=”value”)

`<img src="html.jpg" width="104" height="142">`

예)id, class, hidden, lang, style, tabindex, title

---

### 2. Sementic Web

검색엔진은 웹사이트 정보를 어떻게 수집하는가?

1. 크롤링: 검색엔진의 크롤러가 로봇이라는 프로그램을 이용하여 웹사이트 정보를 수집한다.
2. 인덱싱: 검색 사이트 이용자가 검색할만한 키워드들을 이용하여 인덱스를 만든다.

인덱싱 과정에서 검색엔진은 HTML의 시맨틱 요소(Semantic element)를 해석한다.이때 **시맨틱 태그**를 사용하면 검색엔진에 보다 명확하게 문서 정보를 전달할 수 있다. 이는 코드의 가독성을 높이고, 효과적인 크롤링과 인덱싱이 가능하다.

```html
<font size="6"><b>Hello</b></font>
<h1>Hello</h1>
//sementic tag를 이용한 경우
```

**시맨틱 웹**이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.

---

### 3. Basic-Tag

아래는 HTML의 기본 태그들을 포함한 코드이다.

```html
<!DOCTYPE html>
<html>
  <head>
    #title, style, link, script등 메타 데이터 설정
    <meta charset="utf-8" />
    #검색엔진이 사용할 keywords 정의
    <title>문서 제목</title>
    <link rel="stylesheet" href="style.css" />
    #외부 CSS파일과 연계
    <style>
      body {
        background-color: yellow;
        color: blue;
      }
    </style>
  </head>
  <body>
    #웹브라우저에 출력되는 부분 Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </body>
</html>
```

- script 태그
  : client-side Javascript 정의

---

### 4. Text-Tag

|               | semantic 중요성 X | semantic 중요성 O |
| ------------- | ----------------- | ----------------- |
| bold체 지정   | b                 | strong            |
| Italic체 지정 | i                 | em                |

small: small text 지정. mark: 하이라이트. del: deleted text 지정. ins: 밑줄 쳐진 text. sub:아래에 쓰인 text. sup: 위에 쓰인 text. br: 줄 바꿈 지정(빈요소). pre: content에 쓰인 그대로 브라우저에 표시된다. hr: 수평줄 삽입. q: 짧은 인용문. blockquote: 긴 인용문

\*HTML에서는 1개 이상의 연속된 공백이나 줄바꿈을 삽입해도 1개의 공백, 줄바으로 표시된다. `&nbsp;`: 연속적 공백 삽입

---

### 5. Hyperlink

: 한 텍스트에서 다른 텍스트로 건너 뛰어 읽을 수 있는 기능. 기존 문서의 선형성, 고정성 문제를 해결한다. a태그를 사용한다. <a href=”link”>…</a>

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com">Visit google.com!</a>
  </body>
</html>
```

#### Directory(폴더)

- **루트 디렉터리:** 파일 시스템 계층 구조 상의 최상위 디렉터리이다.
- **홈 디렉터리:** 시스템의 사용자에게 각각 할당된 개별 디렉터리이다.
- **작업 디렉터리:** 현재 폴더 `./`
- **부모 디렉터리:** 상위 폴더 `../`

#### **File path**

절대경로와 상대경로가 있다.

- 절대경로: 현재 작업 디렉터리와 관계없이 특정파일의 절대적인 위치를 가리킨다.
- 상대경로: 현재 작업 디렉토리를 기준으로 특정파일의 상대적인 위치를 가리킨다.

1. href 어트리뷰트

   :절대 URL, 상대 URL, fragment identifier, 메일, script 등이 들어갈 수 있다.

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com">URL</a><br />
    <a href="html/my.html">Local file</a><br />
    <a href="file/my.pdf" download>Download file</a><br />
    <a href="#ID">fragment identifier</a><br />
    <a href="mailto:someone@example.com?Subject=Hello again">Send Mail</a><br />
    <a href="javascript:alert('Hello');">Javascript</a>
  </body>
</html>
```

1. target 어트리뷰트

   : 링크 클릭 시, 윈도우를 어떻게 오픈할 지 지정한다.

- \_self: 현재 윈도우에서 오픈 (기본값)
- \_blank: 새로운 윈도우나 탭에서 오픈

→ 이동한 외부페이지에서 자바스크립트 코드를 사용해 악의적인 페이지로 리다이렉트할 수 있는 보안 문제가 있다. `rel=”nonpener noreferrer”` 를 추가해 Tabnabbing 피싱 공격에 대비할 수 있다.

### 1. 데이터 타입

-**원시 타입(Primitive data type)**: 변경 불가능(immutable)한 값. pass-by value

`number` : 숫자 타입은 모두 동일한 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다. 2진수, 8진수, 16진수 값을 참조해도 모두 10진수로 해석된다. 또한, 모든 수를 실수로 처리한다. 이때 실수는 일반적으로 소수를 가리킨다.

<특별한 값 표현>

- `Infinity` : 양의 무한대
- `-Infinity` : 음의 무한대
- `NaN` : 산술 연산 불가(not-a-number)

`string` : 0개 이상의 16bit 유니코드 문자들의 집합. “ ”나 ‘ ’를 사용한다.

```jsx
var str = 'Hello';
str = 'world';
이때 'Hello'의 값이 'world'로 바뀌는 것이 아니라, 'Hello'와
'world'가 각각 메모리에 저장되어있고, 변수 str은 'Hello'를
가리키고 있다가 'world'를 가리키도록 변경된 것이다. (immutable)
```

`boolean` : null, defined, 0은 false

`null` : 의도적으로 변수에 값이 없다는 것을 명시할 때 사용

`undefined` : 선언 이후 값을 할당하지 않은 변수는 undefined값을 가진다.

`symbol` : 이름의 충돌 위험이 없는 유일한 객체의 property key 를 만들기 위해 사용한다. symbol 함수를 호출해 생성하며, 이때 생성된 심볼 값은 유일하다.

-**객체 타입(Object data type) :** pass-by-reference

`object(객체 type)`

\*객체: Property(key+value)와 메소드의 집합

함수 또한 객체이므로 값으로 취급할 수 있다. 따라서 Property값으로 함수를 사용할 수도 있으며, Property값이 함수일 경우, 일반함수와 구분하기 위해 메소드라 부른다. 즉, 메소드란 데이터를 참조하고 조작할 수 있는 **동작**이다.

### 2. 변수

:프로그램에서 사용되는 데이터를 일정 기간 동안 기억하여 필요한 때에 다시 사용하기 위해 데이터에 고유의 이름인 식별자(identifier)를 명시한 것

-`var`, `let`, `const` 키워드를 사용하여 **선언**한다.
-JS는 대소문자를 구별하여 사용한다.

-변수를 중복 선언 시, 에러없이 이전 변수의 값을 덮어쓴다.

```jsx
var num1 = 1001;
var obj = { name: "Lee", gender: "male" };
```

**동적 타이핑:** 변수의 타입 지정없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정된다. 따라서 같은 변수에 여러 타입의 값을 자유롭게 할당할 수 있다.

**Variable Hoisting:** 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성. 선언문이 선언되기 이전에 참조 가능하다.(undefined)

```jsx
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456
//변수 생성시: 1. 선언 단계(스코프에 변수 등록)→2. 초기화(undefined)→3. 할당(실제값 할당)
//1,2 단계는 선언문 전에 일어난다. 따라서 첫째줄에서 undefined가 할당된 것이다.
```

-함수 레벨 스코프: 함수 내에서 선언된 변수는 함수 내에서만 유효하다.

-블록 레벨 스코프: 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하다.

\*JS는 블록 레벨 스코프가 아니므로 위 코드의 블록 안의 foo는 전역변수이다.

**var 키워드로 선언된 변수의 문제점**

1. 함수 레벨 스코드이므로 전역변수가 남발될 수 있다.
2. var키워드 생략 허용으로 의도치 않은 변수의 전역화
3. 중복선언 허용으로 의도치 않은 변수값 변경
4. 변수 호이스팅

### 3. 표현식과 연산자

- **표현식:** 값(리터럴), 변수, 객체, 배열의 요소, 함수 호출, 피연산자와 연산자의 조합 등. 표현식은 하나의 값으로 평가된다. 따라서 값대신 표현식을 쓸 수 있다.

```jsx
<표현식>
5             // 5
5 * 10        // 50
5 * 10 > 10   // true
(5 * 10 > 10) && (5 * 10 < 100)  // true
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.
var foo = x = 100; //x=100 할당문은 100으로 평가되므로 foo에는 100이 할당된다.
```

- **문(Statement):** 프로그램을 실행할 때 수행될 명령어. 세미콜론(;)으로 끝나야한다.
  \*표현식이 그 자체로 statement가 되는 경우가 있다.
  ```jsx
  var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.
  ```

\*피연산자의 타입이 반드시 일치할 필요는 없다. JS는 암묵적 타입 강제 변환을 통해 연산을 수행한다.

```jsx
var foo = 1 + "10"; // '110' //숫자+문자열 일땐 문자열 덧셈
var bar = 1 * "10"; // 10 //숫자*문자열 일땐 숫자 곱셈
```

```jsx
숫자타입이 아닌 피연산자에 +,-연산자를 사용하면 숫자타입으로 변환한다.
+10 // 10
-'10' // -10
-true // -1
+false // 0
```

- **비교연산자**
  x==y: x와 y의 값이 같음
  x===y: x와 y의 값과 타입이 모두 같음(예외: NaN)
- **삼항 조건 연산자**

: if-else문은 값으로 평가할 수 없지만, 삼항조건 연산자식은 값으로 평가할 수 있는 표현식이다.

- **논리 연산자**: ||, &&, !
- **쉼표 연산자**: 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가결과를 반환한다.

```jsx
var x, y, z;
((x = 1), (y = 2), (z = 3)); // 3
```

- **typeof 연산자:** 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환한다.

-이때 반환되는 값은 string, number, boolean, undefined, symbol, object, function중 하나이다.

-typeof null은 null이 아니라 object이다. 따라서 null 타입을 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용해야 한다.

```jsx
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null); // true
```

### 4. 제어문

#### 반복문

- 레이블 문: 식별자가 붙은 문
  ```jsx
  outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      // i + j === 3이면 외부 for 문을 탈출한다.
      if (i + j === 3) break outer;
    }
  }

  console.log("Done!");
  ```
- 다른 언어와 달리 자바스크립트에서는 블록 유효범위(Block-level scope)를 생성하지 않는다. 함수 단위의 유효범위(Function-level scope)만이 생성된다.

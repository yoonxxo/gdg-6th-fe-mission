## CSS 기본 문법
Rule Set: `h1, h2{color: red; font-size: 12px;}`
여기서 h1, h2는 셀렉터, color는 property, red는 값이다.
이러한 Rule Set의 집합을 Style Sheet라고 한다.

- 인라인(inline) 스타일 방식: 태그에 직접 스타일을 입히는 방식

- 내부 스타일 방식: "파일 내"의 태그들에 style을 한번에 적용 (head 태그 내에 정의)
    ```html
    <style>
    h1, h2, h3, h4, h5, h6 {
    color: yellow;
    background-color: red;
    }
    </style>
    ```

- 외부 스타일 방식: HTML 문서와는 별개의 파일(style.css)에서 스타일을 지정하는 방법. 스타일을 한 번에 작성해서 여러 HTML 문서에 적용할 수 있어 유지보수에 용이하다. 

    ```css
    h1, h2, h3, h4, h5, h6
    { color: red; background-color: yellow; }
    
    <html과 style.css 파일 연결하기>
    ```html
    <link rel="stylesheet" href="./style.css">
    
- **우선순위**: 인라인> 내부 >외부

### Reset CSS

: 모든 웹브라우저는 CSS가 없어도 default style을 가지고 있다. 그러나 웹브라우저에 따라 default가 다르므로 Reset CSS를 사용하여 브라우저들의 default 스타일을 통일시켜 초기화한다. 

Ex. Eric Meyer's reset, normalize.css

## 셀렉터
1. Universal Selector `*`: HRML 문서 내의 모든 요소를 선택한다.
2. Tag Selector
3. ID Selector `#id_어트리뷰트`: 중복될 수 없는 값이다.
4. Class Selector `.class`: HTML 요소에 class 어트리뷰트 값은 공백으로 구분하여 여러 개 지정할 수 있다. 
5. 어트리뷰트 Selector 
    `a[href] { color: red; }` 
    `a[target="_blank"] { color: red; }`
    `h1[title~="first"] { color: red; }``div[class*="first"] { color: red; }`: first 포함된 어트리뷰트 값에 적용
    `p[lang|="en"] { color: red; }` : en이나 en으로 시작하는 어트리뷰트 값
    `a[href^="https://"] { color: red; }`: https://로 시작하는 어트리뷰트 값
    `a[href$=".html"] { color: red; }`: .html로 끝나는 어트리뷰트 값
5. Combinator(복합 셀렉터)
    셀렉터A 셀렉터B: 셀렉터A의 모든 후손 요소 중 셀렉터B와 일치하는 요소
    셀렉터A > 셀렉터B: 셀렉터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소
    셀렉터A + 셀렉터B: 셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소
    셀렉터A ~ 셀렉터B: 셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소 모두
6. Pseudo-Class Selector: 요소의 특정 상태에 따라 스타일을 정의한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

```css
selector:pseudo-class { 
	property: value; 
}
```
:link	셀렉터가 방문하지 않은 링크일 때
:visited	셀렉터가 방문한 링크일 때
:hover	셀렉터에 마우스가 올라와 있을 때
:active	셀렉터가 클릭된 상태일 때
:focus	셀렉터에 포커스가 들어와 있을 때

:checked	셀렉터가 체크 상태일 때
:enabled	셀렉터가 사용 가능한 상태일 때
:disabled	셀렉터가 사용 불가능한 상태일 때

:first-child	셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다.
:last-child	셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다.
:nth-child(n)	셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다.
:nth-last-child(n)	셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다.
:not(셀렉터)	셀렉터에 해당하지 않는 모든 요소를 선택한다.

:valid(셀렉터)	정합성 검증이 성공한 input 요소 또는 form 요소를 선택한다.
:invalid(셀렉터)	정합성 검증이 실패한 input 요소 또는 form 요소를 선택한다.

8. **Pseudo-Element Selector**
    
    : 요소의 특정 부분에 스타일을 적용하기 위하여 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.
    ```css
    selector::pseudo-element {
        property:value;
    }
    ```
    ::first-letter	콘텐츠의 첫글자를 선택한다.
    ::first-line	콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다.
    ::after	콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다.
    ::before	콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다.
    ::selection	드래그한 콘텐츠를 선택한다. iOS Safari 등 일부 브라우저에서 동작 않는다.

## 3. Property값의 단위

CSS Property에는 키워드, 크기 단위, 색상 표현 단위 등 특정 단위를 갖는 값을 지정한다.

### 1. 키워드

각 프로퍼티에 따라 사용할 수 있는 키워드가 존재한다.

### 2. 크기단위

- px: 픽셀(화소) 단위. 1px=1 화소. 대부분의 브라우저는 1pxdmf 1/96인치의 **절대단위**로 인식한다.
- em: 배수 단위의 **상대단위**이다. 예를 들어 2em은 요소에 지정된 사이즈의 2배이다.
    
    *중첩된 자식 요소에 em을 지정하면 모든 자식 요소의 사이즈에 영향을 미치기 때문에, 상속관계에 주의하며 지정해야 한다.
    
- %:  백분률 단위의 **상대 단위**이다. 요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다.
- rem: em의 기준은 상속의 영향으로 바뀔 수 있는 반면, rem은 최상위 요소(html)의 사이즈를 기준으로 삼는다. 이때 r은 root를 의미한다.
    
    사용자가 브라우저의 기본 폰트 크기를 변경하더라도 이에 다라 웹사이트의 레이아웃을 적절히 조정할 수 있다는 장점이 있다. 다음 코드와 같이 wrapper 요소(container) 등을 사용하여 콘텐츠의 크기에 가변적으로 대응할 수 있다. 
    
    ```css
    .container {
      width: 70rem; /* 70rem ⇒ 14px * 70 = 980px */
    }
    ```
    
- Viewport 단위
    - vw: viewport 너비의 1%
    - vh: viewport 높이의 1%
    - vmin: viewport 너비와 높이 중 작은 값의 1%
    - vmax: viewport 너비와 높이 중 큰 값의 1%

### 3. 색상 표현 단위

: 키워드(red, orange..)로 표현하면 간편하지만, 더 많은 수의 색을 표현하기 위해 다음과 같은 색상 표현 단위를 사용할 수 있다.

| 단위 | 사용예 |
| --- | --- |
| HEX 코드 단위 (Hexadecimal Colors) | #000000 |
| RGB (Red, Green, Blue) | rgb(255, 255, 0) |
| RGBA (Red, Green, Blue, Alpha/투명도) | rgba(255, 255, 0, 1) |
| HSL (Hue/색상, Saturation/채도, Lightness/명도) | hsl(0, 100%, 25%) |
| HSLA (Hue, Saturation, Lightness, Alpha) | hsla(60, 100%, 50%, 1) |

## 4. Box 모델

모든 HTML요소는 Box 형태의 영역을 가지고 있다. 이 Box는 Content, Padding, Border, Margin으로 구성된다.

브라우저는 Box 모델의 크기와 프로퍼티, 위치대로 렌더링을 실행한다.

### 1. width/height

width와 height 프로퍼티는 요소의 너비와 높이를 지정하기 위해 사용되며, box-sizing의 기본값은 content-box이다.

width와 height로 지정한 콘텐츠 영역보다 실제 콘텐츠가 크면 콘텐츠 영역이 넘치게 된다. 이때 `overflow: hidden;` 을 지정하면 넘친 콘텐츠를 감출 수 있다.

block 요소의 경우 default 값: width 는 부모요소 크기, height는 콘텐츠 높이+약간의 여분

### 2. margin/padding

margin / padding 프로퍼티는 content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.

- 속성 4개(위, 오른쪽, 아래 왼쪽) 사용 시: `margin: 10px 5px 10px 5px;`
- 속성 2개 사용 시 위아래/ 오왼 여백 의미: `margin: 10px 5px;`
- 속성 1개 사용 시 모든 방향이 같은값을 사용한다.
- 한 방향에만 값을 부여하고 싶은 경우: `margin-right: 20px, padding-top: 10px;`
- 가운데 정렬: `margin: 0 auto;`

`max-width` 프로퍼티: 요소 너비가 브라우저 너비보다 크면 가로 스크롤바가 만들어지는데, 이 문제를 해결하기 위해서 사용한다.

`max-width` 프로퍼티는 요소 너비의 최대값을, `min-width` 프로퍼티는 요소 너비의 최소값을 지정한다. 예를 들어 `max-width: 300px;`의 경우, 브라우저의 너비가 300px보다 작아지면 요소 너비는 브라우저의 너비에 따라서 작아진다. `min-width: 300px;`의 경우 브라우저의 너비가 300px보다 작아져도 요소 너비는 지정 너비(300px)을 유지한다.

### 3. border

- **border-style**: 테두리 선의 스타일을 지정한다. 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.

```css
p.d1 { border-style: dotted; }
p.d2 {border-style: dotted solid;} /*수평|수직*/
p.mix { border-style: dotted dashed solid double; }
```

- **border-width:** 테두리의 두께를 지정한다. 무조건 border-style과 함께 사용해야 한다. thin, medium, thick 또는 px값 지정
- **border-color:**  무조건 border-style과 함께 사용
- **border**: `border-width`, `border-style`, `border-color`를 한번에 설정하기 위한 shorthand 프로퍼티
    
    `p {border: 5px solid red;}`
    
- **border-radius:** 테두리 모서리를 둥글게 표현하도록 지정한다. 하나 혹은 두개의 반지름을 설정하여 각각의 모서리 굴곡을 설정한다. (px, %, em 사용) top-left/top-right/bottom-right/bottom-left 순서로 지정 가능하다.
    
    두개의 반지름을 지정하여 타원형 둥근 모서리 설정하는 경우
    ```css
    .border-rounded {
        border-top-left-radius: 50px 25px;
    }
    ```
border-radius: ulx urx lrx llx / uly ury lry lly;

### 4. box-sizing

`box-sizing` 프로퍼티는 width, height 프로퍼티의 대상 영역을 변경할 수 있다.

`box-sizing: content-box;` (기본 형태) width와 height는 콘텐츠 영역에 적용됨

`box-sizing: border-box;` width와 height이 padding과 border까지 포함한다. 더 직관적이다. 

***모든 Box 모델 관련 프로퍼티는 상속되지 않는다.***

## 5. Display, Visibility, Opacity

: layout 정의에 자주 사용되는 프로퍼티. 모든 HTML 요소는 block 또는 inline 특성을 갖는다. 

### 1. Display

**1. block 레벨 요소**

- 항상 새로운 라인에서 시작한다.
- 화면 크기 전체의 가로폭을 차지한다. (width: 100%)
- width, height, margin, padding 프로퍼티 지정이 가능하다.
- block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다
- block 레벨 요소 예: div, h1~h6, p, ol, ul, li, hr, table, form

**2. inline 레벨 요소**

- 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치한다.
- 가로폭: content의 너비
- **width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다.** 상, 하 여백은 line-height로 지정한다.
- inline 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정된다.
- inline 레벨 요소는 일반적으로 block 레벨 요소에 포함되어 사용된다.
- inline 레벨 요소 예: span, a, strong, img, br, input, select, textarea, button

**3. inline-block 레벨 요소**

**:** inline 레벨 요소와 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정할 수 있다. (inline+block)

- 상, 하 여백을 margin과 line-height 두가지 프로퍼티 모두를 통해 제어할 수 있다.
- 가로폭은 content의 너비.
- inline-block 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정된다.

```html
<div class="inline-block box1">inline-block height 70px</div>
<div class="inline-block box2">inline-block height 150px</div>
```

**4. none**

: 화면에 표시하지 않는다. + 해당 요소의 공간이 사라진다.

### 2. visibility

: 요소를 보이게 할 것인지 안보이게 할 것인지 정의한다. 렌더링 할지 말지

- visible (기본값): 해당 요소를 보이게 한다
- hidden: 해당 요소를 보이지 않게 한다. 공간은 남아 있다.
- collapse: table 요소에 사용하며  행이나 열을 보이지 않게 한다.
- none: table 요소의 row나 column을 보이지 않게 한다. 크롬에서는 hidden=none

### 3. opacity

: 요소의 투명도를 정의한다. 0.0(투명)~1.0(불투명) 값 지정

## 6. Background

1. `background-image: url(...);`  이미지 여러개 설정할 경우, 먼저 설정된 이미지가 전면에 출력된다. 
2. `background-repeat: repeat-x`: x축으로 반복  `repeat-y` `no-repeat`
3. `background-size: 700px 500px;` width height 순서이다. **width와 height 값은 공백으로 구분해야한다.** 하나의 값만 지정한 경우, 지정한 값은 width를 의미하며 height는 auto이다. 프로퍼티 값으로 px, %, cover, contatin을 사용한다.
    - %: 화면을 줄이거나 늘리면 배경 이미지의 크기도 따라서 변경되어 찌그러지는 현상이 나타난다.
    - **cover:** 배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 width, height 중 큰값에 배경이미지를 맞춘다. 따라서 이미지의 일부가 보이지 않을 수 있다.
    - **contain:** 배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 영역에 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 이미지 스케일을 조정한다.
4. `background-attachmnet: fixed;` 화면이 스크롤되더라도 배경이미지는 스크롤되지 않고 고정된다.
5. `background-position: 0% 0%;` 이미지의 좌표를 지정하는 프로퍼티. 기본값은 우측 상단에 위치한다. 프로퍼티 값으로 top, bottom, center, left, right, px, % 등이 들어갈 수 있다. 
    
    ```html
    .example8 {
          background-image: url("http://poiemaweb.com/img/bg/dot.png"), url("http://poiemaweb.com/img/bg/dot.png");
          background-position: 0px 0px, center;
        } //배경 이미지 두개인 경우 (좌측상단, 센터)
    ```
    
6. `background-color: 색상;`  색상값 또는 transperent 키워드 지정 가능
7. `background: color || image || repeat || attachment || position` background shorthand

## 7. Font & Text

1. **font-size:** 텍스트 크기 정의
2. **font-family:** 폰트를 지정한다. 컴퓨터에 해당 폰트가 설치되어 있어야 적용된다. 폰트는 여러 개를 동시에 지정이 가능하다. 마지막 폰트는 대부분의 OS에 기본적으로 설치되어있는  폰트를 지정하는 것이 일반적이다. 폰트명은 따옴표로 감싸주며 폰트명이 한단어인 경우는 따옴표가 필요없다.
3. **font-style:** Italic체 지정
4. **font-weight:** 폰트 굵기 지정
5. **font Shorthand:** font : `font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)`
6. **line-height:** 텍스트의 높이를 지정한다. 대부분 브라우저의 default line height는 약 110% ~ 120%. 텍스트 수직정렬에도 사용된다. 
7. **letter-spacing:** 글자 사이의 간격 지정. px
8. **text-align:** 텍스트의 수평정렬을 정의한다. 프로퍼티 값에는 center, right, left, justify, center이 있다. 이때, inline 요소는 width프로퍼티가 없으므로 중앙개념이 존재하지 않기 때문에, 중앙정렬을 하려면 inline요소에 `display: block;`을 지정해야한다.
9. **text-decoration:** none(inderline 제거), overline, line-through, underline을 지정할 수 있다.
10. **white-space:**  공백(space), 들여쓰기(tab), 줄바꿈(line break)을 의미한다.  html은 기본적으로 연속된 space, tab은 1번만 실행되며 줄바꿈은 무시된다. 또한 텍스트는 부모의 가로 영역을 벗어나지 않고 자동 줄바꿈된다. `white-space` 프로퍼티는 이러한 기본 동작을 제어하기 위한 프로퍼티이다.
    
    
    | 프로퍼티값 | line break | space/tab | wrapping(자동줄바꿈) |
    | --- | --- | --- | --- |
    | normal | 무시 | 1번만 반영 | O |
    | nowrap | 무시 | 1번만 반영 | X |
    | pre | 반영 | 그대로 반영 | X |
    | pre-wrap | 반영 | 그대로 반영 | O |
    | pre-line | 반영 | 1번만 반영 | O |
11. text-overflow: 부모 영역을 벗어난, 자동줄바꿈이 되지 않은 텍스트의 처리 방법을 정의한다.
    - clip: 영역을 벗어난 텍스트를 표시하지 않는다. (기본값)
    - ellipsis: 영역을 벗어난 텍스트를 잘라내어 보이지 않게 하고 `…` 표시
    
    ```html
    .truncate {
      width: 150px;             /* width가 지정되어 있어야 한다. */
      white-space: nowrap;      /* 자동 줄바꿈을 방지 */
      overflow: hidden;         /* 반드시 "visible" 이외의 값이 지정되어 있어야 한다. */
      text-overflow: ellipsis;  /* ellipsis or clip */
    }
    ```
    
    - <!-: 프로퍼티 값으로 지정한 임의의 문자열을 출력한다.
12. word-wrap과 word-break: 한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의한다. 
    - `word-wrap: break-word;` 단어를 어느정도 고려하여 부모영역 안에 맞춰짐
    - `word-break: break-all;` 단어를 고려하지 않고 부모영역에 맞추어 강제 개행한다.

## 8. Position

: 요소의 위치를 정의한다.

1. Static: position 프로퍼티의 기본값. 보통 이미 설정된 position을 무력화하기 위해 사용한다. 
2. relative: 기본위치(static)를 기준으로 좌표 프로퍼티(top, left 등)을 사용하여 위치를 이동시킨다. relative를 적용한 요소는 좌표 프로퍼티가 적용되는 것만 다를 뿐 그 이외는 static을 지정했을 때와 동일하게 동작한다. (상속 아님)
3. absolute: 부모에 static 이외의 position 프로퍼티(relative, fixed등)가 지정되어 있을 경우에만 부모를 기준으로 위치하게 된다. 만일 부모, 조상이 모두 static 프로퍼티인 경우, document body를 기준으로 위치하게 된다.
4. fixed: 부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표프로퍼티를 사용하여 위치를 이동시킨다. **스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.**
5. z-index: 프로퍼티 값이 클수록 전면에 출력된다. position 프로퍼티가 static 이외인 요소에만 적용된다.
6. overflow: 자식 요소가 부모 요소의 영역를 벗어났을 때 처리 방법을 정의한다.
    - visible: 영역을 벗어난 부분을 표시한다.(기본값)
    - hidden: 영역을 벗어난 부분은 표시하지 않는다.
    - scroll: 무조건 스크롤 표시한다.
    - auto: 영역을 벗어난 부분이 있을 때만 스크롤을 표시한다.

## 9. Float

:  요소가 기본 레이아웃 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽에 이동하는 것이다. (absolute 사용하면 안된다) 프로퍼티 값에는 none(기본값), right, left가 있다.

`float:right;`  먼저 기술된 요소가 가장 오른쪽에 출력되므로 출력 순서가 역순이 된다.

- width
    
    : width 프로퍼티를 선언하지 않은 block 레벨 요소에 **float 프로퍼티가 선언되면 width가 inline 요소와 같이 content에 맞게 최소화**되고 다음 요소 위에 떠 있게(부유하게) 된다. 
    

### float 사용시 발생하는 문제점 해결

1. float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제
    
    :  float이 선언된 요소가 float이 선언되지 않은 요소 위에 떠있게 되면서, 두 요소간 margin은 사라진다. 이때, float을 선언하지 않은 요소에 `overflow: hidden;`을선언하면 두 요소간 margin을 표현할 수 있다.  
    
2. float가 선언된 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제
    
    : 이는 float요소의 높이를 알 수 없기 때문에 발생한다. 이를 해결하기 위해 부모 요소에 `overflow: hidden;` 을 선언한다. `::after 가상요소 선택자`를 이용하는 방법도 있다. 
    
    ```html
    .clearfix:after {
      content: "";
      display: block;
      clear: both;
    }
    ```
    
    float 선언 대신 `display: inline-block;` 을 선언하는 방법이 있다. 이때는 두 요소 사이의 공백을 제거하기 위해 부모 요소의 `font-size=0;` 을 선언 해야한다. 
    

## CSS를 사용하는 방식

1. `.css`
    - 모든 컴포넌트에 전역으로 적용되는 css 파일
    - font, body 등 전체 공통 스타일에 사용한다.
    - `"className"`
2. `.modeul.css`
    - 파일(컴포넌트) 단위로 범위가 제한된다. 따라서 컴포넌트끼리 스타일 충돌이 없다. 유지보수가 쉽다.
    - 버튼, 페이지 등 컴포넌트 스타일에 사용한다.
    - `{style.calssName}`
3. 라이브러리 사용 (ex. tailwindcss)
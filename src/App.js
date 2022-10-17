import logo from './logo.svg';
import './App.css';
import './test.css';  // 외부 css 파일 import
import App2 from './App2';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';

function App() {
  const name = "승환";
  const data = "ex01";
  // return 안에 사용자 정의태그 구조를 작성할 수 있다
  return (
    // JSX 문법 -> JavaScript와 HTML을 같이 사용할 수 있는 문법!
    // 규칙1 : 꼭 html 구조는 한가지 태그로 묶여있어야 한다
    // 규칙2 : 모든 태그는 여는태그와 닫는태그 둘 다 존재하여야만 한다
    // <h1>HELLO REACT<br></br>오늘도 파이팅!</h1>
    
    // 빈태그(Fragment) 로도 묶어서 사용이 가능하다
    // 규칙4 : class를 지정해줄때는 className 이라는 키워드를 사용한다
    <>
      <h1 className='first'>HELLO REACT</h1>
      <h1 style={{color:"red"}} id="test">월요일 파이팅!</h1>
      {/* Ctrl + / -> 주석 
      // 변수를 사용할 때는 {변수명} 으로 사용한다
      // 규칙3 : JSX문법 안에서는 사용할 수 있는 JavaScript 문법이 제한되어있다,
      //         삼항 연산자는 가능하다
      // name에 있는 값이 "승환" -> 나의 이름은 승환
      // name에 있는 값이 다른 내용이라면 -> 나의 이름은 영표
      */}
      <h1>나의 이름은 {(name == '승환') ? name : '영표'}</h1>
      <App2></App2>
      {(data=='ex01') ? <Ex01></Ex01> : <Ex02></Ex02>}
    </>

  );
}

// 위에서 만들어놓은 사용자 정의태그를 내보내겠습니다.
export default App;

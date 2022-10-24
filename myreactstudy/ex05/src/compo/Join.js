import {useState, useRef} from 'react'
// useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있게 도와주는 기능
import {useNavigate} from 'react-router-dom'
// useNavigate : 특정 주소값으로 화면을 전환할 수 있는 역할

function Join() {

    const useId = useRef();

    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
    const [inputNick, setInputNick] = useState('');

    function reset() {
        setInputID("");
        setInputPW("");
        setInputNick("");
        useId.current.focus();   // ref.current -> ref가 적용된 태그를 의미
    }

    const nav = useNavigate();

    function tryJoin() {
        nav(`/Login?id=${inputID}&pw=${inputPW}&nick=${inputNick}`);   // Login페이지로 넘어감.
        // nav("/Login?id=" + inputID + "&pw=" + inputPW);
    }

    return ( 
        <>
            <h1>회원가입 페이지 입니다</h1>
            ID : <input onChange={(e) => setInputID(e.target.value)} value={inputID} ref={useId}></input>
            <br></br>
            PW : <input onChange={(e) => setInputPW(e.target.value)} value={inputPW}></input>
            <br></br>
            Nick : <input onChange={(e) => setInputNick(e.target.value)} value={inputNick}></input>
            <br></br>
            <button onClick={tryJoin}>Join</button>
            <button onClick={reset}>초기화</button>
        </>
    );
}

export default Join;
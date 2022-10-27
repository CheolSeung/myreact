import {useState, useRef} from 'react'
// useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있게 도와주는 기능
import {useNavigate} from 'react-router-dom'
// useNavigate : 특정 주소값으로 화면을 전환할 수 있는 역할

import { useDispatch } from 'react-redux';

function Join() {

    const dispatch = useDispatch();

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
        dispatch({type : 'join', id : inputID, pw : inputPW, nick : inputNick});
        nav("/Login");
    }

    // function tryJoin() {
    //     nav(`/Login?id=${inputID}&pw=${inputPW}&nick=${inputNick}`);   // Login페이지로 넘어감.
    //     // nav("/Login?id=" + inputID + "&pw=" + inputPW + "&nick=" + inputNick);
    // }

    
    // form : 주소값으로 이동하면서 form태그 안에 있는 내용도 같이 전달!
    return ( 
        <>
            <h1>회원가입 페이지 입니다</h1>
            {/* useState로 푼거 */}
            {/* <form action='/Login'>
                ID : <input name="id" onChange={(e) => setInputID(e.target.value)} value={inputID} ref={useId}></input>
                <br></br>
                PW : <input name="pw" onChange={(e) => setInputPW(e.target.value)} value={inputPW}></input>
                <br></br>
                Nick : <input name="nick" onChange={(e) => setInputNick(e.target.value)} value={inputNick}></input>
                <br></br>
                <button>Join</button>
                <button onClick={reset} type="button">초기화</button>  
            </form> */}


            {/* redux로 푼거 */}
            <form action='/Login'>
                ID : <input name="id" onChange={(e) => setInputID(e.target.value)} value={inputID}></input>
                <br></br>
                PW : <input name="pw" onChange={(e) => setInputPW(e.target.value)} value={inputPW}></input>
                <br></br>
                Nick : <input name="nick" onChange={(e) => setInputNick(e.target.value)} value={inputNick}></input>
                <br></br>
                <button onClick={tryJoin} type="button">Join</button>

                {/* <button onClick={reset} type="button">초기화</button>   */}
            </form>
        </>
    );
}

export default Join;
import {useSearchParams, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { useSelector } from 'react-redux';

function Login() {

    const id = useSelector((state) => state.id);
    const pw = useSelector((state) => state.pw);
    const nick = useSelector((state) => state.nick);

    const nav = useNavigate();

    // params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음
    // ex) id=Test&pw=123&nick=냉면
    // const [params, setParams] = useSearchParams();
    // const id = params.get("id");
    // const pw = params.get("pw")
    // const nick = params.get("nick")

    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');

    function tryLogin() {
        if(id == ID && pw == PW) {
            nav(`/Home?id=${id}&pw=${pw}&nick=${nick}`);   // 로그인 성공
        } else {
            alert("로그인 실패");
        }
    }

    return (
        <>
            <h1>Login페이지</h1>
            <form action='/Home'>
                ID : <input name="id" onChange={(e) => setID(e.target.value)} value={ID} placeholder="아이디 입력"></input>
                <br></br>
                PW : <input name="pw" onChange={(e) => setPW(e.target.value)} value={PW} placeholder="비밀번호 입력"></input>
                <br></br>
                <input name="nick" style={{display:'none'}}></input>
                <button onClick={tryLogin} type="button">로그인</button>
            </form>
        </>
    );
}
export default Login;
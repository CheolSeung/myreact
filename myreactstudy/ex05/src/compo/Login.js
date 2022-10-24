import {useSearchParams} from 'react-router-dom';

function Login() {

    const [params, setParams] = useSearchParams();
    const id = params.get("id");
    const pw = params.get("pw")

    function click() {
        if(id == "Test" && pw == "123") {
            console.log("성공");
        } else {
            console.log("실패");
        }
    }

    return (
        <>
            <h1>Login페이지</h1>
            ID : <input></input>
            <br></br>
            PW : <input></input>
            <button onClick={click}>로그인</button>
        </>
    );
}

export default Login;
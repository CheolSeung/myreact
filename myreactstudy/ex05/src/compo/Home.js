import {useSearchParams, Link} from 'react-router-dom';

function Home() {

    const [params, setParams] = useSearchParams();
    const id = params.get("id")
    const pw = params.get("pw")
    const nick = params.get("nick")

    return (
        <>
            <h1>Home</h1>
            <br></br>
            <h1>{nick}님 환영합니다</h1>
            <br></br>
            <Link to="/">회원가입페이지로 이동</Link>
        </>
    )
}

export default Home;
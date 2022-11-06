import {Link} from 'react-router-dom';

function Home() {

    return (
        <>
            <div class="Homediv">
                <h1>Home</h1>
                <Link to='./login'>로그인</Link>
            </div>
        </>
    )
}
export default Home;
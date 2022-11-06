import {Link} from 'react-router-dom'

function Nav() {

    return(
        <>
            <div class="Navdiv">
                <ul class="navbar">
                    <Link to="#">회원정보</Link><br></br>
                    <Link to="#">쇼핑하기</Link><br></br>
                    <Link to="#">장바구니</Link><br></br>
                </ul>
            </div>
        </>
    )
}

export default Nav;
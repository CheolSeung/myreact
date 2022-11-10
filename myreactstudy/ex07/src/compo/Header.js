import {Link} from 'react-router-dom';

function Header() {

    return(
        <>
            <header class="Header">
                <div class="Headerdiv">
                    <h1>
                        <Link to="/" class="Headerh1">은근 봄철</Link>
                    </h1>
                    <nav class="Headernav">
                        <ul class="Headerul">
                           <li><Link to="#">회원정보</Link></li>
                            <li><Link to="#">쇼핑하기</Link></li>
                            <li><Link to="#">장바구니</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
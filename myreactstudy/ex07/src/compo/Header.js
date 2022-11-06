import {Link} from 'react-router-dom';

function Header() {

    return(
        <>
            <div class="Headerdiv">
                <Link to="/" class="Header">은근 봄철</Link>
                <p>김새봄 이은찬 이철승 조성근</p>
            </div>
        </>
    )
}

export default Header;
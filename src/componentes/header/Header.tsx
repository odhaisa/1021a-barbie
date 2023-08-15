import './Header.css'
import Link from './../link/Link'
function Header() {
    return(
        <header>
            <div>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li><Link texto='Home'></Link></li>
                        <li><a href="#">Notícia</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
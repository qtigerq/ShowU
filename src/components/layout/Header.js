import { Link } from 'react-router-dom'

import { FaTerminal } from 'react-icons/fa'

import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.left_block}>
                <div className={styles.logo}>
                    <FaTerminal />
                </div>
                <div>
                    <h1>Tiago Melo</h1>
                    <p>Desenvolvedor Web</p>
                </div>
            </div>
            <div>
                <ul>
                    <li><Link to='/about'>Sobre</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
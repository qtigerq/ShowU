import styles from './Footer.module.css';
import HackerRank from './../../img/hackerranklogo.png';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {AiFillMail, AiFillGithub, AiOutlineLinkedin, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ReactTooltip />                
            <ul>
                <li><div data-tip="HackerRank"><Link to='//www.hackerrank.com/chicobg?hr_r=1'> <img src={HackerRank} alt='Tiago Melo'/> </Link></div></li>
                <li><a data-tip="GitHub" href="https://github.com/qtigerq"> <AiFillGithub /> </a></li>
                <li><a data-tip="LinkedIn" href="https://www.linkedin.com/in/tiago-de-melo-3279561b8/"> <AiOutlineLinkedin /> </a></li>
                <li><a data-tip="EMail" href="mailto:tiagobrunodemelo@gmail.com"> <AiFillMail /> </a></li>
                <li><a data-tip="WhatsApp" href="https://contate.me/tmsistemas"> <AiOutlineWhatsApp /> </a></li>
                <li><a data-tip="YouTube" href="//www.youtube.com/channel/UC7Xm9jsNHiR6E676pTThRjA"> <AiFillYoutube /> </a></li>
            </ul>
            <p>Desenvolvido por mim @ 2022</p>
        </footer>
    )
}

export default Footer
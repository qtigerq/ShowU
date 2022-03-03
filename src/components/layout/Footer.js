import styles from './Footer.module.css'

import { AiFillFacebook, AiFillMail, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><AiFillFacebook /></li>
                <li><AiFillMail /></li>
                <li><AiOutlineInstagram /></li>
                <li><AiOutlineLinkedin /></li>
                <li><AiOutlineWhatsApp /></li>
            </ul>
            <p>Desenvolvido por mim @ 2022</p>
        </footer>
    )
}

export default Footer
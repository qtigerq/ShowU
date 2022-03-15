import styles from './Footer.module.css'
import { AiFillFacebook, AiFillMail, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><AiFillFacebook /></li>
                <li><a href="mailto:tiagobrunodemelo@gmail.com"> <AiFillMail /> </a></li>
                <li><AiOutlineInstagram /></li>
                <li><a href="https://www.linkedin.com/in/tiago-de-melo-3279561b8/"> <AiOutlineLinkedin /> </a></li>
                <li><a href="https://contate.me/tmsistemas"> <AiOutlineWhatsApp /> </a></li>
                <li><a href="//www.youtube.com/channel/UC7Xm9jsNHiR6E676pTThRjA"> <AiFillYoutube /> </a></li>
            </ul>
            <p>Desenvolvido por mim @ 2022</p>
        </footer>
    )
}

export default Footer
import styles from './About.module.css'
import ReactTooltip from 'react-tooltip';
import { DiReact, DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiPhp, DiPostgresql, DiMysql, DiDocker, DiGithub, DiLinux, DiJava } from "react-icons/di";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.leftcel}>
                <div className={styles.h1container}><h1>TM Sistemas</h1></div>
                <p>Desenvolvimento de sistemas e aplicativos Web utilizando metodologias ágeis, integração contínua e automação de testes. Foco em boas práticas como programação em par, CleanCode, Dojo e TDD. Publicação e manutenção de domínios Web, persistência em bancos relacionais e integração via API REST. Arquiteturas de Software em Camadas, MVC, Microserviços e Cliente-Servidor.</p><br />
                <p><strong>Tecnologias: </strong>React, JavaScript, Node, Jest, Express, Sequelize, Java, Spring, PHP, HTML, CSS, Bootstrap, Docker, Git, PostgreSQL e MySQL.</p>
            </div>
            <div className={styles.rightcel}>
                <ReactTooltip />
                <ul>
                    <li data-tip="ReactJS"><DiReact /></li>
                    <li data-tip="JavaScript"><DiJavascript1 /></li>
                    <li data-tip="Java"><DiJava /></li>
                    <li data-tip="PHP"><DiPhp /></li>
                    <li data-tip="Docker"><DiDocker /></li>
                    <li data-tip="Git"><DiGithub /></li>
                    <li data-tip="CSS3"><DiCss3 /></li>
                    <li data-tip="HTML5"><DiHtml5 /></li>
                    <li data-tip="Linux"><DiLinux /></li>
                    <li data-tip="PostgreSQL"><DiPostgresql /></li>
                    <li data-tip="MySQL"><DiMysql /></li>
                    <li data-tip="NodeJS"><DiNodejsSmall /></li>
                </ul>
            </div>
        </div>
    )
}

export default About